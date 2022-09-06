import Cell from '../cell/Cell';
import Geometry from '../geometry/Geometry';
import CellArray from '../cell/CellArray';
import type { CellStyle } from '../../types';
declare module '../Graph' {
    interface Graph {
        vertexLabelsMovable: boolean;
        allowNegativeCoordinates: boolean;
        isAllowNegativeCoordinates: () => boolean;
        setAllowNegativeCoordinates: (value: boolean) => void;
        insertVertex: (...args: any[]) => Cell;
        createVertex: (parent: Cell, id: string, value: any, x: number, y: number, width: number, height: number, style: CellStyle, relative: boolean, geometryClass: typeof Geometry) => Cell;
        getChildVertices: (parent?: Cell | null) => CellArray;
        isVertexLabelsMovable: () => boolean;
        setVertexLabelsMovable: (value: boolean) => void;
    }
}
