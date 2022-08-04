import axios from 'axios';
import React from 'react';

const BASE_URL = 'https://randomuser.me';
const getAPI = async () => {
    const response = await axios.get(`${BASE_URL}/api`);
    return response.data;
}

export default getAPI;