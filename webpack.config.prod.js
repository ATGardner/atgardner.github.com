module.exports = {
  entry: {
    trails: './src/trails.js'
  },
  output: {
    path: './assets',
    filename: '[name].bundle.js',
    library: '[name]'
  },
  devtool: 'source-map',
  target: 'web',
  bail: true,
  watch: false,
  externals: {
    openlayers: 'ol'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['latest']
        }
      }
    ]
  }
};
