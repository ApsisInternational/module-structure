import 'test/unit/helpers/libs';

import { firstComponent } from 'lib/prefs/first/first.component';

describe('PREFS.FIRST COMPONENT', () => {
    describe('when the module is exported it', () => {
        it('should export a angular module called structure.prefs.first', () => {
            expect(firstComponent.name).toEqual('structure.prefs.first');
        });
    });
});
