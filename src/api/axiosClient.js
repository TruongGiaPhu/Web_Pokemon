import axios from 'axios';

import apiConfig from './apiConfig';

const axiosClient = (id, name, url) => {
    // const response = axios.get(`${apiConfig.baseUrl} `);
    const response = axios.get(
        `${apiConfig.baseUrl}${url || name || id || ''} `,
    );
    return response;
};

export default axiosClient;
