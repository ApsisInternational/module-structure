import { site } from 'site';

import { moduleConfig } from './module.config';

import { homeComponent } from '../home/home.component';
import { prefsComponent } from '../prefs/prefs.component';

angular.module('structure', [ 'ng', 'ui.router', site.name, homeComponent.name, prefsComponent.name ])
    .config(moduleConfig);

angular.element(document).ready(() => angular.bootstrap(document, ['structure']));
