import { homeDirective } from 'lib/home/home.directive';

describe('HOME DIRECTIVE', () => {
    describe('when the directive is exported it', () => {
        it('should export a function named homeDirective', () => {
            expect(homeDirective).toBeFunction();
        });
    });

    describe('when the directive is executed it', () => {
        let ddo;

        beforeEach(() => {
            ddo = homeDirective();
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
