function secondDirective() {
    return {
        templateUrl: 'lib/home/second/second.tpl.html',
        controller() {
            console.log('home.second controller');
        },
    };
}

export { secondDirective };
