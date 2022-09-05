# graph-module/draw

## Install

-   npm

    ```shell
    npm install @graph-module/draw --save
    ```

-   yarn

    ```shell
    yarn add @graph-module/draw --save
    ```

-   pnpm

    ```shell
    pnpm add @graph-module/draw --save
    ```

## Description

    draw graphics in the specified container, or display graphics

## Example

```typescript
// 引入包
import { Graph } from '@graph-module/core';
// 引入draw包
import { draw } from '@graph-module/draw';
// 获取容器
const container = <HTMLElement>document.getElementById('app');
// 初始化容器
const graph = new Graph(container);
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
            }
        },
        {
            id: 'vertex2',
            value: 'vertex2',
            position: [100, 300],
            size: [100, 100],
            style: {
                shape: 'cloud'
            }
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

![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220905150526.png)

## Documention

https://jwygithub.github.io/graph-module/draw/draw.html

