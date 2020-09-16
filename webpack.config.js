const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: "0.0.0.0",
    port: process.env.WEB_PORT || 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test",
      templateContent: `<html><body><div id="root"></div></body></html>`
    })
  ]
};
