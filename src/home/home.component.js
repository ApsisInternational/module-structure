import { site } from 'site';

import { homeConfig } from './home.config';
import { homeDirective } from './home.directive';
import { firstDirective } from './first/first.directive';
import { secondDirective } from './second/second.directive';

const homeComponent = angular.module('structure.home', [ 'ui.router', site.name ])
    .config(homeConfig)
    .directive('aModuleHome', homeDirective)
    .directive('aModuleHomeFirst', firstDirective)
    .directive('aModuleHomeSecond', secondDirective);

export { homeComponent };
