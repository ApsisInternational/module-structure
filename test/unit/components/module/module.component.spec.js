import 'test/unit/helpers/libs';

import { structureModule } from 'lib/module/module.component';

describe('MODULE COMPONENT', () => {
    describe('when the module is exported it', () => {
        it('should export a angular module called structure', () => {
            expect(structureModule.name).toEqual('structure');
        });
    });
});
