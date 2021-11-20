A simple reproduction bug when esbuild is shared across docker and host with different environments

Steps to reproduce

- Run `npm install` in MacOS or windows anything
- Run `npm run dev`, you should see a simple API running using esbuild `transformSync`
- Run `docker-compose up`, the docker is configured to share `node_modules` from the host. i.e from MacOS here.
- The api wouldn't respond or throw error

#### Reason
The host machine installs `darwin` if it is `macos`. But when `node_modules` are shared, the docker runs in `node-alpine` which needs `arm` based esbuild internals.

Problem can be fixed by running `npm install` once again once the docker is up.

