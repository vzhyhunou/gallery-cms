import React from 'react';
import { Core, Page, PageComponent, pages, users } from '@vzhyhunou/vzh-cms';
import { Route } from 'react-router-dom';

import {
    products,
    catalogs
} from './admin/resources';
import Layout from './cms/Layout';

export default ({config}) => {

    const {resources: {users: {tags: {PAGES_EDITOR, MANAGER, CATALOGS_EDITOR}}}} = config;
    const resources = {
        [PAGES_EDITOR]: {pages},
        [MANAGER]: {users},
        [CATALOGS_EDITOR]: {products, catalogs}
    };

    return <Core {...{config, resources}}>
        <Route element={<Layout/>}>
            <Route path="" element={<PageComponent id="home" external/>}/>
            <Route path=":id" element={<Page/>}/>
            <Route path="*" element={<PageComponent id="none" external/>}/>
        </Route>
    </Core>;
};
