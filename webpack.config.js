const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader', // Resolves @import and url()
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the "dist" directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server on
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement (HMR)
  },
  mode: 'development',
};
