const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./base.config');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('static/dist'),
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve('/dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendors'],
      template: path.resolve('static', 'template.html'),
      favicon: path.resolve('static', 'favicon.ico'),
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.MOVIE_API_KEY': JSON.stringify(process.env.MOVIE_API_KEY),
    }),
  ]
});
