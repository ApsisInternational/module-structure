function firstDirective() {
    return {
        templateUrl: 'src/home/first/first.tpl.html',
        controller() {
            console.log('home.first controller');
        },
    };
}

export { firstDirective };
