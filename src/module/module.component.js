import { site } from 'site';

import { moduleConfig } from './module.config';

import { moduleDirective } from './module.directive';

import { homeComponent } from '../home/home.component';
import { prefsComponent } from '../prefs/prefs.component';

const structureModule = angular.module('structure', [ 'ng', 'ui.router', site.name, homeComponent.name, prefsComponent.name ])
    .config(moduleConfig)
    .directive('aModule', moduleDirective);

// Bootstrap the application
angular.element(document).ready(() => angular.bootstrap(document, ['structure']));

export { structureModule };
