let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index' // Had an issue with webpack finding this file, was ./index before changing it
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      include: __dirname
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.gif$/,
      loader: 'url?limit=10000&minetype=image/gif'
    }],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
};
