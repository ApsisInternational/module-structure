import { moduleDirective } from 'src/module/module.directive';

describe('MODULE DIRECTIVE', () => {
    describe('when the directive is exported it', () => {
        it('should export a function named moduleDirective', () => {
            expect(moduleDirective).toBeFunction();
        });
    });

    describe('when the directive is executed it', () => {
        let ddo;

        beforeEach(() => {
            ddo = moduleDirective();
        });

        it('should return a ddo', () => {
            expect(ddo).toBeObject();
        });

        it('should define a templateUrl', () => {
            expect(ddo.templateUrl).toBeString();
        });

        it('should define a controller', () => {
            expect(ddo.controller).toBeFunction();
        });
    });
});
