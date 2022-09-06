import { InternalEvent, type Graph, RubberBandHandler } from '@graph-module/core';

/**
 * @description graph 配置参数
 * @pubic
 */
export interface GlobalConfig {
    /**
     * @description 禁用右键菜单
     * @param true 禁用
     * @param false 不禁用
     * @default true
     */
    disableContextMenu?: boolean;

    /**
     * @description 鼠标框选
     * @param true  开启
     * @param false 不开启
     * @default true
     */
    rubberBand?: boolean;
}

/**
 * @description 合并配置参数
 * @param config GlobalConfig
 * @returns Required<GlobalConfig>
 */
const mergeConfig = (config: GlobalConfig): Required<GlobalConfig> => {
    return {
        disableContextMenu: true,
        rubberBand: true,
        ...config
    };
};
/**
 * @description graph 全局设置
 * @param config { GlobalConfig }
 *
 */
export const globalConfig = (graph: Graph, config: GlobalConfig = {}) => {
    const _container = graph.getContainer();
    const _config = mergeConfig(config);
    _config.disableContextMenu && _container && InternalEvent.disableContextMenu(_container);
    _config.rubberBand && new RubberBandHandler(graph);
};

