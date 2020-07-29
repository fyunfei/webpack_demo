const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve('./', 'dist')
  }
};