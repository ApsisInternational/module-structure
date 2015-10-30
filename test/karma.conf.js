module.exports = function karmaConfig(config) {
    config.set({

        // The base path is one level up since this file is in ./test/
        // If your karma.conf.js is in your project root, your basePath should
        // be './'
        basePath: '../',

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
                'test/unit/**/*.js',
            ],
            serveFiles: [
                'lib/**/*.js',
                'lib/**/*.html',
            ],
        },

        preprocessors: {
            'lib/**/*.js': ['babel'],
            'test/unit/**/*.js': ['babel'],
            'jspm_packages/apsis/**/*.js': ['babel'],
        },

        babelPreprocessor: {
            options: {
                modules: 'system',
            },
        },

        proxies: {
            '/test/': '/base/test/',
            '/lib/': '/base/lib/',
            '/jspm_packages/': '/base/jspm_packages/',
        },

        browsers: ['PhantomJS'],

        reporters: ['verbose', 'osx'],

        colors: true,

        exclude: [],

        logLevel: config.LOG_ERROR,

    });
};
