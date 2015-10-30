import gulp from 'gulp';
import { apsisGulpConfig } from 'gulp-config-apsis';

const config = {
    paths: {
        test: {
            unit: 'test/',
            e2e: 'test/',
        },
        config: {
            karma: 'karma.config.js',
        },
    },
};

apsisGulpConfig(gulp, config);
