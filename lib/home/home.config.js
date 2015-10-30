homeConfig.$inject = ['$stateProvider'];
function homeConfig($stateProvider) {
    // Setup the routing for the home component
    $stateProvider
        .state('module.home', {
            url: '/home',
            template: '<a-module-home></a-module-home>',
            abstract: true,
        })
            .state('module.home.first', {
                url: '',
                template: '<a-module-home-first></a-module-home-first>',
            })
            .state('module.home.second', {
                url: '/second',
                template: '<a-module-home-second></a-module-home-second>',
            });
}

export { homeConfig };
