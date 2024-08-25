import pages from './pages';
import users from './users';
import catalogs from './catalogs';
import products from './products';

export default {
    pages: pages.map(item => ({item})),
    users: users.map(item => ({item})),
    catalogs: catalogs.map(item => ({item})),
    products: products.map(item => ({item}))
};
