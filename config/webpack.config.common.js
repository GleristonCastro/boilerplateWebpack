const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const PATH = {
  dist: path.resolve(__dirname, '../public')
}

const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'assets/js/[name].[contenthash].bundle.js',
    path: PATH.dist
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  targets: {
                    browsers: ['last 2 versions', 'ie 11']
                  }
                }
              ]
            ],
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config