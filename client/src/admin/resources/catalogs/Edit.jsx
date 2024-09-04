import React from 'react';
import {
    DateField,
    Edit,
    FormTab,
    ReferenceField,
    TabbedForm,
    TextField,
    TextInput,
    ImageField,
    ImageInput,
    TranslatableInputs,
    usePermissions,
    useLocales,
    Labeled,
    required
} from 'react-admin';
import {TagsInput, useContextProvider} from '@vzhyhunou/vzh-cms';

import Products from './Products';

export default () => {

    const locales = useLocales();
    const {permissions} = usePermissions();
    const {resources: {users: {tags: {MANAGER}}}} = useContextProvider();

    return <Edit>
        <TabbedForm>
            <FormTab label="resources.general">
                <Labeled source="date">
                    <DateField
                        source="date"
                        showTime
                    />
                </Labeled>
                {permissions && permissions.includes(MANAGER) &&
                    <Labeled source="user">
                        <ReferenceField
                            source="userId"
                            reference="users"
                            allowEmpty={true}
                        >
                            <TextField source="id"/>
                        </ReferenceField>
                    </Labeled>
                }
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
    </Edit>;
};
