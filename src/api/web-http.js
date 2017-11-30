import Vue from 'vue';
import {WebApi} from '../lib/api.js';
import {WebConstant}  from './web-constant.js'

var WebHttp = {
    ajax(route, data, need_tk = true) {
        let url = WebConstant.API_URL + route;
        data = data || {};
        if(need_tk)
            data['tk'] =  WebApi.tk;

        return Vue.http.post(url, data).then(
            (result) => (result.data),
            (result)=> ({code: WebConstant.ERR_NETWORK, data: result})
        );
    },

};
module.exports.WebHttp = WebHttp;