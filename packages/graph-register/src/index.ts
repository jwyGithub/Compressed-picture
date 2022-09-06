import { AbstractCanvas2D, CellRenderer, Rectangle, RectangleShape, Shape, StencilShape, type CellStateStyle, type Graph } from '@graph-module/core';

export type registerStyleConfig<S extends string> = CellStateStyle<S>;
/**
 * @public
 * @description 注册全局样式
 * @param graph Graph
 * @param styleName style name
 * @param config registerStyleConfig
 * @return Graph
 */
export const registerStyle = <S extends string>(graph: Graph, styleName: string, config: registerStyleConfig<S>): Graph => {
    graph.getStylesheet().putCellStyle(styleName, config);
    return graph;
};

export type registerShapeCallback = (c: AbstractCanvas2D, x: number, y: number, w: number, h: number, isForeground?: boolean) => void;

/**
 * @public
 * @description 注册全局形状
 * @param shapeName shape名称
 * @param callback
 */
export const registerShape = (shapeName: string, callback?: registerShapeCallback): void => {
    CellRenderer.registerShape(
        shapeName,
        // @ts-ignore
        class extends CylinderShape {
            constructor(bounds: Rectangle, fill: string, stroke: string, strokeWidth?: number | undefined) {
                super(bounds, fill, stroke, strokeWidth);
            }
            redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number, isForeground?: boolean) {
                callback && callback(c, x, y, w, h, isForeground);
            }
        }
    );
};

