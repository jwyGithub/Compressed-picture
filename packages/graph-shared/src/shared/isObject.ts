/**
 * @description 是否是对象
 * @param data
 * @returns boolean
 */
const isObject = (data: any): boolean => {
    return Object.prototype.toString.call(data) === '[object Object]';
};

export default isObject;
