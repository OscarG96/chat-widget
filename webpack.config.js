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
        { test: /\.css$/i, use: ['style-loader', 'css-loader' + (isDevBuild ? '' : '?minimize')]},
        {
          test: /\.m?js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"], // ensure compatibility with older browsers
              plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
            },
          },
        },
        
      ]
     }
  }]
};