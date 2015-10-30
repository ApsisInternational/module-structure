prefsConfig.$inject = ['$stateProvider'];
function prefsConfig($stateProvider) {
    // Setup routing for the prefs component
    $stateProvider
        .state('module.prefs', {
          url: '/prefs',
          templateUrl: 'lib/prefs/prefs.tpl.html',
          abstract: true,
    })
        .state('module.prefs.first', {
            url: '',
            templateUrl: 'lib/prefs/first.tpl.html',
        })
        .state('module.prefs.second', {
            url: '/second',
            templateUrl: 'lib/prefs/second.tpl.html',
        });
}

export { prefsConfig };
