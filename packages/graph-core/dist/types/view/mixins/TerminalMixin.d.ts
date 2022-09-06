import CellArray from '../cell/CellArray';
import Cell from '../cell/Cell';
declare module '../Graph' {
    interface Graph {
        isTerminalPointMovable: (cell: Cell, source: boolean) => boolean;
        getOpposites: (edges: CellArray, terminal: Cell | null, sources?: boolean, targets?: boolean) => CellArray;
    }
}
