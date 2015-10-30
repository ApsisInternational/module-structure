function moduleDirective() {
    return {
        templateUrl: 'src/module/module.tpl.html',
        controller() {
            console.log('module controller');
        },
    };
}

export { moduleDirective };
