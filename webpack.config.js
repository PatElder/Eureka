const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: { helperDirs: path.resolve(__dirname, "helpers") }
          }
        ]
      }
    ]
  }
};
