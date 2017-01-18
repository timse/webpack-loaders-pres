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
          {loader: './loader.js'}
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
