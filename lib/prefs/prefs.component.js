import { site } from 'site';

import { prefsConfig } from './prefs.config';
import { prefsDirective } from './prefs.directive';
import { firstDirective } from './first/first.directive';
import { secondDirective } from './second/second.directive';

const prefsComponent = angular.module('structure.prefs', [ 'ui.router', site.name ])
    .config(prefsConfig)
    .directive('aModulePrefs', prefsDirective)
    .directive('aModulePrefsFirst', firstDirective)
    .directive('aModulePrefsSecond', secondDirective);

export { prefsComponent };
