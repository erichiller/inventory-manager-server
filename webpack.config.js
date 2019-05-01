const webpack = require('webpack');
const path = require('path');
// const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    // 'react-hot-loader/patch',
    './client/src/index.tsx' // your app's entry point
  ],
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],

    modules: [
      path.resolve(__dirname, 'client', 'src'),
      'node_modules'
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'client')
  },
  devServer: {
    contentBase: "./dist",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 8081,
    // host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    }),
  ]
};