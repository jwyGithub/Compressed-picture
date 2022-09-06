import Cell from '../cell/Cell';
import { Graph } from '../Graph';
import GraphLayout from './GraphLayout';
/**
 * Allows to compose multiple layouts into a single layout. The master layout
 * is the layout that handles move operations if another layout than the first
 * element in <layouts> should be used. The {@link aster} layout is not executed as
 * the code assumes that it is part of <layouts>.
 *
 * Example:
 * ```javascript
 * let first = new mxFastOrganicLayout(graph);
 * let second = new mxParallelEdgeLayout(graph);
 * let layout = new mxCompositeLayout(graph, [first, second], first);
 * layout.execute(graph.getDefaultParent());
 * ```
 *
 * Constructor: mxCompositeLayout
 *
 * Constructs a new layout using the given layouts. The graph instance is
 * required for creating the transaction that contains all layouts.
 *
 * Arguments:
 *
 * graph - Reference to the enclosing {@link Graph}.
 * layouts - Array of {@link GraphLayouts}.
 * master - Optional layout that handles moves. If no layout is given then
 * the first layout of the above array is used to handle moves.
 */
declare class CompositeLayout extends GraphLayout {
    constructor(graph: Graph, layouts: GraphLayout[], master?: GraphLayout);
    /**
     * Holds the array of {@link GraphLayouts} that this layout contains.
     */
    layouts: GraphLayout[];
    /**
     * Reference to the {@link GraphLayouts} that handles moves. If this is null
     * then the first layout in <layouts> is used.
     */
    master?: GraphLayout;
    /**
     * Implements {@link GraphLayout#moveCell} by calling move on {@link aster} or the first
     * layout in <layouts>.
     */
    moveCell(cell: Cell, x: number, y: number): void;
    /**
     * Implements {@link GraphLayout#execute} by executing all <layouts> in a
     * single transaction.
     */
    execute(parent: Cell): void;
}
export default CompositeLayout;
