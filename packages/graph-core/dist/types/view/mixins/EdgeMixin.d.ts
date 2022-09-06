import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
import type { CellStyle } from '../../types';
declare module '../Graph' {
    interface Graph {
        resetEdgesOnResize: boolean;
        resetEdgesOnMove: false;
        resetEdgesOnConnect: boolean;
        connectableEdges: boolean;
        allowDanglingEdges: boolean;
        cloneInvalidEdges: boolean;
        alternateEdgeStyle: CellStyle;
        edgeLabelsMovable: boolean;
        isResetEdgesOnMove: () => boolean;
        isResetEdgesOnConnect: () => boolean;
        isResetEdgesOnResize: () => boolean;
        isEdgeLabelsMovable: () => boolean;
        setEdgeLabelsMovable: (value: boolean) => void;
        setAllowDanglingEdges: (value: boolean) => void;
        isAllowDanglingEdges: () => boolean;
        setConnectableEdges: (value: boolean) => void;
        isConnectableEdges: () => boolean;
        setCloneInvalidEdges: (value: boolean) => void;
        isCloneInvalidEdges: () => boolean;
        flipEdge: (edge: Cell) => Cell;
        splitEdge: (edge: Cell, cells: CellArray, newEdge: Cell | null, dx?: number, dy?: number, x?: number, y?: number, parent?: Cell | null) => Cell;
        insertEdge: (...args: any[]) => Cell;
        createEdge: (parent: Cell | null, id: string, value: any, source: Cell | null, target: Cell | null, style: CellStyle) => Cell;
        addEdge: (edge: Cell, parent: Cell | null, source: Cell | null, target: Cell | null, index?: number | null) => Cell;
        addAllEdges: (cells: CellArray) => CellArray;
        getAllEdges: (cells: CellArray | null) => CellArray;
        getIncomingEdges: (cell: Cell, parent: Cell | null) => CellArray;
        getOutgoingEdges: (cell: Cell, parent: Cell | null) => CellArray;
        getEdges: (cell: Cell, parent?: Cell | null, incoming?: boolean, outgoing?: boolean, includeLoops?: boolean, recurse?: boolean) => CellArray;
        getChildEdges: (parent: Cell) => CellArray;
        getEdgesBetween: (source: Cell, target: Cell, directed?: boolean) => CellArray;
        resetEdges: (cells: CellArray) => void;
        resetEdge: (edge: Cell) => Cell;
    }
}
