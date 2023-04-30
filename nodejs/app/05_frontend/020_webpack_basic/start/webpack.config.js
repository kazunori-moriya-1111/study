const path = require("path");
module.exports = {
  mode: "development", //production
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    open: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
};
