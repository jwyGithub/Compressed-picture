import { Graph } from '@graph-module/core';

/**
 * @description graph 配置参数
 * @pubic
 */
export interface GraphConfig {
    /**
     * @description 只读模式 (无法进行拖拽拉伸等操作)
     * @param true  启动只读模式
     * @param false 不启动只读模式
     * @default false
     */
    readonly?: boolean;

    /**
     * @description 节点是否可以改变大小
     * @param true  可以改变大小
     * @param false 不可以改变大小
     * @default true
     */
    cellResize?: boolean;

    /**
     * @description 节点是否可以移动
     * @param true  可以移动
     * @param false 不可以移动
     * @default true
     */
    cellMove?: boolean;

    /**
     * @description 节点是否可以新的连接
     * @param true  可以连接
     * @param false 不可以连接
     * @default true
     */
    setConnectable?: boolean;

    /**
     * @description 容器大小是否自适应
     * @param true  自适应
     * @param false 不自适应
     * @default false
     */
    containerResize?: boolean;

    /**
     * @description 重复连接
     * @param true  开启
     * @param false 不开启
     * @default false
     */
    setMultigraph?: boolean;

    /**
     * @description 是否可以解析html
     * @param true  可以解析
     * @param false 不可以解析
     * @default true
     */
    setHtmlLabels?: boolean;

    /**
     * @description 是否允许移动 Vertex 的 Label
     * @param true  可以移动
     * @param false 不可以移动
     * @default true
     */
    setVertexLabelsMovable?: boolean;

    /**
     * @description 是否允许连线的目标和源是同一元素
     * @param true  可以移动
     * @param false 不可以移动
     * @default false
     */
    setAllowLoops?: boolean;
}

/**
 * @description 合并配置参数
 * @param config GraphConfig
 * @returns Required<GraphConfig>
 */
const mergeConfig = (config: GraphConfig): Required<GraphConfig> => {
    return {
        cellResize: true,
        readonly: true,
        cellMove: true,
        setConnectable: true,
        containerResize: false,
        setMultigraph: false,
        setHtmlLabels: true,
        setVertexLabelsMovable: true,
        setAllowLoops: false,
        ...config
    };
};

/**
 * @description graph 全局设置
 * @param config { GraphConfig }
 *
 */
export const graphConfig = (graph: Graph, config: GraphConfig) => {
    const _config = mergeConfig(config);
    graph.setEnabled(!_config.readonly);
    graph.setCellsResizable(_config.cellResize);
    graph.setCellsMovable(_config.cellMove);
    graph.setConnectable(_config.setConnectable);
    graph.setResizeContainer(_config.containerResize);
    graph.setMultigraph(_config.setMultigraph);
    graph.setHtmlLabels(_config.setHtmlLabels);
    graph.setVertexLabelsMovable(_config.setVertexLabelsMovable);
    graph.setAllowLoops(_config.setAllowLoops);
};

