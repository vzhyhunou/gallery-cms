import React from 'react';
import App, {Page, pages, users} from '@vzhyhunou/vzh-cms';
import {Route, Navigate} from 'react-router-dom';
import {CustomRoutes, Resource} from 'react-admin';

import {
    products,
    catalogs
} from './admin/resources';
import Layout from './cms/Layout';
import config from './config';

export default () => {

    const {tags: {users: {PAGES_EDITOR, MANAGER, CATALOGS_EDITOR}}} = config;

    return <App {...{config}}>
        <CustomRoutes noLayout>
            <Route path="/" element={<Navigate to="cms/pages/home"/>}/>
            <Route path="cms" element={<Layout/>}>
                <Route path="pages/:id" element={<Page/>}/>
            </Route>
        </CustomRoutes>
        {permissions =>
            <>
                {permissions && permissions.includes(PAGES_EDITOR) ?
                    <Resource name="pages" {...pages}/>
                : null}
                {permissions && permissions.includes(MANAGER) ?
                    <Resource name="users" {...users}/>
                : null}
                {permissions && permissions.includes(CATALOGS_EDITOR) ?
                    <>
                        <Resource name="products" {...products}/>
                        <Resource name="catalogs" {...catalogs}/>
                    </>
                : null}
            </>
        }
    </App>;
};