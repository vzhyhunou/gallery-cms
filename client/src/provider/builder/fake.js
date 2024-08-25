import b from '@vzhyhunou/vzh-cms/provider/builder/fake';

import getDataProvider from './data/fake';

export default {
    ...b,
    getDataProvider: props => getDataProvider({...props, dataProvider: b.getDataProvider(props)})
};