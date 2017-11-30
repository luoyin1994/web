import axios from 'axios';
import Constant from '../conf/api.conf';

const a = 'pc/get-configuration-system-file';

export async function ajax(config, needTk = true) {
    let defaultConfig = {
        method: 'post'
    };
    return await axios(Object.assign({
        url: Constant.API_URL + config.url,
        tk : needTk
            ? Constant.TK
            : undefined
    }, defaultConfig, config)).then(
        response => response.data,
        response => ({
            code: Constant.ERR_NETWORK,
            data: response
        })
    );
}