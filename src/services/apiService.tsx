import axios from 'axios';
import * as config from '../config/Config';

export const api = axios.create({
    baseURL: config.BASE_URI,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
});
