# 开始绘制

-   **类型**

```typescript
/**
 * @description vertex 参数选项
 * @param { parent } 要添加的父级
 * @param { id } vertex的id标识
 * @param { value } vertex的value
 * @param { position } vertex的位置 position[0] : x , position[1] : y
 * @param { size } vertex的大小 size[0] : width , size[1] : height
 * @param { style } vertex的样式 CellStyle
 * @param { relative } vertex的relative
 * @param { geometryClass } vertex的锚点位置
 */
export declare type vertexParams<S> = {
    parent?: Cell | null;
    id?: string | null;
    value?: string | null;
    position?: [number, number] | null;
    size?: [number, number] | null;
    style?: CellStyle<S> | null;
    relative?: boolean | null;
    geometryClass?: typeof Geometry;
};
/**
 * @description edge 参数选项
 * @param { parent } 要添加的父级
 * @param { value } edge 值
 * @param { source } 连接点的开始cell
 * @param { target } 连接点的结束cell
 * @param { style } edge的样式
 */
export declare type edgeParams<S> = {
    id?: string | null;
    parent?: Cell | null;
    value?: string | null;
    source?: string | Cell | null;
    target?: string | Cell | null;
    style?: CellStyle<S> | null;
};
/**
 * @description 绘制配置选项
 * @param {vertex} vertex cell -> vertex
 * @param {vertexStyle} vertex 的通用样式
 * @param {edge} edge cell -> edge
 * @param {edgeStyle} edge 的通用样式
 */
export interface drawConfig<S> {
    vertexs?: vertexParams<S>[];
    vertexStyle?: CellStyle<S>;
    edges?: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[]);
    edgeStyle?: CellStyle<S>;
}
export declare type drawReturn<S> = {
    vertexs: {
        [key: string]: Cell;
    };
    edges: {
        [key: string]: Cell;
    };
    drawVertexs: <S>(vertexs: vertexParams<S> | vertexParams<S>[]) => {
        [key: string]: Cell;
    };
    drawEdges: (edges: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[])) => void;
};
/**
 * @description draw function type
 */
export declare type drawType = <S>(this: GraphCoreObject, config: drawConfig<S>) => drawReturn<S>;
/**
 * @description 绘制
 * @param {config} config
 * @return
 */
export declare const draw: drawType;
```

## 绘制 vertex

### 示例

```typescript
// 引入包核心对象
import { graphCore } from '@staryea/graph-core';

// 创建容器
const container = document.createElement('div');

// 初始化容器
const graph = graphCore.init(container);

// 开始绘制
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
        }
    ],
    vertexStyle: {
        shape: 'cloud'
    }
});
```

## 绘制 edge

### 示例

```typescript
// 引入包核心对象
import { graphCore } from '@staryea/graph-core';

// 创建容器
const container = document.createElement('div');

// 初始化容器
const graph = graphCore.init(container);

// 开始绘制
graph.draw({
   edges: [
        {
            id: 'edge1',
            value: 'vertex1 - vertex2',
            source: 'vertex1',
            target: 'vertex2'
        }
    ]
    edgeStyle: {
        strokeColor: 'red'
    }
});
```

## 回调函数方式绘制 edge

### 示例

```typescript
// 引入包核心对象
import { graphCore } from '@staryea/graph-core';

// 创建容器
const container = document.createElement('div');

// 初始化容器
const graph = graphCore.init(container);

// 开始绘制
graph.draw({
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [500 / 2 - 100 / 2, 10],
            size: [100, 100]
        },
        {
            id: 'vertex2',
            value: 'vertex2',
            position: [0, 200],
            size: [100, 100]
        }
    ],
    edges: vertexs => {
        return [
            {
                id: 'edge1',
                value: 'vertex1 - vertex2',
                source: vertexs.vertex1,
                target: vertexs.vertex2
            }
        ];
    }
});
```

### 参数解释

draw 函数接收一个配置对象`drawConfig`,drawConfig 包括 4 个内容:

-   **`vertexs`**
    -   `vertexs` 数组配置，参数传递详见类型
-   **`vertexStyle`**
    -   `vertexs` 的样式，当 `vertexs` 里面每一项的 `style` 没传递时，则会应用此通用样式，`vertexs[item].style > vertexStyle`
-   **`edges`**
    -   `edges` 数组配置，参数传递详见类型
-   **`edgeStyle`**
    -   `edges` 的样式，当 `edgeStyle` 里面每一项的 `style` 没传递时，则会应用此通用样式，`edges[item].style > edgeStyle`

> 当 edges 回调函数绘制时，会接受所有的已经绘制后的`vertexs`集合，回调函数必须返回一个`edgeParams`数组，在`edgeParams`数组中的每一项中的`source`和`target`可以直接传递`vertex `

