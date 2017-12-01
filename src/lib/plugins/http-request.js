import axios from 'axios';
import {
    BASE_URL,
    ERR_NETWORK
} from '../../conf/api.conf';
import api from './../api';

export const httpRequest = (url, params = {}, options = {}) => {
    options   = Object.assign({
        needTk: true
    }, options);
    params.tk = options.needTk ? api.tk : undefined;
    return axios({
        method : 'post',
        baseURL: BASE_URL,
        url,
        params
    })
    .then(res => res.data)
    .catch(err => ({
        code: ERR_NETWORK,
        data: err
    }));
};