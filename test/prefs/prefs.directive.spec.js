import { prefsDirective } from 'src/prefs/prefs.directive';

describe('PREFS DIRECTIVE', () => {
    describe('when the directive is exported it', () => {
        it('should export a function named prefsDirective', () => {
            expect(prefsDirective).toBeFunction();
        });
    });

    describe('when the directive is executed it', () => {
        let ddo;

        beforeEach(() => {
            ddo = prefsDirective();
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
