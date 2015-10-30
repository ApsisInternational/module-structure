function moduleDirective() {
    return {
        templateUrl: 'lib/module/module.tpl.html',
        controller() {
            console.log('module controller');
        },
    };
}

export { moduleDirective };
