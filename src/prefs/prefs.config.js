prefsConfig.$inject = ['$stateProvider'];
function prefsConfig($stateProvider) {
    /**
     * Setup the routing for the prefs component.
     *
     * This setup is a little more complex than the home component, with each
     * subcomponent being totally separated from its parent.
     */
    $stateProvider
        .state('module.prefs', {
            url: '/prefs',
            template: '<a-module-prefs></a-module-prefs>',
            abstract: true,
        });
}

export { prefsConfig };
