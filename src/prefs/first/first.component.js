import { firstConfig } from './first.config';
import { firstDirective } from './first.directive';

const firstComponent = angular.module('structure.prefs.first', [ 'ui.router' ])
    .config(firstConfig)
    .directive('aModulePrefsFirst', firstDirective);

export { firstComponent };
