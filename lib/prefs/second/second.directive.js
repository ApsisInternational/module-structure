function secondDirective() {
    return {
        templateUrl: 'lib/prefs/second/second.tpl.html',
        controller() {
            console.log('prefs.second controller');
        },
    };
}

export { secondDirective };
