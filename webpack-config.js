var path = require('path');
var webpack = require('webpack');

var config = {
    resolve : {
        alias : {
            ht : path.join(__dirname, 'lib', 'highstock-2.1.8.js'),
            //jquery : path.join(__dirname, 'lib', 'jquery-git2-min.js'),
        }
    },
    module: {
        loaders: [
            { test: /[\/\\]highstock-2.1.8\.js$/, loader: "exports?Highcharts" },
            //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            //{ test: /lib\/jquery-git2-min\.js$/, exclude: /node_modules/, loader: 'script-loader' }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        "ht": "ht",
        "$" : "jquery",
        "ht1" : "highstock-browserify"
      })
    ],
    // the artifial module "jquery" exports the global var "jQuery"
    externals: { jquery: "jQuery" },

    entry : ['./source/index.js'],
    output : {
        path : path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        library : 'htv',
        libraryTarget : 'this'
    },
    watch: false
};

module.exports = {
    basicConfig : config
}