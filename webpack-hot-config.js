var config = require('./webpack-config.js')['basicConfig'];
var webpack = require('webpack');
var path = require('path');

//config.entry.push('webpack/hot/dev-server');
//config.entry.push('webpack-dev-server/client?http://localhost:8080');
//config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

config.entry = [
  'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './index.js' // Your appʼs entry point
];

config.devServer = {
    //hot : true,
    contentBase: './public',
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = config;