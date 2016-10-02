/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  resolve: {
    moduleDirectories: 'node_modules',
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    hot: true,
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loaders: ["style", "raw"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "src")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "src")
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: path.join(__dirname, "src")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "src")
    }]
  }
};
