import { NodePackageManager, NpmAccess, JsiiProject } from "projen";
import { ReleaseTrigger } from "projen/lib/release";

const authorName = "Justin McCormick";
const authorEmail = "me@justinmccormick.com";
const defaultReleaseBranch = "master";
const repository = "git@github.com:justinm/ampdk.git";
const license = "MIT";

const project = new JsiiProject({
  author: authorName,
  authorAddress: authorEmail,
  defaultReleaseBranch,
  repositoryUrl: repository,
  license,
  description: "A projen project for managing monorepos using Yarn workspaces",
  name: "yarn-project",
  keywords: ["yarn", "monorepo", "projen", "typescript"],
  majorVersion: 0,
  projenrcTs: true,
  packageName: "yarn-projen",
  packageManager: NodePackageManager.YARN,
  peerDeps: ["projen"],
  release: true,
  releaseToNpm: true,
  releaseTrigger: ReleaseTrigger.continuous(),
  dependabot: true,
  jest: false,
  npmAccess: NpmAccess.PUBLIC,
  docgen: true,
  tsconfig: {
    compilerOptions: {
      lib: ["es2019"],
    },
  },
  minNodeVersion: "14.17.0",
  depsUpgradeOptions: {
    ignoreProjen: false,
  },
  eslint: true,
  eslintOptions: {
    dirs: ["src"],
    ignorePatterns: ["node_modules"],
    prettier: true,
    lintProjenRc: true,
  },
  gitignore: [".yalc", ".idea"],
  vscode: true,
  scripts: {
    yalc: "npx yalc publish",
  },
});

project.eslint?.addRules({
  "@typescript-eslint/no-shadow": 0,
});

project.synth();
