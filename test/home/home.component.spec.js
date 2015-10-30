import 'test/_helpers/libs';

import { homeComponent } from 'src/home/home.component';

describe('HOME COMPONENT', () => {
    describe('when the module is exported it', () => {
        it('should export a angular module called structure.home', () => {
            expect(homeComponent.name).toEqual('structure.home');
        });
    });
});
