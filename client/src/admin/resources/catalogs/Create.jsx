import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    ImageField,
    ImageInput,
    TranslatableInputs,
    useLocales,
    required
} from 'react-admin';
import {TagsInput} from '@vzhyhunou/vzh-cms';

import Products from './Products';

export default () => {

    const locales = useLocales();

    return <Create>
        <TabbedForm>
            <FormTab label="resources.general">
                <ImageInput
                    source="image"
                    accept={{'image/jpeg': []}}
                >
                    <ImageField
                        source="src"
                        title="title"
                    />
                </ImageInput>
                <TranslatableInputs locales={locales.map(l => l.locale)}>
                    <TextInput
                        source="name"
                        sx={{minWidth: 500}}
                        validate={[required()]}
                    />
                    <TextInput
                        multiline
                        source="desc"
                    />
                </TranslatableInputs>
            </FormTab>
            <FormTab label="resources.catalogs.fields.tags">
                <TagsInput/>
            </FormTab>
            <FormTab label="resources.catalogs.fields.productIds">
                <Products/>
            </FormTab>
        </TabbedForm>
    </Create>;
};
