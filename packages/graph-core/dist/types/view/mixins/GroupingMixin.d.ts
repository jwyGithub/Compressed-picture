import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
import Rectangle from '../geometry/Rectangle';
declare module '../Graph' {
    interface Graph {
        groupCells: (group: Cell, border: number, cells?: CellArray | null) => Cell;
        getCellsForGroup: (cells: CellArray) => CellArray;
        getBoundsForGroup: (group: Cell, children: CellArray, border: number | null) => Rectangle | null;
        createGroupCell: (cells: CellArray) => Cell;
        ungroupCells: (cells?: CellArray | null) => CellArray;
        getCellsForUngroup: () => CellArray;
        removeCellsAfterUngroup: (cells: CellArray) => void;
        removeCellsFromParent: (cells?: CellArray | null) => CellArray;
        updateGroupBounds: (cells: CellArray, border?: number, moveGroup?: boolean, topBorder?: number, rightBorder?: number, bottomBorder?: number, leftBorder?: number) => CellArray;
        enterGroup: (cell: Cell) => void;
        exitGroup: () => void;
    }
}
