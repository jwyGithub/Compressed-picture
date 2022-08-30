import isObject from './isObject';

/**
 * @description 是否是空对象
 * @param data
 * @returns boolean
 */
const isEmptyObject = (data: any): boolean => {
    return isObject(data) && Object.keys(data).length !== 0;
};

export default isEmptyObject;

