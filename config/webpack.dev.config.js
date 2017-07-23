const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const include = [ path.resolve(__dirname, '../src/')];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/scss/default.scss',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index-template.html'),
      favicon: 'favicon.ico',
      filename: '../static/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          { loader: 'url-loader?limit=0' },
          { loader: "img-loader" }
        ]
      },
      {
        test: /\.(s)*css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../static"),
    compress: true,
    port: 9000
  }
};
