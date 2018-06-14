const path = require('path');
const HtmlWebpackPlguin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../test/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'super-vuex': path.resolve(__dirname, '..')
    }
  },
  plugins: [
    new HtmlWebpackPlguin({
      template: path.resolve(__dirname, '../test/index.html')
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    port: 3000,
    // host: 'authorize.u51-inc.com',
    host: '0.0.0.0',
    historyApiFallback: true
  }
};