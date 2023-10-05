const path = require("path");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    static: "./build",
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
});
