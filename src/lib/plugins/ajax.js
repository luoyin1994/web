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
 */
const toastSpecialErrorMsg = () => {
    if (this.specialError.newMsg) {
        WebUtil.toast(this.specialError.newMsg);
    }
    else {
        let specialMsg = WebConstant.RETURN_ERROR_CODES.find(item => item.code == this.specialError.code).specialMsg;
        if (specialMsg && typeof specialMsg === 'object' && !Array.isArray(specialMsg)) {
            if (specialMsg[this.specialError.where]) {
                WebUtil.toast(specialMsg[this.specialError.where]);
            }
            else {
                console.error(new Error(`the "${this.specialError.where}" attribute of Object "specialMsg" is not exist!`));
            }
        }
        else console.error(new Error('"specialMsg" should be an object!'));
    }
};

export const ajax = async (url, params = {}, options = {
    needTk         : true,
    openProgressBar: true,
    specialCodes   : []
}) => {
    if (options.openProgressBar) progressBar.startProgress();
    let res = await httpRequest(url, params, options);
    if (String(res.code) === apiConf.RETURN_OK) {
        if (options.openProgressBar) progressBar.finishProgress();
        return res.data;
    }
    else {
        if (options.openProgressBar) progressBar.failProgress();
        if (options.specialCodes.length > 0) {
            toastSpecialErrorMsg();
            return res;
        }
        else {
            toastErrorMsg(res.code);
        }
    }

};
