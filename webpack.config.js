const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'main.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
