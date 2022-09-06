# Config

set graph properties

## graphConfig

-   **type**

    ```typescript
    /**
     * @description graph 全局设置
     * @param config { GraphConfig }
     *
     */
    declare const graphConfig: (graph: Graph, config?: GraphConfig) => void;
    ```

-   **graphConfig**

    ```typescript
    /**
     * @description graph 配置参数
     * @pubic
     */
    interface GraphConfig {
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
    ```

-   **example**

    ```typescript
    // 引入Graph包
    import { Graph } from '@graph-module/core';

    // 引入setting包
    import { globalConfig, graphConfig } from '@graph-module/setting';

    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');

    // 初始化容器
    const graph = new Graph(container);

    // 调用graph设置方法
    graphConfig(graph);
    ```

