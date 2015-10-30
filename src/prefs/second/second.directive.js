function secondDirective() {
    return {
        templateUrl: 'src/prefs/second/second.tpl.html',
        controller() {
            console.log('prefs.second controller');
        },
    };
}

export { secondDirective };
