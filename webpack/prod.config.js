const { merge } = require('webpack-merge');

const baseConfig = require('./base.config');
const MiniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    assetModuleFilename: '[id][chunkhash][ext]',
    chunkFilename: 'js/[id][chunkhash].js',
    filename: 'js/[id][chunkhash].js',
    publicPath: '/'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s?css$/,
        use: [MiniCss.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  optimization: {
    minimize: true,
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        defaultVendors: {
          name: 'vendors',
          priority: -1,
          test: /[\\/]node_modules[\\/]/,
        },
        react: {
          name: 'vendors-react',
          test: /[\\/]node_modules[\\/]react/,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new MiniCss({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: "[id].css",
    }),
    new WebpackManifestPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.MOVIE_API_KEY': JSON.stringify(process.env.MOVIE_API_KEY),
    }),
    new CopyPlugin({
      patterns: [
        { from: "static/favicon.ico" },
      ],
    }),
  ]
});
