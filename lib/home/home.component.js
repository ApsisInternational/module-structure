import { site } from 'site';

import { homeConfig } from './home.config';

const homeComponent = angular.module('structure.home', [ 'ui.router', site.name ])
    .config(homeConfig);

export { homeComponent };
