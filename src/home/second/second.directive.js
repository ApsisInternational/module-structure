function secondDirective() {
    return {
        templateUrl: 'src/home/second/second.tpl.html',
        controller() {
            console.log('home.second controller');
        },
    };
}

export { secondDirective };
