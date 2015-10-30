firstConfig.$inject = ['$stateProvider'];
function firstConfig($stateProvider) {
    // Setup the routing for the prefs component
    $stateProvider
        .state('module.prefs.first', {
            url: '',
            template: '<a-module-prefs-first></a-module-prefs-first>',
        });
}

export { firstConfig };
