import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    ImageField,
    ImageInput,
    TranslatableInputs,
    NumberInput,
    useLocales
} from 'react-admin';

export default () => {

    const locales = useLocales();

    return <Create>
        <TabbedForm>
            <FormTab label="resources.general">
                <ImageInput
                    source="image"
                    accept="image/jpeg"
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
    </Create>;
};
