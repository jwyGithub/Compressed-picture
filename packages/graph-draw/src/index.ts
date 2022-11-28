import { CellStyle, Cell, Geometry, Graph, ShapeValue } from '@maxgraph/core';
import { isEmptyArray, isFunction } from '@graph/shared';

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
export type vertexParams = {
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
export type edgeParams = {
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
export interface IdrawConfig {
    vertexs?: vertexParams[];
    vertexStyle?: CellStyle;
    edges?: edgeParams[] | ((vertesx: { [key: string]: Cell }) => edgeParams[]);
    edgeStyle?: CellStyle;
}

export type drawReturn = {
    vertexs: { [key: string]: Cell };
    edges: { [key: string]: Cell };
    drawVertexs: (vertexs: vertexParams | vertexParams[]) => {
        [key: string]: Cell;
    };
    drawEdges: (edges: edgeParams[] | ((vertesx: { [key: string]: Cell }) => edgeParams[])) => void;
};

/**
 * @description draw function type
 */
export type drawType = (graph: Graph, config: IdrawConfig) => drawReturn;

/**
 * @description 绘制
 * @param {config} config
 * @return 
 * @example
 * draw(graph, {
       vertexs: [
            {
                id: '',
                value: '',
                position: [0, 0],
                size: [50, 50],
                style: {
                    shape: 'cloud'
                }
            }
        ]
    });
 */
export const draw: drawType = function (graph: Graph, config: IdrawConfig): drawReturn {
    const parent = graph.getDefaultParent();
    const { vertexs, vertexStyle, edges, edgeStyle } = config;

    const vertexsMap: { [key: string]: Cell } = {};
    const edgesMap: { [key: string]: Cell } = {};
    const drawVertexs = (vertexs: vertexParams[] | vertexParams) => {
        const _vertexs = Array.isArray(vertexs) ? vertexs : [vertexs];
        _vertexs.forEach((item, idx) => {
            const vertexParams: Required<vertexParams> = {
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

    const drawEdges = (edges: edgeParams[] | ((vertesx: { [key: string]: Cell }) => edgeParams[])) => {
        let _edges: edgeParams[] = isFunction(edges) ? (edges as Function)(vertexsMap) : edges;

        _edges.forEach((item, idx) => {
            item.source = item.source ?? '';
            item.target = item.target ?? '';
            const edgeParams: Required<edgeParams> = {
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
        vertexs && !isEmptyArray(vertexs) && drawVertexs(vertexs);
        edges && drawEdges(edges);
    });

    return {
        vertexs: vertexsMap,
        edges: edgesMap,
        drawVertexs,
        drawEdges
    };
};

