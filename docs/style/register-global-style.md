# Style

## register global style

-   **type**

    ```typescript
    type registerStyleConfig<S extends string> = CellStateStyle<S>;
    /**
     * @public
     * @description 注册全局样式
     * @param graph Graph
     * @param styleName style name
     * @param config registerStyleConfig
     * @return Graph
     */
    declare const registerStyle: <S extends string>(graph: Graph, styleName: string, config: registerStyleConfig<S>) => Graph;
    ```

-   **example**

    ```typescript
    // 引入包
    import { Graph } from '@graph-module/core';
    // 引入绘制包
    import { draw } from '@graph-module/draw';
    // 引入注册包
    import { registerStyle } from '@graph-module/register';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 注册全局样式
    registerStyle(graph, 'customStyle', {
        fontColor: '#fff',
        fontSize: 20,
        fontStyle: 7,
        shape: 'cylinder',
        strokeColor: '#000',
        fillColor: '#ccc'
    });
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [300, 100],
                style: {
                    // 使用自定义样式
                    baseStyleNames: ['customStyle']
                }
            }
        ]
    });
    ```

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906114159.png)

