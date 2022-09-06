# Draw

drawing in container

-   **type**

    ```typescript
    /**
     * @description 绘制配置选项
     * @param {vertex} vertex cell -> vertex
     * @param {vertexStyle} vertex 的通用样式
     * @param {edge} edge cell -> edge
     * @param {edgeStyle} edge 的通用样式
     */
    interface drawConfig<S> {
        vertexs?: vertexParams<S>[];
        vertexStyle?: CellStyle<S>;
        edges?: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[]);
        edgeStyle?: CellStyle<S>;
    }

    /**
     * @description draw function type
     */
    type drawType = <S>(graph: Graph, config: drawConfig<S>) => drawReturn<S>;
    /**
     * @description 绘制
     * @param {config} config
     * @return
     */
    declare const draw: drawType;
    ```

## draw vertex

-   **type**

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
    type vertexParams<S> = {
        parent?: Cell | null;
        id?: string | null;
        value?: string | null;
        position?: [number, number] | null;
        size?: [number, number] | null;
        style?: CellStyle<S> | null;
        relative?: boolean | null;
        geometryClass?: typeof Geometry;
    };
    ```

-   **example**

    -   basic drawing

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入绘制函数
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [100, 100]
            }
        ]
    });
    ```

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906103034.png)

    -   set style

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入绘制函数
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [100, 100],
                style: {
                    //  设置图形样式
                    shape: 'cloud',
                    // 边框颜色
                    strokeColor: 'red',
                    // 填充颜色
                    fillColor: 'blue',
                    // 字体颜色
                    fontColor: '#fff',
                    // 字体样式
                    fontFamily: '宋体'
                }
            }
        ]
    });
    ```

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906103122.png)

    -   set general style

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入绘制函数
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [100, 100]
            },
            {
                id: 'vertex2',
                value: 'vertex2',
                size: [100, 100],
                position: [300, 100]
            }
        ],
        vertexStyle: {
            //  设置图形样式
            shape: 'doubleEllipse',
            // 边框颜色
            strokeColor: '#fff',
            // 填充颜色
            fillColor: '#ccc',
            // 字体颜色
            fontColor: '#fff',
            // 字体样式
            fontFamily: '宋体'
        }
    });
    ```

    > `vertexs[item].style > config.vertexStyle`

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906103650.png)

## draw edge

-   **type**

    ```typescript
    /**
     * @description edge 参数选项
     * @param { parent } 要添加的父级
     * @param { value } edge 值
     * @param { source } 连接点的开始cell
     * @param { target } 连接点的结束cell
     * @param { style } edge的样式
     */
    type edgeParams<S> = {
        id?: string | null;
        parent?: Cell | null;
        value?: string | null;
        source?: string | Cell | null;
        target?: string | Cell | null;
        style?: CellStyle<S> | null;
    };
    ```

-   **example**

    -   array drawing

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入绘制函数
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [100, 100]
            },
            {
                id: 'vertex2',
                value: 'vertex2',
                size: [100, 100],
                position: [300, 100]
            }
        ],
        edges: [
            {
                id: 'edge1',
                source: 'vertex1',
                target: 'vertex2'
            }
        ]
    });
    ```

    ![](https://cdn.jsdelivr.net/gh/jwyGithub/images/graph-module/20220906104207.png)

    -   draw by callback function

    ```typescript
    // 引入核心包
    import { Graph } from '@graph-module/core';
    // 引入绘制函数
    import { draw } from '@graph-module/draw';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 绘制
    draw(graph, {
        vertexs: [
            {
                id: 'vertex1',
                value: 'vertex1',
                size: [100, 100],
                position: [100, 100]
            },
            {
                id: 'vertex2',
                value: 'vertex2',
                size: [100, 100],
                position: [300, 100]
            }
        ],
        edges: vertesx => {
            return [
                {
                    id: 'edge1',
                    source: vertesx.vertex1,
                    target: vertesx.vertex2
                }
            ];
        }
    });
    ```

### Tips

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

