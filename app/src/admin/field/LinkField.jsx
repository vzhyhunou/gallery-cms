import React from 'react';
import get from 'lodash/get';
import {Link, useRecordContext} from 'react-admin';

export default ({source}) => {

    const record = useRecordContext();

    return <Link to={`/cms/pages/home?id=${get(record, 'id')}`}>{get(record, source)}</Link>
};
