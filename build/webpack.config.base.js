const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: path.resolve(__dirname, '../app/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_module/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  vue: {
    postcss: [
      require('postcss-import'),
      require('postcss-cssnext')
    ]
  }
}
