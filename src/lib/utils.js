import {DEBUG} from '../conf/app.conf';

export * from './plugins/validation';

/**
 * 错误打印提示
 * @param msg
 */
export const logError = (msg) => {
    if (DEBUG) {
        console.error(msg);
    }
    else {
        console.log(msg);
    }
};

/**
 * 一般打印提示
 * @param msg
 */
export const log = (msg) => {
    if (DEBUG) {
        console.log(msg);
    }
};

