var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [path.join(__dirname, 'web/static/js', 'vendors.js')]
  },
  output: {
    path: path.join(__dirname, '/priv/static/js'),
    filename: 'dll.[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]',
      context: path.join(__dirname, 'web/static/js')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    root: path.join(__dirname, 'web/static/js'),
    moduleDirectories: ['node_modules']
  }
};
