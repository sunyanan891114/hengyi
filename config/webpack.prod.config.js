const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/scss/default.scss',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("bundle.css", { allChunks: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index-template.html'),
      favicon: 'favicon.ico',
      filename: '../index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: [ path.join(__dirname, '../src/') ] },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', "img-loader"]
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
  }
};
