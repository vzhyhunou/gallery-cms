import messages from '@vzhyhunou/vzh-cms/provider/messages/ru';

export default {
    ...messages,
    resources: {
        ...messages.resources,
        validation: {
            ...messages.resources.validation,
            value: 'Неверное значение'
        },
        users: {
            ...messages.resources.users,
            tags: {
                ...messages.resources.users.tags,
                'CATALOGS_EDITOR': 'Редактор коллекций',
                'VIP': 'VIP'
            }
        },
        products: {
            name: 'Продукты',
            fields: {
                date: 'Обновление',
                user: 'Пользователь',
                name: 'Имя',
                desc: 'Описание',
                image: 'Изображение',
                price: 'Цена',
                catalogId: 'Каталог'
            }
        },
        catalogs: {
            name: 'Каталоги',
            tags: {
                'PUBLISHED': 'Опубликовано',
                'PUBLISHED_VIP': 'Опубликовано VIP',
                'MENU': 'Меню'
            },
            fields: {
                date: 'Обновление',
                user: 'Пользователь',
                tags: 'Теги',
                name: 'Имя',
                desc: 'Описание',
                image: 'Изображение',
                productIds: 'Продукты',
                index: 'Индекс',
                add: 'Добавить'
            }
        }
    },
    corporate: {
        keywords: 'пекарня, хлеб, сладости',
        description: 'Делаем домашний хлеб и сладости',
        menu: {
            catalogs: 'Продукция',
            contact: 'Контакты',
            admin: 'Изменить',
            login: 'Вход',
            logout: 'Выход'
        },
        options: {
            title: 'Наша Продукция',
            more: 'еще',
            imagesFrom: 'Изображения с'
        },
        catalog: {
            title: '%{name} Пекарня',
            imagesFrom: 'Изображения с'
        },
        footer: {
            title: 'Заголовок',
            description: 'Образец текста'
        }
    }
}
