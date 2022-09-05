# @graph-module/geometry

## Install

-   npm

    ```shell
    npm install @graph-module/geometry --save
    ```

-   yarn

    ```shell
    yarn add @graph-module/geometry --save
    ```

-   pnpm

    ```shell
    pnpm add @graph-module/geometry --save
    ```

## Description

    set anchor points for drawings

## Example

```typescript
// 引入包
import { Graph } from '@graph-module/core';
// 引入draw包
import { draw } from '@graph-module/draw';
// 引入锚点包
import { getGeometry } from '@graph-module/geometry';
// 获取容器
const container = <HTMLElement>document.getElementById('app');
// 初始化容器
const graph = new Graph(container);
// 设置允许连接
graph.setConnectable(true);
// 定义getAllConnectionConstraints方法
graph.getAllConnectionConstraints = function (terminal) {
    if (terminal && terminal.cell) {
        if (terminal?.shape?.stencil) {
            if (terminal.shape.stencil.constraints) {
                return terminal.shape.stencil.constraints;
            }
        } else if (terminal?.cell?.geometry?.constraints) {
            return terminal.cell.geometry.constraints;
        }
    }
    return null;
};
// 开始绘制
draw(graph, {
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [100, 100],
            size: [100, 100],
            style: {
                shape: 'cloud'
            },
            // 给图形设置锚点属性
            geometryClass: getGeometry()
        },
        {
            id: 'vertex2',
            value: 'vertex2',
            position: [100, 300],
            size: [100, 100],
            style: {
                shape: 'cloud'
            },
            // 给图形设置锚点属性
            geometryClass: getGeometry()
        }
    ],
    edges: [
        {
            id: 'vertex1-vertex2',
            source: 'vertex1',
            target: 'vertex2'
        }
    ]
});
```

![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220905162532.png)

## Documention

https://jwygithub.github.io/graph-module/draw/geometry.html

