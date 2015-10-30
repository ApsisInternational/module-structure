homeConfig.$inject = ['$stateProvider'];
function homeConfig($stateProvider) {
    // Setup the routing for the home component
    $stateProvider
        .state('module.home', {
          url: '/home',
          templateUrl: 'lib/home/home.tpl.html',
          abstract: true,
    })
        .state('module.home.first', {
            url: '',
            templateUrl: 'lib/home/first.tpl.html',
        })
        .state('module.home.second', {
            url: '/second',
            templateUrl: 'lib/home/second.tpl.html',
        });
}

export { homeConfig };
