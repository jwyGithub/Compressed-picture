import CellArray from '../cell/CellArray';
declare module '../Graph' {
    interface Graph {
        orderCells: (back: boolean, cells?: CellArray) => CellArray;
        cellsOrdered: (cells: CellArray, back: boolean) => void;
    }
}
