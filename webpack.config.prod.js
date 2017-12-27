const webpack = require('webpack');

module.exports = {
  entry: {
    redirect: './src/redirect.js',
    trails: ['whatwg-fetch', 'babel-polyfill', './src/trails.js'],
  },
  output: {
    path: __dirname + '/assets',
    filename: '[name].bundle.js',
    library: '[name]',
  },
  devtool: 'source-map',
  target: 'web',
  bail: true,
  watch: false,
  externals: {
    openlayers: 'ol',
    ol: 'ol',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    ],
  },
};
