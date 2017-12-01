import axios from 'axios';
import apiConf from '../conf/api.conf';
import api from './api';

export default function ajax(url, params = {}, options = {needTk: true}) {
    params.tk = options.needTk ? api.tk : undefined;
    return axios({
        method : 'post',
        baseURL: apiConf.BASE_URL,
        url,
        params
    })
    .then(res => res.data)
    .catch(err => ({
        code: apiConf.ERR_NETWORK,
        data: err
    }));
}