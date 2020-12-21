const { readFileSync } = require('fs');
const { deserialize } = require('@aws-cdk/yaml-cfn');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const chalk = require('chalk');

if (process.env.IS_LOCAL) {
  console.log(chalk.green('Running in local mode from process.env.IS_LOCAL'));
}

const isProd = process.env.NODE_ENV === 'production';
const samTemplate = deserialize(readFileSync('./template.yaml').toString());
const entries = Object.values(samTemplate.Resources)
  .filter(
    resource =>
      resource.Type === 'AWS::Serverless::Function' &&
      resource.Properties.Runtime.startsWith('node')
  )
  .map(({ Properties }) => {
    const [filename] = Properties.Handler.split('.');
    const directory = Properties.CodeUri.split('/')
      .filter(x => x !== '.')
      .slice(1, -1)
      .join('/');
    return {
      filename,
      directory,
    };
  })
  .reduce(
    (entryMap, { filename, directory }) => ({
      ...entryMap,
      [`${directory}${filename}`]: `./src/handlers/${filename}`,
    }),
    {}
  );

module.exports = {
  context: __dirname,
  entry: entries,
  mode: isProd ? 'production' : 'development',
  devtool: process.env.IS_LOCAL ? 'eval-cheap-module-source-map' : 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.aws-sam'),
            path.resolve(__dirname, 'build'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: [`${path.join(__dirname, 'src')}/**/*.{ts,tsx,js,jsx}`],
      },
    }),
    // TODO: Create issue on SAM GitHub addressing the issue of SAM not using package-lock
    // Copy package.json and package-lock.json to build directory for AWS SAM
    new CopyPlugin({
      patterns: ['package.json', 'package-lock.json'],
    }),
  ],
};
