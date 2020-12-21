const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const chalk = require('chalk');
const AwsSamPlugin = require('aws-sam-webpack-plugin');

if (process.env.IS_LOCAL) {
  console.log(chalk.green('Running in local mode from process.env.IS_LOCAL'));
}

const awsSamPlugin = new AwsSamPlugin({ vscodeDebug: false });
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  entry: awsSamPlugin.entry(),
  mode: isProd ? 'production' : 'development',
  devtool: process.env.IS_LOCAL ? 'eval-cheap-module-source-map' : 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts', '.js'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    filename: chunkData => awsSamPlugin.filename(chunkData),
    libraryTarget: 'commonjs2',
    path: path.resolve('.'),
  },
  target: 'node',
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
    awsSamPlugin,
  ],
};
