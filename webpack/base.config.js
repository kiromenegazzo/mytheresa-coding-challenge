require('dotenv').config();

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve('src', 'index.js'),
  },
  output: {
    path: path.resolve('server/dist'),
  },
  resolve: {
    alias: {
      pages: path.resolve('src', 'pages'),
      components: path.resolve('src', 'components'),
      constants: path.resolve('src', 'constants'),
      assets: path.resolve('src', 'assets'),
      hooks: path.resolve('src', 'hooks'),
      utils: path.resolve('src', 'utils'),
      store: path.resolve('src', 'store'),
    },
    modules: ['node_modules'],
    symlinks: false,
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
