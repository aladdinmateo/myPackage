var path = require('path');

module.exports = {
  entry: "./tt/Scripts/test.js",
  output: {
    path: path.resolve(__dirname, "./tt/Css/styles/scripts"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
