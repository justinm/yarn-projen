# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### YarnWorkspaceProjectOptions <a name="yarn-projen.YarnWorkspaceProjectOptions" id="yarnprojenyarnworkspaceprojectoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { YarnWorkspaceProjectOptions } from 'yarn-projen'

const yarnWorkspaceProjectOptions: YarnWorkspaceProjectOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#yarnprojenyarnworkspaceprojectoptionspropertyname)<span title="Required">*</span> | `string` | This is the name of your project. |
| [`logging`](#yarnprojenyarnworkspaceprojectoptionspropertylogging) | [`projen.LoggerOptions`](#projen.LoggerOptions) | Configure logging options such as verbosity. |
| [`outdir`](#yarnprojenyarnworkspaceprojectoptionspropertyoutdir) | `string` | The root directory of the project. |
| [`parent`](#yarnprojenyarnworkspaceprojectoptionspropertyparent) | [`projen.Project`](#projen.Project) | The parent project, if this project is part of a bigger project. |
| [`projenCommand`](#yarnprojenyarnworkspaceprojectoptionspropertyprojencommand) | `string` | The shell command to use in order to run the projen CLI. |
| [`projenrcJson`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjson) | `boolean` | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| [`projenrcJsonOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjsonoptions) | [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions) | Options for .projenrc.json. |
| [`autoApproveOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyautoapproveoptions) | [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions) | Enable and configure the 'auto approve' workflow. |
| [`autoMergeOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyautomergeoptions) | [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions) | Configure options for automatic merging on GitHub. |
| [`clobber`](#yarnprojenyarnworkspaceprojectoptionspropertyclobber) | `boolean` | Add a `clobber` task which resets the repo to origin. |
| [`devContainer`](#yarnprojenyarnworkspaceprojectoptionspropertydevcontainer) | `boolean` | Add a VSCode development environment (used for GitHub Codespaces). |
| [`github`](#yarnprojenyarnworkspaceprojectoptionspropertygithub) | `boolean` | Enable GitHub integration. |
| [`githubOptions`](#yarnprojenyarnworkspaceprojectoptionspropertygithuboptions) | [`projen.github.GitHubOptions`](#projen.github.GitHubOptions) | Options for GitHub integration. |
| [`gitpod`](#yarnprojenyarnworkspaceprojectoptionspropertygitpod) | `boolean` | Add a Gitpod development environment. |
| [`mergify`](#yarnprojenyarnworkspaceprojectoptionspropertymergify) | `boolean` | Whether mergify should be enabled on this repository or not. |
| [`mergifyOptions`](#yarnprojenyarnworkspaceprojectoptionspropertymergifyoptions) | [`projen.github.MergifyOptions`](#projen.github.MergifyOptions) | Options for mergify. |
| [`projectType`](#yarnprojenyarnworkspaceprojectoptionspropertyprojecttype) | [`projen.ProjectType`](#projen.ProjectType) | Which type of project this is (library/app). |
| [`readme`](#yarnprojenyarnworkspaceprojectoptionspropertyreadme) | [`projen.SampleReadmeProps`](#projen.SampleReadmeProps) | The README setup. |
| [`stale`](#yarnprojenyarnworkspaceprojectoptionspropertystale) | `boolean` | Auto-close of stale issues and pull request. |
| [`staleOptions`](#yarnprojenyarnworkspaceprojectoptionspropertystaleoptions) | [`projen.github.StaleOptions`](#projen.github.StaleOptions) | Auto-close stale issues and pull requests. |
| [`vscode`](#yarnprojenyarnworkspaceprojectoptionspropertyvscode) | `boolean` | Enable VSCode integration. |
| [`allowLibraryDependencies`](#yarnprojenyarnworkspaceprojectoptionspropertyallowlibrarydependencies) | `boolean` | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| [`authorEmail`](#yarnprojenyarnworkspaceprojectoptionspropertyauthoremail) | `string` | Author's e-mail. |
| [`authorName`](#yarnprojenyarnworkspaceprojectoptionspropertyauthorname) | `string` | Author's name. |
| [`authorOrganization`](#yarnprojenyarnworkspaceprojectoptionspropertyauthororganization) | `boolean` | Author's Organization. |
| [`authorUrl`](#yarnprojenyarnworkspaceprojectoptionspropertyauthorurl) | `string` | Author's URL / Website. |
| [`autoDetectBin`](#yarnprojenyarnworkspaceprojectoptionspropertyautodetectbin) | `boolean` | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| [`bin`](#yarnprojenyarnworkspaceprojectoptionspropertybin) | {[ key: string ]: `string`} | Binary programs vended with your module. |
| [`bundledDeps`](#yarnprojenyarnworkspaceprojectoptionspropertybundleddeps) | `string`[] | List of dependencies to bundle into this module. |
| [`codeArtifactOptions`](#yarnprojenyarnworkspaceprojectoptionspropertycodeartifactoptions) | [`projen.CodeArtifactOptions`](#projen.CodeArtifactOptions) | Options for publishing npm package to AWS CodeArtifact. |
| [`deps`](#yarnprojenyarnworkspaceprojectoptionspropertydeps) | `string`[] | Runtime dependencies of this module. |
| [`description`](#yarnprojenyarnworkspaceprojectoptionspropertydescription) | `string` | The description is just a string that helps people understand the purpose of the package. |
| [`devDeps`](#yarnprojenyarnworkspaceprojectoptionspropertydevdeps) | `string`[] | Build dependencies for this module. |
| [`entrypoint`](#yarnprojenyarnworkspaceprojectoptionspropertyentrypoint) | `string` | Module entrypoint (`main` in `package.json`). |
| [`homepage`](#yarnprojenyarnworkspaceprojectoptionspropertyhomepage) | `string` | Package's Homepage / Website. |
| [`keywords`](#yarnprojenyarnworkspaceprojectoptionspropertykeywords) | `string`[] | Keywords to include in `package.json`. |
| [`license`](#yarnprojenyarnworkspaceprojectoptionspropertylicense) | `string` | License's SPDX identifier. |
| [`licensed`](#yarnprojenyarnworkspaceprojectoptionspropertylicensed) | `boolean` | Indicates if a license should be added. |
| [`maxNodeVersion`](#yarnprojenyarnworkspaceprojectoptionspropertymaxnodeversion) | `string` | Minimum node.js version to require via `engines` (inclusive). |
| [`minNodeVersion`](#yarnprojenyarnworkspaceprojectoptionspropertyminnodeversion) | `string` | Minimum Node.js version to require via package.json `engines` (inclusive). |
| [`npmAccess`](#yarnprojenyarnworkspaceprojectoptionspropertynpmaccess) | [`projen.NpmAccess`](#projen.NpmAccess) | Access level of the npm package. |
| [`npmDistTag`](#yarnprojenyarnworkspaceprojectoptionspropertynpmdisttag) | `string` | Tags can be used to provide an alias instead of version numbers. |
| [`npmRegistry`](#yarnprojenyarnworkspaceprojectoptionspropertynpmregistry) | `string` | The host name of the npm registry to publish to. |
| [`npmRegistryUrl`](#yarnprojenyarnworkspaceprojectoptionspropertynpmregistryurl) | `string` | The base URL of the npm package registry. |
| [`npmTokenSecret`](#yarnprojenyarnworkspaceprojectoptionspropertynpmtokensecret) | `string` | GitHub secret which contains the NPM token to use when publishing packages. |
| [`packageManager`](#yarnprojenyarnworkspaceprojectoptionspropertypackagemanager) | [`projen.NodePackageManager`](#projen.NodePackageManager) | The Node Package Manager used to execute scripts. |
| [`packageName`](#yarnprojenyarnworkspaceprojectoptionspropertypackagename) | `string` | The "name" in package.json. |
| [`peerDependencyOptions`](#yarnprojenyarnworkspaceprojectoptionspropertypeerdependencyoptions) | [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions) | Options for `peerDeps`. |
| [`peerDeps`](#yarnprojenyarnworkspaceprojectoptionspropertypeerdeps) | `string`[] | Peer dependencies for this module. |
| [`repository`](#yarnprojenyarnworkspaceprojectoptionspropertyrepository) | `string` | The repository is the location where the actual code for your package lives. |
| [`repositoryDirectory`](#yarnprojenyarnworkspaceprojectoptionspropertyrepositorydirectory) | `string` | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| [`scripts`](#yarnprojenyarnworkspaceprojectoptionspropertyscripts) | {[ key: string ]: `string`} | npm scripts to include. |
| [`stability`](#yarnprojenyarnworkspaceprojectoptionspropertystability) | `string` | Package's Stability. |
| [`antitamper`](#yarnprojenyarnworkspaceprojectoptionspropertyantitamper) | `boolean` | Checks that after build there are no modified files on git. |
| [`artifactsDirectory`](#yarnprojenyarnworkspaceprojectoptionspropertyartifactsdirectory) | `string` | A directory which will contain artifacts to be published to npm. |
| [`jsiiReleaseVersion`](#yarnprojenyarnworkspaceprojectoptionspropertyjsiireleaseversion) | `string` | Version requirement of `jsii-release` which is used to publish modules to npm. |
| [`majorVersion`](#yarnprojenyarnworkspaceprojectoptionspropertymajorversion) | `number` | Major version to release from the default branch. |
| [`postBuildSteps`](#yarnprojenyarnworkspaceprojectoptionspropertypostbuildsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | Steps to execute after build as part of the release workflow. |
| [`prerelease`](#yarnprojenyarnworkspaceprojectoptionspropertyprerelease) | `string` | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| [`releaseBranches`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasebranches) | {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)} | Defines additional release branches. |
| [`releaseEveryCommit`](#yarnprojenyarnworkspaceprojectoptionspropertyreleaseeverycommit) | `boolean` | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| [`releaseFailureIssue`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasefailureissue) | `boolean` | Create a github issue on every failed publishing task. |
| [`releaseFailureIssueLabel`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasefailureissuelabel) | `string` | The label to apply to issues indicating publish failures. |
| [`releaseSchedule`](#yarnprojenyarnworkspaceprojectoptionspropertyreleaseschedule) | `string` | CRON schedule to trigger new releases. |
| [`releaseTagPrefix`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasetagprefix) | `string` | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| [`releaseTrigger`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasetrigger) | [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger) | The release trigger to use. |
| [`releaseWorkflowName`](#yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflowname) | `string` | The name of the default release workflow. |
| [`releaseWorkflowSetupSteps`](#yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflowsetupsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | A set of workflow steps to execute in order to setup the workflow container. |
| [`versionrcOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyversionrcoptions) | {[ key: string ]: `any`} | Custom configuration used when creating changelog with standard-version package. |
| [`workflowContainerImage`](#yarnprojenyarnworkspaceprojectoptionspropertyworkflowcontainerimage) | `string` | Container image to use for GitHub workflows. |
| [`defaultReleaseBranch`](#yarnprojenyarnworkspaceprojectoptionspropertydefaultreleasebranch)<span title="Required">*</span> | `string` | The name of the main release branch. |
| [`autoApproveProjenUpgrades`](#yarnprojenyarnworkspaceprojectoptionspropertyautoapproveprojenupgrades) | `boolean` | Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`autoApproveUpgrades`](#yarnprojenyarnworkspaceprojectoptionspropertyautoapproveupgrades) | `boolean` | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`buildWorkflow`](#yarnprojenyarnworkspaceprojectoptionspropertybuildworkflow) | `boolean` | Define a GitHub workflow for building PRs. |
| [`bundlerOptions`](#yarnprojenyarnworkspaceprojectoptionspropertybundleroptions) | [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions) | Options for `Bundler`. |
| [`codeCov`](#yarnprojenyarnworkspaceprojectoptionspropertycodecov) | `boolean` | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| [`codeCovTokenSecret`](#yarnprojenyarnworkspaceprojectoptionspropertycodecovtokensecret) | `string` | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| [`copyrightOwner`](#yarnprojenyarnworkspaceprojectoptionspropertycopyrightowner) | `string` | License copyright owner. |
| [`copyrightPeriod`](#yarnprojenyarnworkspaceprojectoptionspropertycopyrightperiod) | `string` | The copyright years to put in the LICENSE file. |
| [`dependabot`](#yarnprojenyarnworkspaceprojectoptionspropertydependabot) | `boolean` | Use dependabot to handle dependency upgrades. |
| [`dependabotOptions`](#yarnprojenyarnworkspaceprojectoptionspropertydependabotoptions) | [`projen.github.DependabotOptions`](#projen.github.DependabotOptions) | Options for dependabot. |
| [`depsUpgrade`](#yarnprojenyarnworkspaceprojectoptionspropertydepsupgrade) | `boolean` | Use github workflows to handle dependency upgrades. |
| [`depsUpgradeOptions`](#yarnprojenyarnworkspaceprojectoptionspropertydepsupgradeoptions) | [`projen.UpgradeDependenciesOptions`](#projen.UpgradeDependenciesOptions) | Options for depsUpgrade. |
| [`gitignore`](#yarnprojenyarnworkspaceprojectoptionspropertygitignore) | `string`[] | Additional entries to .gitignore. |
| [`jest`](#yarnprojenyarnworkspaceprojectoptionspropertyjest) | `boolean` | Setup jest unit tests. |
| [`jestOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyjestoptions) | [`projen.JestOptions`](#projen.JestOptions) | Jest options. |
| [`mutableBuild`](#yarnprojenyarnworkspaceprojectoptionspropertymutablebuild) | `boolean` | Automatically update files modified during builds to pull-request branches. |
| [`npmignore`](#yarnprojenyarnworkspaceprojectoptionspropertynpmignore) | `string`[] | Additional entries to .npmignore. |
| [`npmignoreEnabled`](#yarnprojenyarnworkspaceprojectoptionspropertynpmignoreenabled) | `boolean` | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| [`projenDevDependency`](#yarnprojenyarnworkspaceprojectoptionspropertyprojendevdependency) | `boolean` | Indicates of "projen" should be installed as a devDependency. |
| [`projenrcJs`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjs) | `boolean` | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| [`projenrcJsOptions`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjsoptions) | [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions) | Options for .projenrc.js. |
| [`projenUpgradeAutoMerge`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradeautomerge) | `boolean` | Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`projenUpgradeSchedule`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradeschedule) | `string`[] | Customize the projenUpgrade schedule in cron expression. |
| [`projenUpgradeSecret`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradesecret) | `string` | Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). |
| [`projenVersion`](#yarnprojenyarnworkspaceprojectoptionspropertyprojenversion) | `string` | Version of projen to install. |
| [`pullRequestTemplate`](#yarnprojenyarnworkspaceprojectoptionspropertypullrequesttemplate) | `boolean` | Include a GitHub pull request template. |
| [`pullRequestTemplateContents`](#yarnprojenyarnworkspaceprojectoptionspropertypullrequesttemplatecontents) | `string`[] | The contents of the pull request template. |
| [`release`](#yarnprojenyarnworkspaceprojectoptionspropertyrelease) | `boolean` | Add release management to this project. |
| [`releaseToNpm`](#yarnprojenyarnworkspaceprojectoptionspropertyreleasetonpm) | `boolean` | Automatically release to npm when new versions are introduced. |
| [`releaseWorkflow`](#yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflow) | `boolean` | DEPRECATED: renamed to `release`. |
| [`workflowBootstrapSteps`](#yarnprojenyarnworkspaceprojectoptionspropertyworkflowbootstrapsteps) | `any`[] | Workflow steps to use in order to bootstrap this repo. |
| [`workflowGitIdentity`](#yarnprojenyarnworkspaceprojectoptionspropertyworkflowgitidentity) | [`projen.github.GitIdentity`](#projen.github.GitIdentity) | The git identity to use in workflows. |
| [`workflowNodeVersion`](#yarnprojenyarnworkspaceprojectoptionspropertyworkflownodeversion) | `string` | The node version to use in GitHub workflows. |
| [`eslint`](#yarnprojenyarnworkspaceprojectoptionspropertyeslint) | `boolean` | Indicates this project should enable eslint. |
| [`eslintConfig`](#yarnprojenyarnworkspaceprojectoptionspropertyeslintconfig) | [`projen.EslintOptions`](#projen.EslintOptions) | If eslint is enabled, provide options for its configuration. |
| [`typescript`](#yarnprojenyarnworkspaceprojectoptionspropertytypescript) | `boolean` | Indicates this project as typescript based. |
| [`typescriptConfig`](#yarnprojenyarnworkspaceprojectoptionspropertytypescriptconfig) | [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions) | If typescript and jest is enabled, this property is required for proper Jest/Typescript configuration. |

---

##### `name`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.name" id="yarnprojenyarnworkspaceprojectoptionspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.logging" id="yarnprojenyarnworkspaceprojectoptionspropertylogging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.outdir" id="yarnprojenyarnworkspaceprojectoptionspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.  If this project has a parent, this directory is relative to the parent directory and it cannot be the same as the parent or any of it's other sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.parent" id="yarnprojenyarnworkspaceprojectoptionspropertyparent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenCommand" id="yarnprojenyarnworkspaceprojectoptionspropertyprojencommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenrcJson" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenrcJsonOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjsonoptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.autoApproveOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyautoapproveoptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.autoMergeOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyautomergeoptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if `github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.clobber" id="yarnprojenyarnworkspaceprojectoptionspropertyclobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.devContainer" id="yarnprojenyarnworkspaceprojectoptionspropertydevcontainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.github" id="yarnprojenyarnworkspaceprojectoptionspropertygithub"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.githubOptions" id="yarnprojenyarnworkspaceprojectoptionspropertygithuboptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.gitpod" id="yarnprojenyarnworkspaceprojectoptionspropertygitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.mergify" id="yarnprojenyarnworkspaceprojectoptionspropertymergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.mergifyOptions" id="yarnprojenyarnworkspaceprojectoptionspropertymergifyoptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projectType" id="yarnprojenyarnworkspaceprojectoptionspropertyprojecttype"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.readme" id="yarnprojenyarnworkspaceprojectoptionspropertyreadme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.stale" id="yarnprojenyarnworkspaceprojectoptionspropertystale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.staleOptions" id="yarnprojenyarnworkspaceprojectoptionspropertystaleoptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.vscode" id="yarnprojenyarnworkspaceprojectoptionspropertyvscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.allowLibraryDependencies" id="yarnprojenyarnworkspaceprojectoptionspropertyallowlibrarydependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.authorEmail" id="yarnprojenyarnworkspaceprojectoptionspropertyauthoremail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.authorName" id="yarnprojenyarnworkspaceprojectoptionspropertyauthorname"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.authorOrganization" id="yarnprojenyarnworkspaceprojectoptionspropertyauthororganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.authorUrl" id="yarnprojenyarnworkspaceprojectoptionspropertyauthorurl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.autoDetectBin" id="yarnprojenyarnworkspaceprojectoptionspropertyautodetectbin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.bin" id="yarnprojenyarnworkspaceprojectoptionspropertybin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in your `package.json`, but unless `autoDetectBin` is `false`, every executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.bundledDeps" id="yarnprojenyarnworkspaceprojectoptionspropertybundleddeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be added both to the `dependencies` section and `peerDependencies` section of your `package.json`.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.codeArtifactOptions" id="yarnprojenyarnworkspaceprojectoptionspropertycodeartifactoptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* [`projen.CodeArtifactOptions`](#projen.CodeArtifactOptions)
- *Default:* undefined

Options for publishing npm package to AWS CodeArtifact.

---

##### `deps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.deps" id="yarnprojenyarnworkspaceprojectoptionspropertydeps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.description" id="yarnprojenyarnworkspaceprojectoptionspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well. See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.devDeps" id="yarnprojenyarnworkspaceprojectoptionspropertydevdeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be available in your build environment but will not be fetched when this module is consumed.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.entrypoint" id="yarnprojenyarnworkspaceprojectoptionspropertyentrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.homepage" id="yarnprojenyarnworkspaceprojectoptionspropertyhomepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.keywords" id="yarnprojenyarnworkspaceprojectoptionspropertykeywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.license" id="yarnprojenyarnworkspaceprojectoptionspropertylicense"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses. Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.licensed" id="yarnprojenyarnworkspaceprojectoptionspropertylicensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.maxNodeVersion" id="yarnprojenyarnworkspaceprojectoptionspropertymaxnodeversion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.minNodeVersion" id="yarnprojenyarnworkspaceprojectoptionspropertyminnodeversion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmAccess" id="yarnprojenyarnworkspaceprojectoptionspropertynpmaccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmDistTag" id="yarnprojenyarnworkspaceprojectoptionspropertynpmdisttag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development and use a different tag for each stream, e.g., stable, beta, dev, canary.  By default, the `latest` tag is used by npm to identify the current version of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>` specifier) installs the latest tag. Typically, projects only use the `latest` tag for stable release versions, and use other tags for unstable versions such as prereleases.  The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmRegistry" id="yarnprojenyarnworkspaceprojectoptionspropertynpmregistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmRegistryUrl" id="yarnprojenyarnworkspaceprojectoptionspropertynpmregistryurl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmTokenSecret" id="yarnprojenyarnworkspaceprojectoptionspropertynpmtokensecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.packageManager" id="yarnprojenyarnworkspaceprojectoptionspropertypackagemanager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.packageName" id="yarnprojenyarnworkspaceprojectoptionspropertypackagename"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.peerDependencyOptions" id="yarnprojenyarnworkspaceprojectoptionspropertypeerdependencyoptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.peerDeps" id="yarnprojenyarnworkspaceprojectoptionspropertypeerdeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to be installed (and satisfied) by the _consumer_ of this library. Using peer dependencies allows you to ensure that only a single module of a certain library exists in the `node_modules` tree of your consumers.  Note that prior to npm@7, peer dependencies are _not_ automatically installed, which means that adding peer dependencies to a library will be a breaking change for your customers.  Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is enabled by default), projen will automatically add a dev dependency with a pinned version for each peer dependency. This will ensure that you build & test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.repository" id="yarnprojenyarnworkspaceprojectoptionspropertyrepository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.repositoryDirectory" id="yarnprojenyarnworkspaceprojectoptionspropertyrepositorydirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.scripts" id="yarnprojenyarnworkspaceprojectoptionspropertyscripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script, the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.stability" id="yarnprojenyarnworkspaceprojectoptionspropertystability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.antitamper" id="yarnprojenyarnworkspaceprojectoptionspropertyantitamper"></a>

```typescript
public readonly antitamper: boolean;
```

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.artifactsDirectory" id="yarnprojenyarnworkspaceprojectoptionspropertyartifactsdirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.jsiiReleaseVersion" id="yarnprojenyarnworkspaceprojectoptionspropertyjsiireleaseversion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.majorVersion" id="yarnprojenyarnworkspaceprojectoptionspropertymajorversion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line. If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.postBuildSteps" id="yarnprojenyarnworkspaceprojectoptionspropertypostbuildsteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.prerelease" id="yarnprojenyarnworkspaceprojectoptionspropertyprerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseBranches" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasebranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each release branch which will publish releases from commits in this branch. Each release branch _must_ be assigned a major version number which is used to enforce that versions published from that branch always use that major version. If multiple branches are used, the `majorVersion` field must also be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseEveryCommit" id="yarnprojenyarnworkspaceprojectoptionspropertyreleaseeverycommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseFailureIssue" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasefailureissue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseFailureIssueLabel" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasefailureissuelabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseSchedule" id="yarnprojenyarnworkspaceprojectoptionspropertyreleaseschedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseTagPrefix" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasetagprefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* `string`
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version when bumping, so if you change this on a project with an existing version history, you may need to manually tag your latest release with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseTrigger" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasetrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger)
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseWorkflowName" id="yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflowname"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseWorkflowSetupSteps" id="yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflowsetupsteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.versionrcOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyversionrcoptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.workflowContainerImage" id="yarnprojenyarnworkspaceprojectoptionspropertyworkflowcontainerimage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.defaultReleaseBranch" id="yarnprojenyarnworkspaceprojectoptionspropertydefaultreleasebranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.autoApproveProjenUpgrades" id="yarnprojenyarnworkspaceprojectoptionspropertyautoapproveprojenupgrades"></a>

```typescript
public readonly autoApproveProjenUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.autoApproveUpgrades" id="yarnprojenyarnworkspaceprojectoptionspropertyautoapproveupgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.buildWorkflow" id="yarnprojenyarnworkspaceprojectoptionspropertybuildworkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.bundlerOptions" id="yarnprojenyarnworkspaceprojectoptionspropertybundleroptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions)

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.codeCov" id="yarnprojenyarnworkspaceprojectoptionspropertycodecov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.codeCovTokenSecret" id="yarnprojenyarnworkspaceprojectoptionspropertycodecovtokensecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.copyrightOwner" id="yarnprojenyarnworkspaceprojectoptionspropertycopyrightowner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.copyrightPeriod" id="yarnprojenyarnworkspaceprojectoptionspropertycopyrightperiod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.dependabot" id="yarnprojenyarnworkspaceprojectoptionspropertydependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.dependabotOptions" id="yarnprojenyarnworkspaceprojectoptionspropertydependabotoptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.depsUpgrade" id="yarnprojenyarnworkspaceprojectoptionspropertydepsupgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.depsUpgradeOptions" id="yarnprojenyarnworkspaceprojectoptionspropertydepsupgradeoptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* [`projen.UpgradeDependenciesOptions`](#projen.UpgradeDependenciesOptions)
- *Default:* default options

Options for depsUpgrade.

---

##### `gitignore`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.gitignore" id="yarnprojenyarnworkspaceprojectoptionspropertygitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.jest" id="yarnprojenyarnworkspaceprojectoptionspropertyjest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.jestOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyjestoptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.mutableBuild" id="yarnprojenyarnworkspaceprojectoptionspropertymutablebuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will always be up-to-date before a PR is merged.  Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmignore" id="yarnprojenyarnworkspaceprojectoptionspropertynpmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.npmignoreEnabled" id="yarnprojenyarnworkspaceprojectoptionspropertynpmignoreenabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenDevDependency" id="yarnprojenyarnworkspaceprojectoptionspropertyprojendevdependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenrcJs" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenrcJsOptions" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenrcjsoptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenUpgradeAutoMerge" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradeautomerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

```typescript
public readonly projenUpgradeAutoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenUpgradeSchedule" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradeschedule"></a>

```typescript
public readonly projenUpgradeSchedule: string[];
```

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenUpgradeSecret" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenupgradesecret"></a>

```typescript
public readonly projenUpgradeSecret: string;
```

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token with `repo` and `workflow` permissions.  This token is used to submit the upgrade pull request, which will likely include workflow updates.  To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.projenVersion" id="yarnprojenyarnworkspaceprojectoptionspropertyprojenversion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.pullRequestTemplate" id="yarnprojenyarnworkspaceprojectoptionspropertypullrequesttemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.pullRequestTemplateContents" id="yarnprojenyarnworkspaceprojectoptionspropertypullrequesttemplatecontents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.release" id="yarnprojenyarnworkspaceprojectoptionspropertyrelease"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseToNpm" id="yarnprojenyarnworkspaceprojectoptionspropertyreleasetonpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.releaseWorkflow" id="yarnprojenyarnworkspaceprojectoptionspropertyreleaseworkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.workflowBootstrapSteps" id="yarnprojenyarnworkspaceprojectoptionspropertyworkflowbootstrapsteps"></a>

```typescript
public readonly workflowBootstrapSteps: any[];
```

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.workflowGitIdentity" id="yarnprojenyarnworkspaceprojectoptionspropertyworkflowgitidentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* [`projen.github.GitIdentity`](#projen.github.GitIdentity)
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.workflowNodeVersion" id="yarnprojenyarnworkspaceprojectoptionspropertyworkflownodeversion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `eslint`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.eslint" id="yarnprojenyarnworkspaceprojectoptionspropertyeslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`

Indicates this project should enable eslint.

---

##### `eslintConfig`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.eslintConfig" id="yarnprojenyarnworkspaceprojectoptionspropertyeslintconfig"></a>

```typescript
public readonly eslintConfig: EslintOptions;
```

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)

If eslint is enabled, provide options for its configuration.

---

##### `typescript`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.typescript" id="yarnprojenyarnworkspaceprojectoptionspropertytypescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* `boolean`

Indicates this project as typescript based.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProjectOptions.property.typescriptConfig" id="yarnprojenyarnworkspaceprojectoptionspropertytypescriptconfig"></a>

```typescript
public readonly typescriptConfig: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)

If typescript and jest is enabled, this property is required for proper Jest/Typescript configuration.

---

## Classes <a name="Classes" id="classes"></a>

### YarnWorkspaceProject <a name="yarn-projen.YarnWorkspaceProject" id="yarnprojenyarnworkspaceproject"></a>

YarnWorkspaceProjects use Yarn Workspaces to setup mono repositories.

#### Initializers <a name="yarn-projen.YarnWorkspaceProject.Initializer" id="yarnprojenyarnworkspaceprojectinitializer"></a>

```typescript
import { YarnWorkspaceProject } from 'yarn-projen'

new YarnWorkspaceProject(options: YarnWorkspaceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`options`](#yarnprojenyarnworkspaceprojectparameteroptions)<span title="Required">*</span> | [`yarn-projen.YarnWorkspaceProjectOptions`](#yarn-projen.YarnWorkspaceProjectOptions) | *No description.* |

---

##### `options`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProject.parameter.options" id="yarnprojenyarnworkspaceprojectparameteroptions"></a>

- *Type:* [`yarn-projen.YarnWorkspaceProjectOptions`](#yarn-projen.YarnWorkspaceProjectOptions)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addWorkspace`](#yarnprojenyarnworkspaceprojectaddworkspace) | Add a subproject as a workspace. |
| [`link`](#yarnprojenyarnworkspaceprojectlink) | Create a dependency link between two workspace projects. |
| [`preSynthesize`](#yarnprojenyarnworkspaceprojectpresynthesize) | (experimental) Called before all components are synthesized. |

---

##### `addWorkspace` <a name="yarn-projen.YarnWorkspaceProject.addWorkspace" id="yarnprojenyarnworkspaceprojectaddworkspace"></a>

```typescript
public addWorkspace(workspace: string | NodeProject)
```

###### `workspace`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProject.parameter.workspace" id="yarnprojenyarnworkspaceprojectparameterworkspace"></a>

- *Type:* `string` | [`projen.NodeProject`](#projen.NodeProject)

---

##### `link` <a name="yarn-projen.YarnWorkspaceProject.link" id="yarnprojenyarnworkspaceprojectlink"></a>

```typescript
public link(project: NodeProject, dependency: NodeProject, version: string)
```

###### `project`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProject.parameter.project" id="yarnprojenyarnworkspaceprojectparameterproject"></a>

- *Type:* [`projen.NodeProject`](#projen.NodeProject)

---

###### `dependency`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProject.parameter.dependency" id="yarnprojenyarnworkspaceprojectparameterdependency"></a>

- *Type:* [`projen.NodeProject`](#projen.NodeProject)

---

###### `version`<sup>Required</sup> <a name="yarn-projen.YarnWorkspaceProject.parameter.version" id="yarnprojenyarnworkspaceprojectparameterversion"></a>

- *Type:* `string`

the version of the dependency as specified in its package.json.

---

##### `preSynthesize` <a name="yarn-projen.YarnWorkspaceProject.preSynthesize" id="yarnprojenyarnworkspaceprojectpresynthesize"></a>

```typescript
public preSynthesize()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`eslint`](#yarnprojenyarnworkspaceprojectpropertyeslint) | [`projen.Eslint`](#projen.Eslint) | *No description.* |
| [`jest`](#yarnprojenyarnworkspaceprojectpropertyjest) | [`projen.Jest`](#projen.Jest) | (experimental) The Jest configuration (if enabled). |
| [`typescriptConfig`](#yarnprojenyarnworkspaceprojectpropertytypescriptconfig) | [`projen.TypescriptConfig`](#projen.TypescriptConfig) | *No description.* |

---

##### `eslint`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProject.property.eslint" id="yarnprojenyarnworkspaceprojectpropertyeslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* [`projen.Eslint`](#projen.Eslint)

---

##### `jest`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProject.property.jest" id="yarnprojenyarnworkspaceprojectpropertyjest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* [`projen.Jest`](#projen.Jest)

(experimental) The Jest configuration (if enabled).

---

##### `typescriptConfig`<sup>Optional</sup> <a name="yarn-projen.YarnWorkspaceProject.property.typescriptConfig" id="yarnprojenyarnworkspaceprojectpropertytypescriptconfig"></a>

```typescript
public readonly typescriptConfig: TypescriptConfig;
```

- *Type:* [`projen.TypescriptConfig`](#projen.TypescriptConfig)

---



