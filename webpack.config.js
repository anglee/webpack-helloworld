// http://webpack.github.io/docs/configuration.html

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  },
  //resolve: {
  //
  //}
  externals: {
    lodash: '_' // lodash should not be included in the bundle
  },
  profile: true,
  debug: true,
  devtool: '#source-map'

};