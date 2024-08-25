const getListResponse = async (
    {getOne, getList, getPage, isLocalesIncludes, isTagsActive},
    resource,
    {filter, ...params} = {}
) => {

    if (!filter) {
        return false;
    }

    const {pagination, ...rest} = params;

    switch (resource) {
        case 'products':
            return getList(resource, rest).then(async ({data}) => {
                if (filter.id) {
                    data = data.filter(({id}) => id === Number(filter.id));
                }
                if (filter.catalogId) {
                    const productIds = await getOne('catalogs', {id: filter.catalogId}).then(({data: {productIds}}) => productIds || []);
                    data = data.filter(({id}) => productIds.includes(id));
                }
                if (filter.name) {
                    data = data.filter(({name}) => isLocalesIncludes(name, filter.name));
                }
                return getPage(data, params);
            });
        case 'catalogs':
            return getList(resource, rest).then(({data}) => {
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
            });
        default:
            return false;
    }
};

const exchangeResponse = (
    {
        dataProvider: {getOne, getList, getMany, getPath, isTagsActive},
        tags: {users, catalogs},
        localeProvider: {getLocale},
        authProvider: {getPermissions}
    },
    params
) =>

    Promise.all([getLocale(), getPermissions()]).then(([locale, permissions]) => {

        // eslint-disable-next-line no-unused-vars
        const [resource, s, path, id] = getPath(params);

        switch (resource) {
            case 'catalogs':
                switch (path) {
                    case 'one':
                        return getOne(resource, {id}).then(async ({data: {name, desc, productIds, ...rest}}) => {
                            if (!(isTagsActive(rest, [catalogs.PUBLISHED]) || (permissions && permissions.includes(users.CATALOGS_EDITOR))
                                || (isTagsActive(rest, [catalogs.PUBLISHED_VIP]) && (permissions && permissions.includes(users.VIP))))) {
                                return false;
                            }
                            return ({
                                data: {
                                    name: name[locale],
                                    desc: desc[locale],
                                    products: await getMany('products', {ids: productIds})
                                        .then(({data}) => data.map(({name, desc, ...rest}) => ({
                                            name: name[locale],
                                            desc: desc[locale],
                                            ...rest
                                        })))
                                }
                            });
                        }, () => false);
                    case 'menu':
                        return getList(resource).then(({data}) => ({
                            data: data.filter(p => isTagsActive(p, [catalogs.MENU]))
                                .map(({name, desc, ...rest}) => ({
                                    name: name[locale],
                                    desc: desc[locale],
                                    ...rest
                                }))
                        }), () => false);
                    default:
                        return false;
                }
            default:
                return false;
        }
    });

export default props => {

    const {dataProvider: {exchange, log, ...dataProvider}} = props;

    return {
        ...dataProvider,
        getList: (resource, params) => getListResponse(dataProvider, resource, params)
            .then(response => response || dataProvider.getList(resource, params)),
        exchange: params => exchangeResponse(props, params)
            .then(response => response && log('exchange', undefined, params, response))
            .then(response => response || exchange(params))
    };
};
