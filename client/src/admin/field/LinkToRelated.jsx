import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {useTranslate, useRecordContext} from 'react-admin';
import {stringify} from 'query-string';

export default ({related, id, resource, capture}) => {

    const record = useRecordContext();
    const translate = useTranslate();

    return record ?
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: `/${related}`,
                search: stringify({
                    filter: JSON.stringify({[id]: record.id}),
                })
            }}
        >
            <resource.icon sx={{paddingRight: '0.5em'}}/>
            {translate(capture)}
        </Button>
    : null;
};
