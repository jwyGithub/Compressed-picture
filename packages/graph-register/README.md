# @graph-module/register

## Install

-   npm

    ```shell
    npm install @graph-module/register --save
    ```

-   yarn

    ```shell
    yarn add @graph-module/register --save
    ```

-   pnpm

    ```shell
    pnpm add @graph-module/register --save
    ```

## Description

    register shape and style

## Example

```typescript
import { Graph } from '@graph-module/core';
import { draw } from '@graph-module/draw';
import { registerStyle } from '@graph-module/register';

const container = <HTMLDivElement>document.getElementById('app');

const graph = new Graph(container);

registerStyle(graph, 'customStyle', {
    fontColor: '#fff',
    fontSize: 20,
    fontStyle: 7,
    shape: 'cylinder',
    strokeColor: '#000',
    fillColor: '#ccc'
});

draw(graph, {
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            size: [100, 100],
            position: [300, 100],
            style: {
                baseStyleNames: ['customStyle']
            }
        }
    ]
});
```

## Documention

https://jwygithub.github.io/graph-module/style/default-style.html

