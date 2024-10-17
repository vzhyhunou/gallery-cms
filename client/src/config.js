import { PageComponent } from '@vzhyhunou/vzh-cms';
import { HashLink } from 'react-router-hash-link';

import Catalog from './cms/resources/catalogs/App';
import Menu from './cms/resources/menu/App';

export default {
    locales: {
        en: 'English',
        ru: 'Русский'
    },
    resources: {
        pages: {
            tags: {
                MENU: 'MENU',
                PUBLISHED: 'PUBLISHED'
            }
        },
        users: {
            tags: {
                ADMIN: 'ADMIN',
                MANAGER: 'MANAGER',
                PAGES_EDITOR: 'PAGES_EDITOR',
                CATALOGS_EDITOR: 'CATALOGS_EDITOR',
                VIP: 'VIP'
            }
        },
        catalogs: {
            tags: {
                PUBLISHED: 'PUBLISHED',
                PUBLISHED_VIP: 'PUBLISHED_VIP',
                MENU: 'MENU'
            }
        }
    },
    components: {
        Page: PageComponent,
        Catalog,
        Menu,
        HashLink
    },
    provider: import(`./provider/${process.env.REACT_APP_SRC}.js`),
    basename: process.env.REACT_APP_BASE
};