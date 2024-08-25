import messages from '@vzhyhunou/vzh-cms/provider/messages/en';

export default {
    ...messages,
    resources: {
        ...messages.resources,
        validation: {
            ...messages.resources.validation,
            value: 'Wrong value'
        },
        users: {
            ...messages.resources.users,
            tags: {
                ...messages.resources.users.tags,
                'CATALOGS_EDITOR': 'Catalogs editor',
                'VIP': 'VIP'
            }
        },
        products: {
            name: 'Products',
            fields: {
                date: 'Update',
                user: 'User',
                name: 'Name',
                desc: 'Description',
                image: 'Image',
                price: 'Price',
                catalogId: 'Catalog'
            }
        },
        catalogs: {
            name: 'Catalogs',
            tags: {
                'PUBLISHED': 'Published',
                'PUBLISHED_VIP': 'Published VIP',
                'MENU': 'Menu'
            },
            fields: {
                date: 'Update',
                user: 'User',
                tags: 'Tags',
                name: 'Name',
                desc: 'Description',
                image: 'Image',
                productIds: 'Products',
                index: 'Index',
                add: 'Add'
            }
        }
    },
    corporate: {
        keywords: 'bakery, breads, sweets',
        description: 'We make homemade breads and sweets',
        menu: {
            catalogs: 'Products',
            contact: 'Contacts',
            admin: 'Edit',
            login: 'Sign in',
            logout: 'Sign out'
        },
        options: {
            title: 'Our Products',
            more: 'more',
            imagesFrom: 'Images from'
        },
        catalog: {
            title: '%{name} Bakery',
            imagesFrom: 'Images from'
        },
        footer: {
            title: 'Headline',
            description: 'Sample footer text'
        }
    }
}
