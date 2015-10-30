import { site } from 'site';

import { prefsConfig } from './prefs.config';

const prefsComponent = angular.module('structure.prefs', [ 'ui.router', site.name ])
    .config(prefsConfig);

export { prefsComponent };
