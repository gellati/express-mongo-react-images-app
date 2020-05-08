var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/reduxstagram.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, '.'),
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // load image files
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.join(__dirname, 'public'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}