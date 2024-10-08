import React from 'react';
import { useRecordContext } from 'react-admin';
import { Link } from 'react-router-dom';

export default ({source}) => {

    const record = useRecordContext();

    return <Link to={`/?id=${record.id}`}>{record[source]}</Link>;
};