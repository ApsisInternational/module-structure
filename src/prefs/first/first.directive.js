function firstDirective() {
    return {
        templateUrl: 'src/prefs/first/first.tpl.html',
        controller() {
            console.log('prefs.first controller');
        },
    };
}

export { firstDirective };
