const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  env: {
    production: {
      plugins: [
        ['transform-react-remove-prop-types', { removeImport: true }],
      ],
    },
  },
  plugins: [
    ['babel-plugin-webpack-alias', { config: path.resolve('webpack', 'base.config.js') }],
  ],
};
