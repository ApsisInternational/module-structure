import { firstDirective } from 'lib/prefs/first/first.directive';

describe('PREFS.FIRST DIRECTIVE', () => {
    describe('when the directive is exported it', () => {
        it('should export a function named firstDirective', () => {
            expect(firstDirective).toBeFunction();
        });
    });

    describe('when the directive is executed it', () => {
        let ddo;

        beforeEach(() => {
            ddo = firstDirective();
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
