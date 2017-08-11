const path = require('path');

const config = {
  entry: './lib/components/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;
