import { ConnectionConstraint, Geometry, Point } from '@graph-module/core';
import { averageDistribution } from '@graph-module/shared';

export type getGeometry = (step?: number, start?: number) => typeof Geometry;

/**
 * @description 分布模式
 * @param averageDistribution 平均分布
 * @param randomDistribution 随机分布
 */
export type distributionPattern = 'averageDistribution';
/**
 * @description 分布模式配置参数
 * @param step 间隔
 * @param start 开始
 */
export const getGeometry: getGeometry = (step: number = 0.25, start: number = 0) => {
    const constraints: ConnectionConstraint[] = [];
    const coordinateX = averageDistribution(step, start);

    coordinateX.map((i: number, idx: number) => {
        constraints.push(new ConnectionConstraint(new Point(i, 0), true));
        constraints.push(new ConnectionConstraint(new Point(0, i), true));
        constraints.push(new ConnectionConstraint(new Point(1, i), true));
        constraints.push(new ConnectionConstraint(new Point(i, 1), true));
    });

    return class extends Geometry {
        constraints = constraints;
    };
};

