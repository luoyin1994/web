/** 接口地址 **/
export const BASE_URL             = 'http://localhost:3000/';
export const PICTURE_ADDRESS      = 'http://localhost:3000/pic';
/** 请求api返回配置 **/
export const RETURN_OK            = '1'; //成功
export const RETURN_ERR_OTHER_MSG = '服务器内部错误';
// 需特殊处理的error code
export const ERR_NETWORK          = '-100';             // 网络错误
// 通用error code
export const ERROR_CODES_MAP = [
    {code: '-1', msg: '版本号错误'}, //版本号错误
    {code: '-2', msg: '接口名称错误或非法'}, //接口名称错误或非法（字母数字中划线组合）
    {code: '-3', msg: '接口参数错误'}, //接口参数错误
    // {code: '-4', msg:'数据库读写错误'}, //数据库读写错误
    {code: '-5', msg: ''},
    {code: '-6', msg: ''},
    {code: '-7', msg: ''},
    {code: '-8', msg: '没有权限'}, //用户没有权限
    {code: '-100', msg: '网络错误'}
];