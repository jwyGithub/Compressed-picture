# Anchor

-   **type**

    ```typescript
    type getGeometry = (step?: number, start?: number) => typeof Geometry;
    /**
     * @description 平均分布模式配置参数
     * @param step 间隔
     * @param start 开始
     */
    const getGeometry: getGeometry;
    ```

-   **example**

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入setting包
    import { globalConfig, graphConfig } from '@graph-module/setting';
    // 引入锚点包
    import { getGeometry } from '@graph-module/geometry';
    // 引入绘制包
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // container设置
    globalConfig(graph);
    // graph设置
    graphConfig(graph, {
        // 必须设置为true,锚点才生效
        setConnectable: true
    });
    // 定义getAllConnectionConstraints方法
    graph.getAllConnectionConstraints = function (terminal) {
        if (terminal && terminal.cell) {
            if (terminal.shape?.stencil) {
                if (terminal.shape.stencil.constraints) {
                    return terminal.shape.stencil.constraints;
                }
            } else if (terminal?.cell.geometry?.constraints) {
                return terminal.cell.geometry.constraints;
            }
        }
        return null;
    };
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [300, 100],
                // 设置锚点类
                geometryClass: getGeometry()
            }
        ]
    });
    ```

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906105544.png)

