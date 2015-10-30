import 'test/_helpers/libs';

import { secondComponent } from 'src/prefs/second/second.component';

describe('PREFS.SECOND COMPONENT', () => {
    describe('when the module is exported it', () => {
        it('should export a angular module called structure.prefs.second', () => {
            expect(secondComponent.name).toEqual('structure.prefs.second');
        });
    });
});
