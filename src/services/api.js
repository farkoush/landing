import axios from 'axios';
import React from 'react';

const BASE_URL = 'https://randomuser.me/api';

const getAPI = async () => {
    const response = await axios.get(`${BASE_URL}/?page=2&results=10&seed=shetab`);
    return response.data;
}

export default getAPI;