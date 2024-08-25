import {PageComponent} from '@vzhyhunou/vzh-cms';
import {HashLink} from 'react-router-hash-link';

import Catalog from './cms/resources/catalogs/App';
import Menu from './cms/resources/menu/App';

export default (({REACT_APP_SRC, REACT_APP_BASE}) => ({
    locales: {
        en: 'English',
        ru: 'Русский'
    },
    tags: {
        pages: {
            MENU: 'MENU',
            PUBLISHED: 'PUBLISHED'
        },
        users: {
            ADMIN: 'ADMIN',
            MANAGER: 'MANAGER',
            PAGES_EDITOR: 'PAGES_EDITOR',
            CATALOGS_EDITOR: 'CATALOGS_EDITOR',
            VIP: 'VIP'
        },
        catalogs: {
            PUBLISHED: 'PUBLISHED',
            PUBLISHED_VIP: 'PUBLISHED_VIP',
            MENU: 'MENU'
        }
    },
    components: {
        Page: PageComponent,
        Catalog,
        Menu,
        HashLink
    },
    provider: import(`./provider/${REACT_APP_SRC}.js`),
    basename: REACT_APP_BASE
}))(process.env);
