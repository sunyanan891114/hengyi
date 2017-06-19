const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const include = [ path.resolve(__dirname, '../src/')];

module.exports = {
  devtool: 'source-maps',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/scss/default.scss',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index-template.html'),
      favicon: 'favicon.ico',
      filename: '../index.html'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000' },
      { test: /\.(s)*css$/, loader: "style!css!sass" }
    ]
  }
};
