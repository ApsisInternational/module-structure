import 'test/unit/helpers/libs';

import { prefsComponent } from 'lib/prefs/prefs.component';

describe('PREFS COMPONENT', () => {
    describe('when the module is exported it', () => {
        it('should export a angular module called structure.prefs', () => {
            expect(prefsComponent.name).toEqual('structure.prefs');
        });
    });
});
