import md5 from 'md5';
import { PRIVATE_KEY, PUBLIC_KEY } from '../config/Config';
import { api } from './apiService';

export const add = (path: string, params: object) => {
    return api.post(path, params);
}


export const update = (path: string, params: object) => {
    return api.put(path, params);
}

export const get = (path: string, id: number) => {
    const timeStamp: Date = new Date();
    const hash = md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY)
    return api.get(String(`${path}/${id}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`));
}

export const getDetail = (path: string, detail: string, id: number) => {
    const timeStamp: Date = new Date();
    const hash = md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY)
    return api.get(String(`${path}/${id}/${detail}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`));
}

export const getAll = (path: string) => {
    return api.get(path);
}

export const remove = (path: string, id: number) => {
    return api.delete(String(`${path}/${id}`));
}