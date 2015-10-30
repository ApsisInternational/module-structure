import { site } from 'site';

import { prefsConfig } from './prefs.config';
import { prefsDirective } from './prefs.directive';

import { firstComponent } from './first/first.component';
import { secondComponent } from './second/second.component';

const prefsComponent = angular.module('structure.prefs', [ 'ui.router', site.name, firstComponent.name, secondComponent.name ])
    .config(prefsConfig)
    .directive('aModulePrefs', prefsDirective);

export { prefsComponent };
