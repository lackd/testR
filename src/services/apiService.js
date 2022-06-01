import axios from 'axios'
import * as config from '../config/conection'

export const api = axios.create({
    baseURL: config.BASE_URL,
    timeout: 60000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});
