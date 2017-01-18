const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.txt$/,
        use: [
          {loader: './textloader.js'}
        ]
      },
      {
        test: /.png$/,
        use: [
          {loader: './imgloader.js'}
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
