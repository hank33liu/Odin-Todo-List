const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development', //remove for production
  entry: {
    main: './src/index.js',
    projectScripts: './src/projectScripts.js',
  },
  devtool: 'inline-source-map', // remove for production
  // devServer: {
  //     static: './dist',
  // }, //remove for production
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Franz Liust\'s Lists',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],

  },
  optimization: {
    runtimeChunk: 'single',
  },
};
