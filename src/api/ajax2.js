import Vue from 'vue';
import {WebApi} from './web-api.js';
import {WebConstant} from './web-constant.js';
import {WebUtil} from './web-util';

/**
 * 获取接口数据
 *
 * 传入api对象格式 {path,query,need_tk}
 */
class GetApi {
    constructor(api) {
        this.path    = api.path;  // api路径
        this.query   = api.query || {};  // api查询字符串对象
        this.need_tk = api.need_tk === false ? false : true;  // 是否需要tk。默认为需要
        return this.init();
    }

    init() {
        const url = WebConstant.API_URL + this.path;
        if (this.need_tk) this.query.tk = WebApi.tk;
        return Vue.http.post(url, this.query).then(
            result => (result.data),
            result => ({code: WebConstant.ERR_NETWORK, data: result}),
        );
    }
}

/**
 * 处获取接口后的数据
 *
 * 传入obj对象格式 {path,query,need_tk,name,beforeSend}
 * 传入obj.beforeSend没有，则往下执行；有值且为函数则执行该函数，当该函数没有返回false时，默认执行后往下执行，为false时，终止init函数
 */
class Ajax {
    constructor(obj) {
        this.api = {path: obj.path, query: obj.query, need_tk: obj.need_tk};
        this.progressBar = obj.progressBar || true; // 默认需要进度条
        this.beforeSend = obj.beforeSend; // 进行发送请求之前的处理 可选
        if(WebApi.apiConfigs != null){
            let apiConfig = WebApi.apiConfigs[obj.name];
            this.api = Object.assign(apiConfig.api, this.api); // 合并WebApi中接口配置
            this.getSpecialError(apiConfig, obj);
        }
        this.queryWatcher();
        return this.init();
    }

    // 正常情况的 error toast
    toastInitialError(result) {
        WebUtil.toast(WebUtil.getCodeMsg(result.code, WebConstant.RETURN_ERROR_CODES));
    }

    // 特殊情况的 error toast
    toastSpecialError(){
        if(this.specialError.newMsg){
            WebUtil.toast(this.specialError.newMsg);
        }else{
            let specialMsg = WebConstant.RETURN_ERROR_CODES.find(item => item.code == this.specialError.code).specialMsg;
            if(specialMsg && typeof specialMsg === 'object' && !Array.isArray(specialMsg)) {
                if(specialMsg[this.specialError.where]){
                    WebUtil.toast(specialMsg[this.specialError.where]);
                }else{
                    console.error(new Error(`the "${this.specialError.where}" attribute of Object "specialMsg" is not exist!`))
                }
            }else console.error(new Error('"specialMsg" should be an object!'));
        }
    }

    // 获取特殊的error对象
    // 包含{code, where, newMsg}字段
    getSpecialError(apiConfig, obj){
        this.specialError = apiConfig.error  // 特殊的error返回值
            || {code: undefined, where: undefined, newMsg: undefined}; // code：为对应的返回code，where：为配置中specialMsg对应的key，newMsg：为临时新的message，优先于配置中任何的msg
        Object.assign(this.specialError, obj.error); // 优先从创建的实例中获取，再从apiconfig配置中获取
    }

    // 在this上挂载并监听query的属性
    queryWatcher(){
        if(this.api.query){
            // api.query 如果有值，应该是一个对象
            if(typeof this.api.query !== 'object' || Array.isArray(this.api.query)) {
                console.error(new Error('typeof "api.query" should be an object!'));
                return;
            }
            //将this.api.query中的属性挂载到this中，监听this中相应属性值的变化，同步更新this.api.query中的对应属性值
            for(let key in this.api.query){
                Object.defineProperty(this, key, {
                    get: () => this.api.query[key],
                    set: val => this.api.query[key] = val
                })
            }
        }
    }

    init() {
        // 需要时提供发送请求之前的处理函数
        // 在使用beforeSend时，this指向的是该ajax实例，同vue结合需要稍加注意
        if (typeof this.beforeSend === 'function')  // beforeSend 为function才检查。默认可以往下执行
            if (this.beforeSend() === false) return;  // beforeSend 时一定要有return的状态。并且规定只有false时才终止，默认undefined可以往下执行
        if(this.progressBar) WebApi.startProgress();
        const getApi = new GetApi(this.api); // 创建GetApi实例
        // 返回包装的promise对象
        return new Promise((resolve, reject) => {
            getApi.then(result => {
                if (result.code == WebConstant.RETURN_OK) {
                    if(this.progressBar) WebApi.finishProgress();
                    // 成功 resolve提供对外扩展接口
                    resolve(result);
                } else {
                    if(this.progressBar) WebApi.failProgress();
                    if(this.specialError != null && this.specialError.code && this.specialError.code == result.code){
                        this.toastSpecialError();
                        // 特殊情况下 reject提供对外扩展接口
                        reject(result);
                    } else{
                        this.toastInitialError(result);
                    }
                }
            });
        });
    }
}

module.exports.ajax = function(obj) {
    return new Ajax(obj);
};
