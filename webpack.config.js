const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);
  return [{
    entry: './src/main.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
    
    module: { 
      rules: [
        { test: /\.html$/i, use: 'html-loader' },
        { test: /\.css$/i, use: ['style-loader', 'css-loader' + (isDevBuild ? '' : '?minimize')]}
      ]
     }
  }]
};