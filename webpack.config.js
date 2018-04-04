const path = require('path');

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = config;
