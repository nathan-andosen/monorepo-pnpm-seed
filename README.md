# monorepo-pnpm-seed

This monorepo seed app demonstrates how you can use pnpm to create a monorepo that uses private github repo modules that do not have to be published to the public npm registery to be used. Why? You might want to create a monorepo with a collection of node modules that you want to remain private.

To allow us to do this, we have to use relative paths to each package, and in each use case, the import statement needs to be the same, examples below:

__Example 1:__ _When using a module from the monorepo inside another module from the monorepo, you simple import it like so:_

```javascript
import '@example/monorepo/packages/component-module';
```

Notes:

* Our monorepo has a name of `@example/monorepo`, that's why, in the import statement, we then need to reference the package, like `/packages/component-module`

__Example 2:__ _When using a module from the monorepo in an external application_

```javascript
import '@example/monorepo/packages/component-module';
```

### How was this done?

* Using pnpm and workspaces
* In the root of the workspace, you should have a _pnpm-workspace.yaml_ file, with the contents
  ```yaml
  packages:
  - "packages/*"
  - "."
  ```
* You don't need a tsconfig.json file at the root, this is optional, but could be good if you want all package modules to extend this
* In the root of the workspace, you should have a _.npmrc_ file, with the contents
  ```
  node-linker=hoisted
  symlink=true
  ```
* Make sure you have the correct _name_ set in each _package.json_ file
* Inside the package module that will import other modules, you need to set them in the dependencies in the _package.json_ file, something like:
  ```json
  "@example/monorepo": "workspace:*",
  ```