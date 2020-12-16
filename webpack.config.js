const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname,
  // TODO: Toggle based on build context
  // mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  mode: 'development',
  // TODO: Parse template.yaml and build out entries
  // entry: slsw.lib.entries,
  entry: {
    hello: './src/handlers/hello.ts',
  },
  // TODO: Toggle based on build context
  // devtool: slsw.lib.webpack.isLocal
  //   ? 'eval-cheap-module-source-map'
  //   : 'source-map',
  devtool: 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs',
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
      patterns: [
        'package.json',
        'package-lock.json',
      ]
    })
  ],
};
