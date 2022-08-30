import isArray from './isArray';

/**
 * @description 是否是空数组
 * @param data
 * @returns boolean
 */
const isEmptyArray = (data: any[]): boolean => {
    return isArray(data) && data.length === 0;
};

export default isEmptyArray;

