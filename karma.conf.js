var webpackConfig = require('./webpack-config')['basicConfig'];

module.exports = function(config) {
    config.set({

        browsers: ['PhantomJS'],

        files: [
            { pattern: 'test-context.js'}
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'test-context.js': ['webpack','coverage']
        },
        reporters : ['progress', 'coverage'],
        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'coverage/',
          instrumenterOptions: {
              istanbul: { noCompact: true }
          },
        },
        webpack : webpackConfig,
        singleRun : true,
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: false
        },
    });
};