import React from 'react';
import {
    Datagrid,
    EditButton,
    List,
    NumberInput,
    TextInput,
    useLocale,
    TextField,
    ImageField,
    SelectArrayInput
} from 'react-admin';
import {
    ConstantField,
    ConstantInput,
    BulkActionButtons
} from '@vzhyhunou/vzh-cms';

import LinkField from '../../field/LinkField';
import LinkToRelated from '../../field/LinkToRelated';
import products from '../products';

const filters = [
    <NumberInput
        source="id"
        alwaysOn
    />,
    <TextInput
        source="name"
        alwaysOn
    />,
    <ConstantInput
        source="tags"
        sources="tags"
        component={SelectArrayInput}
    />
];

export default () => {

    const locale = useLocale();

    return <List
        {...{filters}}
        exporter={false}
    >
        <Datagrid bulkActionButtons={<BulkActionButtons/>} rowClick={false}>
            <LinkField
                source="id"
            />
            <TextField
                source={`name.${locale}`}
                label="resources.catalogs.fields.name"
                sortable={false}
            />
            <ConstantField
                sortable={false}
                source="tags"
                sources="tags"
                property="name"
            />
            <ImageField
                source="image.src"
                title="image.title"
                label="resources.catalogs.fields.image"
                sortable={false}
            />
            <LinkToRelated
                related="products"
                id="catalogId"
                capture="resources.catalogs.fields.productIds"
                resource={products}
            />
            <EditButton/>
        </Datagrid>
    </List>;
};
