function prefsDirective() {
    return {
        templateUrl: 'lib/prefs/prefs.tpl.html',
        controller() {
            console.log('prefs controller');
        },
    };
}

export { prefsDirective };
