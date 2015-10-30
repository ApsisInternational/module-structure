secondConfig.$inject = ['$stateProvider'];
function secondConfig($stateProvider) {
    // Setup the routing for the prefs component
    $stateProvider
        .state('module.prefs.second', {
            url: '',
            template: '<a-module-prefs-second></a-module-prefs-second>',
        });
}

export { secondConfig };
