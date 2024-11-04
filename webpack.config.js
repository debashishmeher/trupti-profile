const path = require("path");
module.exports = {
  mode: "production",
  entry: "./public/js/source.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
