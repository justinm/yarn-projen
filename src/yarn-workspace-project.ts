import { NodePackageManager, NodeProject, NodeProjectOptions } from "projen";
import { DependencyType } from "projen/lib/deps";

export interface YarnWorkspaceProjectOptions extends NodeProjectOptions {
  readonly projenrcTs: boolean;
}

/**
 * YarnWorkspaceProjects use Yarn Workspaces to setup mono repositories.
 */
export class YarnWorkspaceProject extends NodeProject {
  private readonly workspaces: Record<string, NodeProject | string> = {};
  private readonly links: {
    project: NodeProject;
    dependency: NodeProject;
    version: string;
  }[] = [];
  private readonly command: string;

  constructor(options: YarnWorkspaceProjectOptions) {
    super({
      ...options,
      packageManager: NodePackageManager.YARN,
      devDeps: ["yarn-projen"].concat(options.devDeps ?? []),
    });

    this.package.addField("private", true);

    if (options.projenrcTs) {
      this.package.addDevDeps("typescript", "ts-node");
      this.command = "ts-node --skip-project .projenrc.ts";
    } else {
      this.command = "node .projenrc.js";
    }
  }

  /**
   * Add a subproject as a workspace
   *
   * @param workspace
   */
  addWorkspace(workspace: NodeProject | string) {
    let outdir: string;

    if (typeof workspace === "string") {
      outdir = workspace;
    } else {
      outdir = workspace.outdir;
      this._addSubProject(workspace);
    }

    if (!outdir && !outdir.startsWith(this.outdir)) {
      throw new Error(
        "A workspace should exist within the outdir of its parent"
      );
    }

    const relativeOutDir = outdir.substring(this.outdir.length + 1);

    this.workspaces[relativeOutDir] = workspace;
  }

  /**
   * Create a dependency link between two workspace projects.
   *
   * @param project
   * @param dependency
   * @param version the version of the dependency as specified in its package.json
   */
  link(project: NodeProject, dependency: NodeProject, version: string) {
    this.links.push({
      project,
      dependency,
      version,
    });
  }

  preSynthesize() {
    super.preSynthesize();

    const defaultTask = this.tasks.tryFind("default");

    defaultTask?.reset(this.command);
    defaultTask?.exec("yarn");

    this.deps.addDependency("yarn-projen", DependencyType.DEVENV);

    this.gitignore.addPatterns(
      ".yarn/*",
      "!.yarn/releases",
      "!.yarn/plugins",
      "!.yarn/sdks",
      "!.yarn/versions",
      ".pnp.*"
    );

    this.package.addField(
      "workspaces",
      Object.values(this.workspaces).map((workspace) => {
        if (typeof workspace === "string") {
          return workspace;
        } else {
          return workspace.outdir;
        }
      })
    );

    this.links.forEach(({ project, dependency, version }) => {
      project.deps.addDependency(
        `${dependency.package.packageName}:${version}`,
        DependencyType.BUILD
      );
    });

    const yarnrc = this.tryFindObjectFile(".yarnrc");

    yarnrc?.addOverride("nodeLinker", "node-modules");
  }
}
