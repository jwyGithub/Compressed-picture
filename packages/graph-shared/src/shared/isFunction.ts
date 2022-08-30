/**
 * @description 是否是函数
 * @param data
 * @return boolean
 */
const isFunction = (data: any): boolean => {
    return Object.prototype.toString.call(data) === '[object Function]';
};

export default isFunction;
