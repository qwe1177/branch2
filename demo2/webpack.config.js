const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
        index: './index.js',
    },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "/")
                ],
                use: [{
                    loader: 'babel-loader?cacheDirectory=true'
                }]
            }
        ]
    },
};

module.exports = config;
