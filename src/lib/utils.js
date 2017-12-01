import appConf from '../conf/app.conf';



/**
 * 错误打印提示
 * @param msg
 */
function log(msg) {
    if (appConf.DEBUG) {
        console.error(msg);
    }
    else {
        console.log(msg);
    }
}

/**
 * 添加“0”前缀
 * @param string 需要验证添加的值
 * @param validateLength 需要验证的位数
 * @returns {*}
 */
function prefix_0(string, validateLength) {
    if (isEmpty(string)) return string;
    if (!isString(string)) {
        log('Parameter Error: type of arguments[0] should be String');
    }
    if (!isNumber(validateLength)) {
        throw 'Parameter Error: type of arguments[1] should be Number';
    }
    let length = string.length;
    while (length < validateLength) {
        string = `0${string}`;
        length += 1;
    }
    return string;
}

// 正则表达式
const regExpStr = {
    typeStr: /^\[object (\w+)\]$/
};

/**
 * 扩展的 typeof
 * 可以进行的类型检测包括但不限于：
 * null、undefined、string、number、array、boolean、object、function、date
 * @param inputValue
 * @returns {*}
 */
function _typeof(inputValue) {
    let toString = Object.prototype.toString;

    let typeStr = toString.apply(inputValue);
    typeStr     = regExpStr.typeStr.exec(typeStr)[1].toLowerCase();
    return typeStr;
}

function isNull(inputValue) {
    return _typeof(inputValue) === 'null';
}

function isUndefined(inputValue) {
    return _typeof(inputValue) === 'undefined';
}

function isString(inputValue) {
    return _typeof(inputValue) === 'string';
}

function isNumber(inputValue) {
    return _typeof(inputValue) === 'number';
}

function isBoolean(inputValue) {
    return _typeof(inputValue) === 'boolean';
}

function isArray(inputValue) {
    return _typeof(inputValue) === 'array';
}

function isObject(inputValue) {
    return _typeof(inputValue) === 'object';
}

function isFunction(inputValue) {
    return _typeof(inputValue) === 'function';
}

function isDate(inputValue) {
    return _typeof(inputValue) === 'date';
}

/**
 * 判断 checkedValue 的类型是否存在于 typesArray 中
 * @param checkedValue
 * @param typesArray
 * @returns {boolean}
 */
function whetherValueTypeInTypesArray(checkedValue, typesArray) {
    let result = typesArray.find(
        ignoreType => _typeof(checkedValue) === ignoreType);
    return result !== undefined;
}

/**
 * 判断是否为自定义的空
 * @param checkedValue 检测值
 * @param isEmptyDefaultTypesArray 默认为空的类型数组
 * @param notEmptyDefaultTypesArray 默认不为空的类型数组
 * @returns {boolean}
 */
export const isEmpty = (
    checkedValue,
    isEmptyDefaultTypesArray  = ['null', 'undefined'],
    notEmptyDefaultTypesArray = ['function', 'date', 'boolean', 'number']
) => {
    if (whetherValueTypeInTypesArray(checkedValue, isEmptyDefaultTypesArray)) {
        return true;
    }

    if (whetherValueTypeInTypesArray(checkedValue, notEmptyDefaultTypesArray)) {
        return false;
    }

    // 可以验证的类型
    if (isObject(checkedValue)) {
        let length = Object.keys(checkedValue).length;
        return length === 0;
    }

    if (isArray(checkedValue)) {
        return checkedValue.length === 0;
    }

    if (isString(checkedValue)) {
        return checkedValue.toString().trim() === '';
    }

    return false;
};

