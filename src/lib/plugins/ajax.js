import {httpRequest} from './http-request';
import progressBar from './progress-bar';
import apiConf from '../../conf/api.conf';
import {toast} from './toast';

/**
 * 获取返回code的对应massage
 * @param code
 * @param codesMap
 * @param defaultMsg
 * @returns {string}
 */
const getCodeMsg = (code, codesMap, defaultMsg = '') => {
    let codeItem = codesMap.find(item => item.code === String(code));
    return codeItem !== undefined ? defaultMsg : codeItem.msg;
};

/**
 * 弹出错误信息（一般情况）
 * @param code
 * @param errorCodesMap
 * @param defaultErrorMsg
 */
const toastErrorMsg = (code, errorCodesMap = apiConf.ERROR_CODES_MAP, defaultErrorMsg = apiConf.RETURN_ERR_OTHER_MSG) => {
    toast(getCodeMsg(code, errorCodesMap, defaultErrorMsg));
};

/**
 * 弹出错误信息（特殊情况）
 * @param code
 * @param specialErrorCodesMap
 */
const toastSpecialErrorMsg = (code, specialErrorCodesMap) => {
    let codeMsg = getCodeMsg(code, specialErrorCodesMap);
    if (codeMsg !== '') {
        toast(codeMsg);
    }
    else {
        toastErrorMsg(code);
    }
};

/**
 * api调取接口
 * @param url
 * @param params
 * @param options
 * @returns {Promise}
 */
export const ajax = async (url, params = {}, options = {
    needTk              : true,
    openProgressBar     : true,
    specialErrorCodesMap: []
}) => {
    if (options.openProgressBar) progressBar.startProgress();
    let res = await httpRequest(url, params, options);
    return new Promise((resolve, reject) => {
        if (String(res.code) === apiConf.RETURN_OK) {
            if (options.openProgressBar) progressBar.finishProgress();
            resolve(res.data);
        }
        else {
            if (options.openProgressBar) progressBar.failProgress();
            if (options.specialErrorCodesMap.length > 0) {
                toastSpecialErrorMsg(res.code, options.specialErrorCodesMap);
                reject(res);
            }
            else {
                toastErrorMsg(res.code);
            }
        }
    });

};
