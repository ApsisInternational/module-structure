moduleConfig.$inject = ['aSidebarNavigationFactoryProvider', '$stateProvider', '$urlRouterProvider'];
function moduleConfig(aSidebarNavigationFactoryProvider, $stateProvider, $urlRouterProvider) {
    // Add menu items to the sidebar menu
    aSidebarNavigationFactoryProvider
        .addMenuItem({ title: 'Home', state: 'module.home.first' })
        .addMenuItem({ title: 'Preferences', state: 'module.prefs.first' });

    // Setup a fallback route, if the user ends up somewhere she shouldn't be
    $urlRouterProvider.otherwise('/home');

    // Setup the top state
    $stateProvider
        .state('module', {
            url: '',
            templateUrl: 'lib/module/module.tpl.html',
            controller: () => {
                console.log('module ctrl');
            },
            abstract: true,
        });
}

export { moduleConfig };
