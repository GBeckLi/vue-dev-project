const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const Webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-map',
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
})