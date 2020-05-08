const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss', './src/css/style.css'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },

    module: {
      rules: [
        {
          test: /\.(m?js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/transform-runtime'],
              ],
            },
          },
        }, {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ],
        }, {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        }, {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },

    plugins: [
      new CopyPlugin([
        { from: 'src/img/', to: 'img/', toType: 'dir' },
        { from: 'src/img/ico/', to: './', toType: 'dir' },
      ]),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        protectWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: ['**/*'],
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
  };

  return config;
};
