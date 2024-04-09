import b from '@vzhyhunou/vzh-cms/provider/builder/fake';

import getDataProvider from './data/fake';

export default {
    ...b,
    getDataProvider: props => getDataProvider({dataProvider: b.getDataProvider(props), ...props})
};