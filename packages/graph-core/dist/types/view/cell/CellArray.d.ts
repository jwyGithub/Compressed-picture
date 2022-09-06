import Cell from './Cell';
declare class CellArray extends Array<Cell> {
    constructor(...items: Cell[]);
    concat(items: any): CellArray;
    splice(arg0: number, ...args: any): CellArray;
    slice(...args: any): CellArray;
    map(arg0: any, ...args: any): CellArray;
    filter(arg0: any, ...args: any): CellArray;
    /**
     * Returns the cells from the given array where the given filter function
     * returns true.
     */
    filterCells(filter: Function): CellArray;
    /**
     * Returns all opposite vertices wrt terminal for the given edges, only
     * returning sources and/or targets as specified. The result is returned
     * as an array of {@link Cell}.
     *
     * @param {Cell} terminal  that specifies the known end of the edges.
     * @param sources  Boolean that specifies if source terminals should be contained
     * in the result. Default is true.
     * @param targets  Boolean that specifies if target terminals should be contained
     * in the result. Default is true.
     */
    getOpposites(terminal: Cell, sources?: boolean, targets?: boolean): CellArray;
    /**
     * Returns the topmost cells of the hierarchy in an array that contains no
     * descendants for each {@link Cell} that it contains. Duplicates should be
     * removed in the cells array to improve performance.
     */
    getTopmostCells(): CellArray;
    /**
     * Returns an array that represents the set (no duplicates) of all parents
     * for the given array of cells.
     */
    getParents(): CellArray;
    /**
     * Returns an array of clones for the given array of {@link Cell}`.
     * Depending on the value of includeChildren, a deep clone is created for
     * each cell. Connections are restored based if the corresponding
     * cell is contained in the passed in array.
     *
     * @param includeChildren  Boolean indicating if the cells should be cloned
     * with all descendants.
     * @param mapping  Optional mapping for existing clones.
     */
    cloneCells(includeChildren?: boolean, mapping?: any): CellArray;
    /**
     * Inner helper method for cloning cells recursively.
     *
     * @private
     */
    cloneCellImpl(cell: Cell, mapping: any, includeChildren: boolean): Cell;
    /**
     * Inner helper method for restoring the connections in
     * a network of cloned cells.
     *
     * @private
     */
    restoreClone(clone: Cell, cell: Cell, mapping: any): void;
}
export default CellArray;
