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
export const _typeof = (inputValue) => {
    let toString = Object.prototype.toString;

    let typeStr = toString.apply(inputValue);
    typeStr     = regExpStr.typeStr.exec(typeStr)[1].toLowerCase();
    return typeStr;
};

export const isNull = (inputValue) => {
    return _typeof(inputValue) === 'null';
};

export const isUndefined = (inputValue) => {
    return _typeof(inputValue) === 'undefined';
};

export const isString = (inputValue) => {
    return _typeof(inputValue) === 'string';
};

export const isNumber = (inputValue) => {
    return _typeof(inputValue) === 'number';
};

export const isBoolean = (inputValue) => {
    return _typeof(inputValue) === 'boolean';
};

export const isArray = (inputValue) => {
    return _typeof(inputValue) === 'array';
};

export const isObject = (inputValue) => {
    return _typeof(inputValue) === 'object';
};

export const isFunction = (inputValue) => {
    return _typeof(inputValue) === 'function';
};

export const isDate = (inputValue) => {
    return _typeof(inputValue) === 'date';
};

/**
 * 判断 checkedValue 的类型是否存在于 typesArray 中
 * @param checkedValue
 * @param typesArray
 * @returns {boolean}
 */
export const whetherValueTypeInTypesArray = (checkedValue, typesArray) => {
    let result = typesArray.find(
        ignoreType => _typeof(checkedValue) === ignoreType);
    return result !== undefined;
};

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
