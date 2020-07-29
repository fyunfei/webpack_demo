const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "production",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: '[id].css',
    }),
  ],
});
