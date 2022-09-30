# create-nuxt3-app

A package to setup a nuxt 3 project from scratch.

Implementation is in progress at the moment, follow https://github.com/sidestream-tech/sidebase/issues/13 for progress updates.

## Usage

We use [`lerna`](https://lerna.js.org/) to manage our packages. To get started:
```bash
> npm i

# Initial bootstrap, install all sub-deps, see https://github.com/lerna/lerna/tree/main/commands/bootstrap
> npm run bootstrap

# Tests of all sub-packages
> npm run test

# Builds all sub-packages
> npm run build

# Publishes all _changed_ sub-packages
> npm run publish
```
