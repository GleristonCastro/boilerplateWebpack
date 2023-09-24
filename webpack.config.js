const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssWebpackPlugin = require('mini-css-extract-plugin');

const PATH = {
  dist: path.resolve(__dirname, 'public')
}

module.exports = {
  // entry: './src/app.js',
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: PATH.dist
  },
  mode: 'production',
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
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'src/index.html'
    }),
    new miniCssWebpackPlugin({
      filename: 'assets/css/style.css'
    })
  ]
};