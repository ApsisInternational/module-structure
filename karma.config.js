module.exports = function karmaConfig(config) {
    config.set({

        basePath: './',

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
                'test/**/*.js',
            ],
            serveFiles: [
                'src/**/*.js',
                'src/**/*.html',
            ],
        },

        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/**/*.js': ['babel'],
            'jspm_packages/apsis/**/*.js': ['babel'],
        },

        babelPreprocessor: {
            options: {
                modules: 'system',
            },
        },

        proxies: {
            '/test/': '/base/test/',
            '/src/': '/base/src/',
            '/jspm_packages/': '/base/jspm_packages/',
        },

        browsers: ['PhantomJS'],

        reporters: ['verbose', 'osx'],

        colors: true,

        exclude: [],

        logLevel: config.LOG_ERROR,

    });
};
