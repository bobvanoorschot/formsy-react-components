/* eslint-env node */

const path = require('path');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: {
    playground: path.resolve(__dirname, './playground/src/index.js'),
    refs: path.resolve(__dirname, './refs/src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    alias: {
      'bobvanoorschot-formsy-components': path.resolve(__dirname, '../src/main'),
    },
  },
};
