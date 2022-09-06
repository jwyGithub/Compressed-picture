import CellArray from '../cell/CellArray';
import type { UndoableChange } from '../../types';
import type { Graph } from '../Graph';
/**
 * @class SelectionChange
 * Action to change the current root in a view.
 */
declare class SelectionChange implements UndoableChange {
    constructor(graph: Graph, added?: CellArray, removed?: CellArray);
    graph: Graph;
    added: CellArray;
    removed: CellArray;
    /**
     * Changes the current root of the view.
     */
    execute(): void;
}
export default SelectionChange;
