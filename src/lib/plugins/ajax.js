import {httpRequest} from './http-request';
import progressBar from './progress-bar';
import {
    RETURN_OK,
    ERROR_CODES_MAP,
    RETURN_ERR_OTHER_MSG
} from '../../conf/api.conf';
import {toast} from './toast';
import {log} from '../utils';

/**
 * api调取接口
 * @param url
 * @param params
 * @param options
 * @returns {Promise}
 */
export const ajax = async (url, params = {}, options = {}) => {
    options = Object.assign({
        needTk              : true,
        openProgressBar     : false,
        specialErrorCodesMap: []
    }, options);
    if (options.openProgressBar) progressBar.startProgress();
    let res  = await httpRequest(url, params, options);
    res.code = String(res.code);
    if (res.code === RETURN_OK) {
        if (options.openProgressBar) progressBar.finishProgress();
        log(res);
        return res;
    }
    else {
        if (options.openProgressBar) progressBar.failProgress();
        if (options.specialErrorCodesMap.length > 0) {
            toastSpecialErrorMsg(res.code, options.specialErrorCodesMap);
            log(res);
            return res;
        }
        else {
            log(res.code);
            toastErrorMsg(res.code);
            return res;
        }
    }
};

/**
 * 获取返回code的对应massage
 * @param code
 * @param codesMap
 * @param defaultMsg
 * @returns {string}
 */
const getCodeMsg = (code, codesMap, defaultMsg = '') => {
    let codeItem = codesMap.find(item => item.code === String(code));
    log(codeItem);
    return codeItem === undefined ? defaultMsg : codeItem.msg;
};

/**
 * 弹出错误信息（一般情况）
 * @param code
 * @param errorCodesMap
 * @param defaultErrorMsg
 */
const toastErrorMsg = (code, errorCodesMap = ERROR_CODES_MAP, defaultErrorMsg = RETURN_ERR_OTHER_MSG) => {
    let codeMsg = getCodeMsg(code, errorCodesMap, defaultErrorMsg);
    log(codeMsg);
    toast(codeMsg);
};

/**
 * 弹出错误信息（特殊情况）
 * @param code
 * @param specialErrorCodesMap
 */
const toastSpecialErrorMsg = (code, specialErrorCodesMap) => {
    let codeMsg = getCodeMsg(code, specialErrorCodesMap);
    log(codeMsg);
    if (codeMsg !== '') {
        toast(codeMsg);
    }
    else {
        toastErrorMsg(code);
    }
};
