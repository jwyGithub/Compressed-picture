# Config

set container properties


## globalConfig

-   **type**

    ```typescript
    /**
     * @description graph 全局设置
     * @param config { GlobalConfig }
     *
     */
    declare const globalConfig: (graph: Graph, config?: GlobalConfig) => void;
    ```

-   **globalConfig**

    ```typescript
    interface GlobalConfig {
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

    // 调用全局设置方法
    globalConfig(graph);
    ```

