### 1. install

-   use npm

    ```sh
    npm i @graphpack/mixin-config --save
    ```

-   use yarn
    ```sh
    yarn add @graphpack/mixin-config --save
    ```
-   use pnpm
    ```sh
    pnpm add @graphpack/mixin-config --save
    ```

### 2. use

```typescript
import { globalConfig, graphConfig } from '@graphpack/mixin-config';
globalConfig(
    graph.graph,
    {
        disableContextMenu: true
    },
    container
);

graphConfig(graph.graph);
```

### 3. type

-   globalConfig 全局设置

-   **类型**

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
/**
 * @description graph 全局设置
 * @param config { GlobalConfig }
 *
 */
const globalConfig: (graph: Graph, config: GlobalConfig, container?: HTMLElement) => void;
```

-   graphConfig 全局设置

-   **类型**

    ```typescript
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
    const graphConfig: (graph: Graph, config: GraphConfig) => void;
    ```

