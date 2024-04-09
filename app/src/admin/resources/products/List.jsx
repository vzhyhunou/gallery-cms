import React from 'react';
import {
    Datagrid,
    EditButton,
    ReferenceInput,
    AutocompleteInput,
    List,
    NumberInput,
    TextField,
    TextInput,
    useLocale,
    ChipField,
    ReferenceArrayField,
    SingleFieldList,
    ImageField
} from 'react-admin';

const CatalogInput = ({source}) => {

    const locale = useLocale();

    return <ReferenceInput
        {...{source}}
        reference="catalogs"
    >
        <AutocompleteInput
            optionText={`name.${locale}`}
            filterToQuery={searchText => ({ name: searchText })}
            sx={{minWidth: '240px'}}
        />
    </ReferenceInput>;
};

const filters = [
    <NumberInput
        source="id"
        alwaysOn
    />,
    <CatalogInput
        source="catalogId"
        alwaysOn
    />,
    <TextInput
        source="name"
        alwaysOn
    />
];

export default () => {

    const locale = useLocale();

    return <List
        {...{filters}}
        exporter={false}
    >
        <Datagrid>
            <TextField
                source="id"
            />
            <ReferenceArrayField
                reference="catalogs"
                source="catalogIds"
                label="resources.catalogs.name"
                sortable={false}
            >
                <SingleFieldList>
                    <ChipField
                        source={`name.${locale}`}
                    />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField
                source={`name.${locale}`}
                label="resources.products.fields.name"
                sortable={false}
            />
            <ImageField
                source="image.src"
                title="image.title"
                label="resources.products.fields.image"
                sortable={false}
            />
            <EditButton/>
        </Datagrid>
    </List>;
};
