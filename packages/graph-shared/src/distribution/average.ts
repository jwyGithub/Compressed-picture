export type averageDistribution = (step?: number, start?: number) => number[];

/**
 * @description 平均分布算法
 * @param step total
 * @param start count
 * @returns
 */
const averageDistribution: averageDistribution = (step: number = 0.25, start: number = 0): number[] => {
    let end = 1;
    let l = [];
    while (start < end) {
        if (start + step < end) l.push(start * 10 + step * 10);
        start += step;
    }
    return l.map(i => i / 10);
};

export default averageDistribution;

