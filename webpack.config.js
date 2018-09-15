const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const HASH = 'hash';

module.exports = {
  mode: 'none',
  output: {
    filename: `[name].[${HASH}].js`,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('.'),
    }),
    new HtmlWebpackPlugin({
      template: `!prerender-loader?string!${path.resolve('./index.html')}`,
      minify: false
    }),
    //! Uncomment next line to see Critters error in dist/index.html
    // new Critters(),
    new MiniCssExtractPlugin({
      filename: `[name].[${HASH}].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  }
};
