const getListResponse = ({getAll, getPage, isLocalesIncludes, isTagsActive}, resource, params) =>

    getAll(resource, params).then(({data}) => {

        const {filter} = params;

        switch (resource) {
            case 'products':
                if (filter.id) {
                    data = data.filter(({id}) => id === Number(filter.id));
                }
                if (filter.catalogId) {
                    data = data.filter(({catalogIds}) => catalogIds.includes(filter.catalogId));
                }
                if (filter.name) {
                    data = data.filter(({name}) => isLocalesIncludes(name, filter.name));
                }
                return getPage(data, params);
            case 'catalogs':
                if (filter.id) {
                    data = data.filter(({id}) => id === Number(filter.id));
                }
                if (filter.name) {
                    data = data.filter(({name}) => isLocalesIncludes(name, filter.name));
                }
                if (filter.tags) {
                    data = data.filter(i => isTagsActive(i, filter.tags));
                }
                return getPage(data, params);
            default:
                return false;
        }
    });

const exchangeResponse = (
    {getOne, getAll, getPath, isTagsActive},
    {
        tags: {users, catalogs},
        localeProvider: {getLocale},
        authProvider: {getPermissions}
    },
    params
) =>

    Promise.all([getLocale(), getPermissions()]).then(([locale, permissions]) => {

        const products = productIds => getAll('products')
            .then(({data: products}) => {

            const product = ({id, name, desc, price, image, files, parents}) => ({
                id,
                name: name[locale],
                desc: desc[locale],
                price,
                image,
                files,
                parents
            });

            return products.filter(({id}) => productIds.includes(id))
                .map(p => product(p));
        });

        // eslint-disable-next-line no-unused-vars
        const [resource, s, path, id] = getPath(params);

        switch (resource) {
            case 'catalogs':
                switch (path) {
                    case 'one':
                        return getOne(resource, {id}).then(({data}) => {
                            if (!(isTagsActive(data, [catalogs.PUBLISHED]) || (permissions && permissions.includes(users.CATALOGS_EDITOR))
                                || (isTagsActive(data, [catalogs.PUBLISHED_VIP]) && (permissions && permissions.includes(users.VIP))))) {
                                return false;
                            }
                            const {name, desc, productIds} = data;
                            return products(productIds).then(products => ({
                                data: {
                                    name: name[locale],
                                    desc: desc[locale],
                                    products
                                }
                            }));
                        }, () => false);
                    case 'menu':
                        return getAll(resource).then(({data}) => ({
                            data: data.filter(p => isTagsActive(p, [catalogs.MENU]))
                                .map(({id, name, desc, image}) => ({
                                    id,
                                    name: name[locale],
                                    desc: desc[locale],
                                    image
                                }))
                        }));
                    default:
                        return false;
                }
            default:
                return false;
        }
    });

export default props => {

    const {dataProvider: {getList, exchange, log, ...provider}} = props;

    return {
        ...provider,
        getList: (resource, params) => getListResponse(provider, resource, params)
            .then(response => response && log('getList', resource, params, response))
            .then(response => response || getList(resource, params)),
        exchange: params => exchangeResponse(provider, props, params)
            .then(response => response && log('exchange', undefined, params, response))
            .then(response => response || exchange(params))
    };
};
