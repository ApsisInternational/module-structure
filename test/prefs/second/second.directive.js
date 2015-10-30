import { secondDirective } from 'src/prefs/second/second.directive';

describe('PREFS.SECOND DIRECTIVE', () => {
    describe('when the directive is exported it', () => {
        it('should export a function named secondDirective', () => {
            expect(secondDirective).toBeFunction();
        });
    });

    describe('when the directive is executed it', () => {
        let ddo;

        beforeEach(() => {
            ddo = secondDirective();
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
