function homeDirective() {
    return {
        templateUrl: 'src/home/home.tpl.html',
        controller() {
            console.log('home controller');
        },
    };
}

export { homeDirective };
