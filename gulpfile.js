var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var Server = require('karma').Server;

var basicConfig = require('./webpack-config')['basicConfig'];

gulp.task("build", function() {
    // run webpack
    webpack(basicConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    });
});

/**
 * Run test once and exit
 */
gulp.task('test', function () {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }).start();
});