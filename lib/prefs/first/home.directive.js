function homeDirective() {
    return {
        templateUrl: 'lib/home/home.tpl.html',
        controller() {
            console.log('home controller');
        },
    };
}

export { homeDirective };
