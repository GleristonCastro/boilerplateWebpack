const path = require('path');
const miniCssWebpackPlugin = require('mini-css-extract-plugin');
const common = require ('./webpack.config.common');
const { merge } = require('webpack-merge');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const config = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {loader: miniCssWebpackPlugin.loader},
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          }, 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new miniCssWebpackPlugin({
      filename: 'assets/css/style.[contenthash].css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.src}/**/*`,  { nodir: true }),
    }),
  ]
};

module.exports = merge(common, config);