import { secondConfig } from './second.config';
import { secondDirective } from './second.directive';

const secondComponent = angular.module('structure.prefs.second', [ 'ui.router' ])
    .config(secondConfig)
    .directive('aModulePrefsSecond', secondDirective);

export { secondComponent };
