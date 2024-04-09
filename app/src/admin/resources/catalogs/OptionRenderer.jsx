import React from 'react';
import {
    ImageField,
    NumberField,
    TextField,
    useLocale
} from 'react-admin';

export default () => {

    const locale = useLocale();

    return <>
        <NumberField
            source="id"
        />
        <ImageField source="image.src" title="image.title"/>
        <TextField
            source={`name.${locale}`}
        />
    </>;
};
