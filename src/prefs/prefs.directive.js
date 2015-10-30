function prefsDirective() {
    return {
        templateUrl: 'src/prefs/prefs.tpl.html',
        controller() {
            console.log('prefs controller');
        },
    };
}

export { prefsDirective };
