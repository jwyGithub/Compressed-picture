# Getting Started

-   ### script

    ```html
    <script src="https://cdn.jsdelivr.net/npm/@graph-libs/core@0.0.1/dist/maxgraph.js"></script>
    <script>
        const graph = graphCore.init(container);
    </script>
    ```

-   ### npm

    ```sh
    npm install @staryea/graph --save
    ```

    ```typescript
    import { graph } from '@staryea/graph-core';
    ```

-   ### 使用

    ```typescript
    // @ts-ignore
    graph.graph.getStylesheet().getDefaultEdgeStyle().edgeStyle = 'orthogonalEdgeStyle';
    // 绘制
    graph.draw({
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                position: [500 / 2 - 100 / 2, 0],
                size: [100, 100],
                style: {
                    shape: 'cylinder',
                    fillColor: '#ccc',
                    strokeColor: '#efefef',
                    fontSize: 14,
                    verticalAlign: 'middle'
                }
            },
            {
                id: 'vertex2',
                value: 'vertex2',
                position: [0, 200],
                size: [100, 100]
            },
            {
                id: 'vertex3',
                value: 'vertex3',
                position: [500 - 100, 200],
                size: [100, 100]
            },
            {
                id: 'vertex4',
                value: 'vertex4',
                position: [500 / 2 - 100 / 2, 500],
                size: [100, 100]
            }
        ],
        edges: [
            {
                value: 'vertex1 - vertex2',
                source: 'vertex1',
                target: 'vertex2',
                style: {
                    rounded: true
                }
            },
            {
                value: 'vertex1 - vertex3',
                source: 'vertex1',
                target: 'vertex3',
                style: {
                    rounded: true
                }
            },
            {
                value: 'vertex1 - vertex4',
                source: 'vertex1',
                target: 'vertex4',
                style: {
                    rounded: true
                }
            },
            {
                value: 'vertex3 - vertex4',
                source: 'vertex3',
                target: 'vertex4',
                style: {
                    rounded: true,
                    verticalAlign: 'top',
                    align: 'right'
                }
            },
            {
                value: 'vertex2 - vertex4',
                source: 'vertex2',
                target: 'vertex4',
                style: {
                    rounded: true,
                    verticalAlign: 'middle',
                    align: 'left'
                }
            }
        ]
    });
    ```

-   ### 预览

    <image src="./images/getting-started.png"  width=100% />

