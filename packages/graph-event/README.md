# @graph-module/event

## Install

-   npm

    ```shell
    npm install @graph-module/event --save
    ```

-   yarn

    ```shell
    yarn add @graph-module/event --save
    ```

-   pnpm

    ```shell
    pnpm add @graph-module/event --save
    ```

## Description

    add event listening to container and graph

## Example

```typescript
// 引入包
import { Graph } from '@graph-module/core';
// 引入event包
import { graphEvent } from '@graph-module/event';
// 获取容器
const container = <HTMLDivElement>document.getElementById('app');
// 初始化容器
const graph = new Graph(container);
// 初始化事件，并挂载容器
const eleEvent = graphEvent.mount(graph);
// 监听事件
eleEvent.on('click', (g: Graph, e) => {
    console.log(e, `e`);
});
```

## Documention

https://jwygithub.github.io/graph-module/event/graph-event.html <br /> https://jwygithub.github.io/graph-module/event/element-event.html

