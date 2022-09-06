import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
import Rectangle from '../geometry/Rectangle';
import GraphSelectionModel from '../GraphSelectionModel';
declare module '../Graph' {
    interface Graph {
        cells: CellArray;
        doneResource: string;
        updatingSelectionResource: string;
        singleSelection: boolean;
        selectionModel: any | null;
        getSelectionModel: () => GraphSelectionModel;
        setSelectionModel: (selectionModel: GraphSelectionModel) => void;
        isCellSelected: (cell: Cell) => boolean;
        isSelectionEmpty: () => boolean;
        clearSelection: () => void;
        getSelectionCount: () => number;
        getSelectionCell: () => Cell;
        getSelectionCells: () => CellArray;
        setSelectionCell: (cell: Cell | null) => void;
        setSelectionCells: (cells: CellArray) => void;
        addSelectionCell: (cell: Cell) => void;
        addSelectionCells: (cells: CellArray) => void;
        removeSelectionCell: (cell: Cell) => void;
        removeSelectionCells: (cells: CellArray) => void;
        selectRegion: (rect: Rectangle, evt: MouseEvent) => CellArray;
        selectNextCell: () => void;
        selectPreviousCell: () => void;
        selectParentCell: () => void;
        selectChildCell: () => void;
        selectCell: (isNext?: boolean, isParent?: boolean, isChild?: boolean) => void;
        selectAll: (parent?: Cell | null, descendants?: boolean) => void;
        selectVertices: (parent?: Cell | null, selectGroups?: boolean) => void;
        selectEdges: (parent?: Cell | null) => void;
        selectCells: (vertices: boolean, edges: boolean, parent?: Cell | null, selectGroups?: boolean) => void;
        selectCellForEvent: (cell: Cell, evt: MouseEvent) => void;
        selectCellsForEvent: (cells: CellArray, evt: MouseEvent) => void;
        isSiblingSelected: (cell: Cell) => boolean;
        getSelectionCellsForChanges: (changes: any[], ignoreFn?: Function | null) => CellArray;
        updateSelection: () => void;
    }
}
