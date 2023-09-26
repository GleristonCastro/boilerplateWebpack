const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require ('./webpack.config.common');
const { merge } = require('webpack-merge');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, "src"),
};

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
          {loader: MiniCssExtractPlugin.loader},
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
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[contenthash].css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ]
};

module.exports = merge(common, config);