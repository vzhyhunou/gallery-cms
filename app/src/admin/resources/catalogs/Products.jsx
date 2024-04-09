import React from 'react';
import {
    NumberInput,
    ReferenceInput,
    ArrayInput,
    AutocompleteInput,
    useLocale,
    useTranslate,
    SimpleFormIterator,
    required
} from 'react-admin';
import {Button} from '@mui/material';
import {useWatch, useFormContext} from 'react-hook-form';

import OptionRenderer from './OptionRenderer';

const Add = () => {

    const locale = useLocale();
    const translate = useTranslate();
    const {setValue} = useFormContext();
    const productIds = useWatch({name: 'productIds'});
    const ids = productIds ? productIds : [];
    const index = useWatch({name: 'index'});
    const add = useWatch({name: 'add'});

    const handleAdd = () => {
        const i = index ? index - 1 : ids.length;
        setValue('productIds', [...ids.slice(0, i), add, ...ids.slice(i)]);
        setValue('index', ids.length + 2);
    };

    return <>
        <NumberInput
            source="index"
            min={1}
            defaultValue={ids.length + 1}
        />
        <ReferenceInput
            reference="products"
            source="add"
        >
            <AutocompleteInput
                optionText={<OptionRenderer/>}
                inputText={i => i.name[locale]}
                matchSuggestion={(filterValue, suggestion) => true}
                filterToQuery={searchText => ({ name: searchText })}
                sx={{minWidth: '400px'}}
            />
        </ReferenceInput>
        <Button
            onClick={handleAdd}
            disabled={!add}
        >
            {translate('ra.action.add')}
        </Button>
    </>;
};

export default () => {

    const locale = useLocale();

    return <>
        <ArrayInput
            source="productIds"
            label=""
        >
            <SimpleFormIterator
                getItemLabel={index => `#${index + 1}`}
                disableAdd
                disableClear
            >
                <ReferenceInput
                    reference="products"
                >
                    <AutocompleteInput
                        optionText={<OptionRenderer/>}
                        inputText={i => i.name[locale]}
                        matchSuggestion={(filterValue, suggestion) => true}
                        filterToQuery={searchText => ({ name: searchText })}
                        validate={[required()]}
                        sx={{minWidth: '400px'}}
                    />
                </ReferenceInput>
            </SimpleFormIterator>
        </ArrayInput>
        <Add/>
    </>;
};
