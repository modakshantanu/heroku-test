
var path = require("path");

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    entry : "./client/index.js",
    output:{
        path: path.join(__dirname,"client"),
        filename:"bundle.js"
    }
  };