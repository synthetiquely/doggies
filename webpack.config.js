const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: ['https://dog.ceo'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HtmlWepbackPlugin({
      inject: true,
      favicon: './src/favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new WebpackPwaManifest({
      name: 'Doggies',
      short_name: 'Doggies',
      description: 'My awesome Doggies App!',
      background_color: '#009688',
      icons: [
        {
          src: path.resolve('src/favicon.ico'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
};
