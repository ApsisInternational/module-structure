function firstDirective() {
    return {
        templateUrl: 'lib/prefs/first/first.tpl.html',
        controller() {
            console.log('prefs.first controller');
        },
    };
}

export { firstDirective };
