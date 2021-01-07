<!-- omit in toc -->
# AWS Serverless Application Model (AWS SAM) TypeScript Starter

An opinionated boilerplate for getting up and running using [TypeScript](https://www.typescriptlang.org/)
and [AWS Serverless Application Model (AWS SAM)](https://aws.amazon.com/serverless/sam/).

## Requirements

- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [Node.js >12.x](https://nodejs.org/en/download/)

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

- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [NPM Scripts](#npm-scripts)
  - [`npm run start`](#npm-run-start)
  - [`npm run debug`](#npm-run-debug)
  - [`npm run deploy`](#npm-run-deploy)
  - [`npm run lint`](#npm-run-lint)
  - [`npm run test`](#npm-run-test)
  - [`npm run test:watch`](#npm-run-testwatch)
  - [`npm run test:int`](#npm-run-testint)
  - [`npm run typecheck`](#npm-run-typecheck)
  - [`npm run clean`](#npm-run-clean)
- [Features](#features)
  - [Webpack / AWS SAM (Serverless Application Model)](#webpack--aws-sam-serverless-application-model)
  - [Visual Studio Code](#visual-studio-code)
  - [Testing](#testing)
  - [Linting/Styling](#lintingstyling)
- [TODOs](#todos)

## NPM Scripts

### `npm run start`

Starts offline mode

Creates an initial build to remove any cached files, then runs webpack in watch mode concurrently with [`sam local start-api`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html)

### `npm run debug`

Executes the same commands as `npm run start` but specifies the debug port
for `sam local start-api` to use.

How-to:

1. Set a breakpoint on `hello.ts`
2. Run `npm run debug`
3. Make a GET request on [http://127.0.0.1:3000/hello](http://127.0.0.1:3000/hello)
4. Attach the node debugger with the `Attach: HelloWorldFunction` launch configuration

Additional Info: [AWS: Step-through debugging Node.js functions locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging-nodejs.html)

### `npm run deploy`

Runs `sam deploy` in guided mode

### `npm run lint`

Lints and auto-fixes any auto-fixable problems

### `npm run test`

Run tests and collect coverage

### `npm run test:watch`

Run tests in watch mode

### `npm run test:int`

Run integration tests

### `npm run typecheck`

Type check with the TypeScript compiler

### `npm run clean`

Deletes compiled code from `.aws-sam/`

## Features

### Webpack / AWS SAM (Serverless Application Model)

[Webpack](https://webpack.js.org/) and [AWS SAM Webpack Plugin](https://github.com/graphboss/aws-sam-webpack-plugin)
to optimize bundle sizes and [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html)
for local emulation.

### Visual Studio Code

Pre-configured project level settings for [VSCode](https://github.com/microsoft/vscode) including:

- Recommended extensions - [link](./.vscode/extensions.json)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Launch Configuration - [link](./.vscode/launch.json)
  - Current TS File - Uses [ts-node](https://github.com/TypeStrong/ts-node) for execution on your current file
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

## TODOs

- [x]  Add vscode launch configuration for debug on `sam local start-api`
- [ ]  Open PR for `aws-sam-webpack-plugin` with **append** behavior on launch configurations
