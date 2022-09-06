import Image from '../image/ImageBox';
import CellState from '../cell/CellState';
import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
import Geometry from '../geometry/Geometry';
declare module '../Graph' {
    interface Graph {
        options: GraphFoldingOptions;
        collapseExpandResource: string;
        getCollapseExpandResource: () => string;
        isFoldingEnabled: () => boolean;
        getFoldableCells: (cells: CellArray, collapse: boolean) => CellArray | null;
        isCellFoldable: (cell: Cell, collapse: boolean) => boolean;
        getFoldingImage: (state: CellState) => Image | null;
        foldCells: (collapse: boolean, recurse?: boolean, cells?: CellArray | null, checkFoldable?: boolean, evt?: Event | null) => CellArray | null;
        cellsFolded: (cells: CellArray | null, collapse: boolean, recurse: boolean, checkFoldable?: boolean) => void;
        swapBounds: (cell: Cell, willCollapse: boolean) => void;
        updateAlternateBounds: (cell: Cell | null, geo: Geometry | null, willCollapse: boolean) => void;
    }
}
/**
 * GraphFoldingOptions
 *
 * @memberof GraphFolding
 * @typedef {object} GraphFoldingOptions
 * @property {boolean} foldingEnabled Specifies if folding (collapse and expand
 *                     via an image icon in the graph should be enabled).
 * @property {Image} collapsedImage Specifies the {@link Image} to indicate a collapsed state.
 *                     Default value is Client.imageBasePath + '/collapsed.gif'
 * @property {Image} expandedImage Specifies the {@link Image} to indicate a expanded state.
 *                     Default value is Client.imageBasePath + '/expanded.gif'
 * @property {collapseToPreferredSize} Specifies if the cell size should be changed to the preferred size when
 *                     a cell is first collapsed.
 */
declare type GraphFoldingOptions = {
    foldingEnabled: boolean;
    collapsedImage: Image;
    expandedImage: Image;
    collapseToPreferredSize: boolean;
};
export {};
