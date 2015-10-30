function firstDirective() {
    return {
        templateUrl: 'lib/home/first/first.tpl.html',
        controller() {
            console.log('home.first controller');
        },
    };
}

export { firstDirective };
