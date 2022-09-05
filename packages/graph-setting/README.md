# @graph-module/setting

## Install

-   npm

    ```shell
    npm install @graph-module/setting --save
    ```

-   yarn

    ```shell
    yarn add @graph-module/setting --save
    ```

-   pnpm

    ```shell
    pnpm add @graph-module/setting --save
    ```

## Description

    set the container attribute and graph configuration

## Example

```typescript
// 引入包
import { Graph } from '@graph-module/core';
// 引入设置包
import { globalConfig, graphConfig } from '@graph-module/setting';
// 获取容器
const container = <HTMLElement>document.getElementById('app');
// 初始化容器
const graph = new Graph(container);
// container全局设置。比如禁用右键，开启鼠标框选。。
globalConfig(
    graph,
    {
        disableContextMenu: true,
        rubberBand: false
    },
    container
);
// graph的设置，比如只读模式，禁止新的连接，重复连接等
graphConfig(graph, {
    readonly: false,
    cellResize: false,
    setConnectable: true,
    cellMove: false,
    setMultigraph: true
});
```

## Documention

https://jwygithub.github.io/graph-module/config/global-config.html

