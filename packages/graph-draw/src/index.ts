import { CellStyle, Cell, Geometry, Graph } from '@maxgraph/core';
import { isEmptyArray, isFunction } from '@graph-module/shared';

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
export type vertexParams<S> = {
    parent?: Cell | null;
    id?: string | null;
    value?: string | null;
    position?: [number, number] | null;
    size?: [number, number] | null;
    style?: CellStyle | null;
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
export type edgeParams<S> = {
    id?: string | null;
    parent?: Cell | null;
    value?: string | null;
    source?: string | Cell | null;
    target?: string | Cell | null;
    style?: CellStyle | null;
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
    vertexStyle?: CellStyle;
    edges?: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[]);
    edgeStyle?: CellStyle;
}

export type drawReturn<S> = {
    vertexs: { [key: string]: Cell };
    edges: { [key: string]: Cell };
    drawVertexs: <S>(vertexs: vertexParams<S> | vertexParams<S>[]) => {
        [key: string]: Cell;
    };
    drawEdges: (edges: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[])) => void;
};

/**
 * @description draw function type
 */
export type drawType = <S>(graph: Graph, config: drawConfig<S>) => drawReturn<S>;

/**
 * @description 绘制
 * @param {config} config
 * @return
 */
export const draw: drawType = function <S>(graph: Graph, config: drawConfig<S>): drawReturn<S> {
    const parent = graph.getDefaultParent();
    const { vertexs, vertexStyle, edges, edgeStyle } = config;

    const vertexsMap: { [key: string]: Cell } = {};
    const edgesMap: { [key: string]: Cell } = {};
    const drawVertexs = <S>(vertexs: vertexParams<S>[] | vertexParams<S>) => {
        const _vertexs = Array.isArray(vertexs) ? vertexs : [vertexs];
        _vertexs.forEach((item, idx) => {
            const vertexParams: Required<vertexParams<S>> = {
                parent: item.parent ?? parent,
                id: item.id ?? idx + '',
                value: item.value ?? '',
                position: item.position ?? [0, 0],
                size: item.size ?? [0, 0],
                relative: item.relative ?? false,
                style: item.style ?? Object.assign({}, vertexStyle, item.style),
                geometryClass: item.geometryClass ?? Geometry
            };
            const cell = graph.insertVertex(vertexParams);
            const id = vertexParams.id ?? idx + '';
            vertexsMap[id] = cell;
        });
        return vertexsMap;
    };

    const drawEdges = (edges: edgeParams<S>[] | ((vertesx: { [key: string]: Cell }) => edgeParams<S>[])) => {
        let _edges: edgeParams<S>[] = isFunction(edges) ? (edges as Function)(vertexsMap) : edges;

        _edges.forEach((item, idx) => {
            item.source = item.source ?? '';
            item.target = item.target ?? '';
            const edgeParams: Required<edgeParams<S>> = {
                id: item.id ?? idx + '',
                parent: item.parent ?? parent,
                value: item.value ?? '',
                source: typeof item.source === 'string' ? vertexsMap[item.source] : item.source,
                target: typeof item.target === 'string' ? vertexsMap[item.target] : item.target,
                style: item.style ?? Object.assign({}, edgeStyle, item.style)
            };
            const cell = graph.insertEdge(edgeParams);
            const id = item.id ?? idx + '';
            edgesMap[id] = cell;
        });
    };

    graph.batchUpdate(() => {
        vertexs && !isEmptyArray(vertexs) && drawVertexs<S>(vertexs);
        edges && drawEdges(edges);
    });

    return {
        vertexs: vertexsMap,
        edges: edgesMap,
        drawVertexs,
        drawEdges
    };
};

