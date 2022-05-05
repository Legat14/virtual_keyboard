const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    }, ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 50,
    poll: 50,
  },
  devtool: 'inline-source-map', // При ошибках должна указывать на исходный код
};