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
class CompositeLayout extends GraphLayout {
    constructor(graph, layouts, master) {
        super(graph);
        this.layouts = layouts;
        this.master = master;
    }
    /**
     * Implements {@link GraphLayout#moveCell} by calling move on {@link aster} or the first
     * layout in <layouts>.
     */
    moveCell(cell, x, y) {
        if (this.master != null) {
            this.master.moveCell.apply(this.master, [cell, x, y]);
        }
        else {
            this.layouts[0].moveCell.apply(this.layouts[0], [cell, x, y]);
        }
    }
    /**
     * Implements {@link GraphLayout#execute} by executing all <layouts> in a
     * single transaction.
     */
    execute(parent) {
        const model = this.graph.getDataModel();
        model.beginUpdate();
        try {
            for (let i = 0; i < this.layouts.length; i += 1) {
                this.layouts[i].execute.apply(this.layouts[i], [parent]);
            }
        }
        finally {
            model.endUpdate();
        }
    }
}
export default CompositeLayout;
