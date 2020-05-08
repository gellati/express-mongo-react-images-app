const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('./webpack.config.dev');

const app = express();
const compiler = webpack(webpackconfig);
const port = process.env.CLIENT_PORT || 3002
const host = process.env.CLIENT_HOST || 'localhost'
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackconfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const webpackHotMiddleware = require("webpack-hot-middleware");

app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://' + host + ':' + port);
});