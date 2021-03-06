const Webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: path.resolve(__dirname, './../src/main.ts'),
  output: {
    path: path.resolve(__dirname, './../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [path.resolve(__dirname, './../src')]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        include: [path.resolve(__dirname, './../src')]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[has:7].[ext]'
          }
        }

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}