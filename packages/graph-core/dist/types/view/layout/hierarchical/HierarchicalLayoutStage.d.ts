/**
 * The specific layout interface for hierarchical layouts. It adds a
 * <code>run</code> method with a parameter for the hierarchical layout model
 * that is shared between the layout stages.
 *
 * Constructor: mxHierarchicalLayoutStage
 *
 * Constructs a new hierarchical layout stage.
 */
declare class HierarchicalLayoutStage {
    constructor();
    /**
     * Takes the graph detail and configuration information within the facade
     * and creates the resulting laid out graph within that facade for further
     * use.
     */
    execute(parent: any): void;
}
export default HierarchicalLayoutStage;
