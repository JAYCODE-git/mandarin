import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../../config';

const FetchComponent = ({ url, children }) => {
    const fetchUrl = BASE_URL + url;
    const { loading, data, error } = useFetch(fetchUrl);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.message}</div>;

    return children(data);
};

export default FetchComponent;
