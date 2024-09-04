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
    NumberInput,
    useLocales,
    Labeled
} from 'react-admin';
import {useContextProvider} from '@vzhyhunou/vzh-cms';

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
                    />
                    <TextInput
                        multiline
                        source="desc"
                    />
                </TranslatableInputs>
                <NumberInput
                    source="price"
                />
            </FormTab>
        </TabbedForm>
    </Edit>;
};
