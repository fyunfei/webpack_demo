const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");
module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
    }),
    new webpack.DefinePlugin({
      TWO: "1+1",
      TEST: "'production'",
    }),
  ],
});
