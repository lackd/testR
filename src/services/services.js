import { api } from './apiService';

export const add = (path, params) => {
    return api.post(path, params);
}


export const update = (path, params) => {
    return api.put(path, params);
}

export const get = (path, id) => {
    return api.get(String(`${path}/${id}`));
}

export const getAll = (path) => {
    return api.get(path);
}

export const remove = (path, id) => {
    return api.delete(String(`${path}/${id}`));
}