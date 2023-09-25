const path = require('path');
const common = require ('./webpack.config.common');
const { merge } = require('webpack-merge')

const PATH = {
  dist: path.resolve(__dirname, '../public')
}

const config = {
  mode: 'development',
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
          'style-loader',
          {loader: 'css-loader', options: { sourceMap: true }},
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
  }
};

module.exports = merge(common, config);