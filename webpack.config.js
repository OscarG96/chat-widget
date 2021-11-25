const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};