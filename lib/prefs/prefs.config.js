prefsConfig.$inject = ['$stateProvider'];
function prefsConfig($stateProvider) {
    // Setup the routing for the prefs component
    $stateProvider
        .state('module.prefs', {
            url: '/prefs',
            template: '<a-module-prefs></a-module-prefs>',
            abstract: true,
        })
            .state('module.prefs.first', {
                url: '',
                template: '<a-module-prefs-first></a-module-prefs-first>',
            })
            .state('module.prefs.second', {
                url: '/second',
                template: '<a-module-prefs-second></a-module-prefs-second>',
            });
}

export { prefsConfig };
