homeConfig.$inject = ['$stateProvider'];
function homeConfig($stateProvider) {
    /**
     * Setup the routing for the home component
     *
     * In this example we'll set up all the child states as well. In a more complex
     * setup it might be better practice to make the child states separate modules
     * that handle their own configuration etc.
     *
     * See the "prefs" component for an example of that.
     */
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
