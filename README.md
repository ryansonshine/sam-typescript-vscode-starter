<!-- omit in toc -->
# AWS SAM (Serverless Application Model) TypeScript Starter

**Note: This readme has been copied from a Serverless starter and is not an accurate
description of this repository**

## TODOs

- [ ] Raise issue/PR for SAM not reading package-lock.json
- [ ] Update webpack.config.js
- [x] Add SAM vscode launch configurations
- [ ] Update README

---

An opinionated boilerplate for getting up and running using [TypeScript](https://www.typescriptlang.org/)
and [Serverless](https://www.serverless.com/).

## Quick Start

Install dependencies and start to get an emulated API Gateway
running locally by running the following in your terminal:

```sh
npm install && npm start
```

Any changes made to your handler code while this is running will
automatically be detected and restart your local API Gateway
with the new changes live.

<!-- omit in toc -->
## Table of Contents

- [TODOs](#todos)
- [Quick Start](#quick-start)
- [NPM Scripts](#npm-scripts)
- [Features](#features)
  - [Serverless](#serverless)
  - [Visual Studio Code](#visual-studio-code)
  - [Testing](#testing)
  - [Linting/Styling](#lintingstyling)

## NPM Scripts

- `npm run deploy` - Deploy to AWS using Serverless
- `npm run start` - Start offline mode
- `npm run lint` - Lints and auto-fixes any auto-fixable problems
- `npm run test` - Run tests and collect coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run test:int` - Run integration tests
- `npm run typecheck` - Type check with the TypeScript compiler

## Features

### Serverless

[Serverless Webpack](https://github.com/serverless-heaven/serverless-webpack) to
optimize bundle sizes and [Serverless Offline](https://github.com/dherault/serverless-offline)
for local emulation.

### Visual Studio Code

Pre-configured project level settings for [VSCode](https://github.com/microsoft/vscode) including:

- Recommended extensions - [link](./.vscode/extensions.json)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Launch Configuration - [link](./.vscode/launch.json)
  - Current TS File - Uses [ts-node](https://github.com/TypeStrong/ts-node) for execution on your current file
  - Debug Serverless Offline - Launches [serverless-offline](https://github.com/dherault/serverless-offline) in debug mode for placing breakpoints
  - Debug Jest Tests - Runs all tests using [jest](https://github.com/facebook/jest) in debug mode for placing breakpoints
  - Debug Jest Current File - Runs all tests in your current file using [jest](https://github.com/facebook/jest) in debug mode for placing breakpoints
- Settings - [link](./.vscode/settings.json)
  - VSCode set to use the typescript version specified in `package.json`
  - Formats on save using prettier configuration

### Testing

[Jest](https://jestjs.io/) is used for testing and coverage.

### Linting/Styling

[ESLint](https://eslint.org/) is used for linting and has been integrated with
[Prettier](https://prettier.io/).

Code is automatically linted and formatted on the pre-commit hook using [husky](https://github.com/typicode/husky)
and [lint-staged](https://github.com/okonet/lint-staged)
