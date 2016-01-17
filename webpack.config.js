var path = require('path');
var config = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      },
      { test: /\.css$/, loader: 'style!css' },

      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' },
    ]
  },
  resolve: {
    alias: {
      'store': path.join(__dirname, 'src/store')
    },
    modulesDirectories: ['node_modules', 'components']
  }
};

module.exports = config;
