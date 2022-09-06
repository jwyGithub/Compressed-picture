import Geometry from '../geometry/Geometry';
import CellOverlay from './CellOverlay';
import Point from '../geometry/Point';
import CellArray from './CellArray';
import ObjectCodec from '../../serialization/ObjectCodec';
import Codec from '../../serialization/Codec';
import type { CellStyle, FilterFunction } from '../../types';
/**
 * Cells are the elements of the graph model. They represent the state
 * of the groups, vertices and edges in a graph.
 *
 * ### Custom attributes
 * For custom attributes we recommend using an XML node as the value of a cell.
 * The following code can be used to create a cell with an XML node as the value:
 * ```javascript
 * var doc = mxUtils.createXmlDocument();
 * var node = doc.createElement('MyNode')
 * node.setAttribute('label', 'MyLabel');
 * node.setAttribute('attribute1', 'value1');
 * graph.insertVertex(graph.getDefaultParent(), null, node, 40, 40, 80, 30);
 * ```
 *
 * For the label to work, {@link graph.convertValueToString} and
 * {@link graph.cellLabelChanged} should be overridden as follows:
 *
 * ```javascript
 * graph.convertValueToString(cell)
 * {
 *   if (mxUtils.isNode(cell.value))
 *   {
 *     return cell.getAttribute('label', '')
 *   }
 * };
 *
 * var cellLabelChanged = graph.cellLabelChanged;
 * graph.cellLabelChanged(cell, newValue, autoSize)
 * {
 *   if (mxUtils.isNode(cell.value))
 *   {
 *     // Clones the value for correct undo/redo
 *     var elt = cell.value.cloneNode(true);
 *     elt.setAttribute('label', newValue);
 *     newValue = elt;
 *   }
 *
 *   cellLabelChanged.apply(this, arguments);
 * };
 * ```
 * @class Cell
 */
export declare class Cell {
    constructor(value?: any, geometry?: Geometry | null, style?: CellStyle);
    getChildren(): CellArray;
    invalidating: boolean;
    onInit: (() => void) | null;
    overlays: CellOverlay[];
    /**
     * Holds the Id. Default is null.
     */
    id: string | null;
    /**
     * Holds the user object. Default is null.
     */
    value: any;
    /**
     * Holds the {@link Geometry}. Default is null.
     */
    geometry: Geometry | null;
    /**
     * Holds the style as a string of the form [(stylename|key=value);]. Default is
     * null.
     */
    style: CellStyle;
    /**
     * Specifies whether the cell is a vertex. Default is false.
     */
    vertex: boolean;
    /**
     * Specifies whether the cell is an edge. Default is false.
     */
    edge: boolean;
    /**
     * Specifies whether the cell is connectable. Default is true.
     */
    connectable: boolean;
    /**
     * Specifies whether the cell is visible. Default is true.
     */
    visible: boolean;
    /**
     * Specifies whether the cell is collapsed. Default is false.
     */
    collapsed: boolean;
    /**
     * Reference to the parent cell.
     */
    parent: Cell | null;
    /**
     * Reference to the source terminal.
     */
    source: Cell | null;
    /**
     * Reference to the target terminal.
     */
    target: Cell | null;
    /**
     * Holds the child cells.
     */
    children: CellArray;
    /**
     * Holds the edges.
     */
    edges: CellArray;
    /**
     * List of members that should not be cloned inside <clone>. This field is
     * passed to {@link Utils#clone} and is not made persistent in <CellCodec>.
     * This is not a convention for all classes, it is only used in this class
     * to mark transient fields since transient modifiers are not supported by
     * the language.
     */
    mxTransient: string[];
    /**
     * Returns the Id of the cell as a string.
     */
    getId(): string | null;
    /**
     * Sets the Id of the cell to the given string.
     */
    setId(id: string): void;
    /**
     * Returns the user object of the cell. The user
     * object is stored in <value>.
     */
    getValue(): any;
    /**
     * Sets the user object of the cell. The user object
     * is stored in <value>.
     */
    setValue(value: any): void;
    /**
     * Changes the user object after an in-place edit
     * and returns the previous value. This implementation
     * replaces the user object with the given value and
     * returns the old user object.
     */
    valueChanged(newValue: any): any;
    /**
     * Returns the {@link Geometry} that describes the <geometry>.
     */
    getGeometry(): Geometry | null;
    /**
     * Sets the {@link Geometry} to be used as the <geometry>.
     */
    setGeometry(geometry: Geometry | null): void;
    /**
     * Returns a string that describes the <style>.
     */
    getStyle(): CellStyle<string>;
    /**
     * Sets the string to be used as the <style>.
     */
    setStyle(style: CellStyle): void;
    /**
     * Returns true if the cell is a vertex.
     */
    isVertex(): boolean;
    /**
     * Specifies if the cell is a vertex. This should only be assigned at
     * construction of the cell and not be changed during its lifecycle.
     *
     * @param vertex Boolean that specifies if the cell is a vertex.
     */
    setVertex(vertex: boolean): void;
    /**
     * Returns true if the cell is an edge.
     */
    isEdge(): boolean;
    /**
     * Specifies if the cell is an edge. This should only be assigned at
     * construction of the cell and not be changed during its lifecycle.
     *
     * @param edge Boolean that specifies if the cell is an edge.
     */
    setEdge(edge: boolean): void;
    /**
     * Returns true if the cell is connectable.
     */
    isConnectable(): boolean;
    /**
     * Sets the connectable state.
     *
     * @param connectable Boolean that specifies the new connectable state.
     */
    setConnectable(connectable: boolean): void;
    /**
     * Returns true if the cell is visibile.
     */
    isVisible(): boolean;
    /**
     * Specifies if the cell is visible.
     *
     * @param visible Boolean that specifies the new visible state.
     */
    setVisible(visible: boolean): void;
    /**
     * Returns true if the cell is collapsed.
     */
    isCollapsed(): boolean;
    /**
     * Sets the collapsed state.
     *
     * @param collapsed Boolean that specifies the new collapsed state.
     */
    setCollapsed(collapsed: boolean): void;
    /**
     * Returns the cell's parent.
     */
    getParent(): Cell | null;
    /**
     * Sets the parent cell.
     *
     * @param parent<Cell> that represents the new parent.
     */
    setParent(parent: Cell | null): void;
    /**
     * Returns the source or target terminal.
     *
     * @param source Boolean that specifies if the source terminal should be
     * returned.
     */
    getTerminal(source?: boolean): Cell | null;
    /**
     * Sets the source or target terminal and returns the new terminal.
     *
     * @param {Cell} terminal     mxCell that represents the new source or target terminal.
     * @param {boolean} isSource  boolean that specifies if the source or target terminal
     * should be set.
     */
    setTerminal(terminal: Cell | null, isSource: boolean): Cell | null;
    /**
     * Returns the number of child cells.
     */
    getChildCount(): number;
    /**
     * Returns the index of the specified child in the child array.
     *
     * @param childChild whose index should be returned.
     */
    getIndex(child: Cell | null): number;
    /**
     * Returns the child at the specified index.
     *
     * @param indexInteger that specifies the child to be returned.
     */
    getChildAt(index: number): Cell;
    /**
     * Inserts the specified child into the child array at the specified index
     * and updates the parent reference of the child. If not childIndex is
     * specified then the child is appended to the child array. Returns the
     * inserted child.
     *
     * @param child<Cell> to be inserted or appended to the child array.
     * @param indexOptional integer that specifies the index at which the child
     * should be inserted into the child array.
     */
    insert(child: Cell, index?: number): Cell | null;
    /**
     * Removes the child at the specified index from the child array and
     * returns the child that was removed. Will remove the parent reference of
     * the child.
     *
     * @param indexInteger that specifies the index of the child to be
     * removed.
     */
    remove(index: number): Cell | null;
    /**
     * Removes the cell from its parent.
     */
    removeFromParent(): void;
    /**
     * Returns the number of edges in the edge array.
     */
    getEdgeCount(): number;
    /**
     * Returns the index of the specified edge in <edges>.
     *
     * @param edge<Cell> whose index in <edges> should be returned.
     */
    getEdgeIndex(edge: Cell): number;
    /**
     * Returns the edge at the specified index in <edges>.
     *
     * @param indexInteger that specifies the index of the edge to be returned.
     */
    getEdgeAt(index: number): Cell;
    /**
     * Inserts the specified edge into the edge array and returns the edge.
     * Will update the respective terminal reference of the edge.
     *
     * @param edge              <Cell> to be inserted into the edge array.
     * @param isOutgoing Boolean that specifies if the edge is outgoing.
     */
    insertEdge(edge: Cell, isOutgoing?: boolean): Cell;
    /**
     * Removes the specified edge from the edge array and returns the edge.
     * Will remove the respective terminal reference from the edge.
     *
     * @param edge<Cell> to be removed from the edge array.
     * @param isOutgoing Boolean that specifies if the edge is outgoing.
     */
    removeEdge(edge: Cell | null, isOutgoing?: boolean): Cell | null;
    /**
     * Removes the edge from its source or target terminal.
     *
     * @param isSource Boolean that specifies if the edge should be removed from its source or target terminal.
     */
    removeFromTerminal(isSource: boolean): void;
    /**
     * Returns true if the user object is an XML node that contains the given
     * attribute.
     *
     * @param nameName nameName of the attribute.
     */
    hasAttribute(name: string): boolean;
    /**
     * Returns the specified attribute from the user object if it is an XML
     * node.
     *
     * @param nameName              of the attribute whose value should be returned.
     * @param defaultValueOptional  default value to use if the attribute has no
     * value.
     */
    getAttribute(name: string, defaultValue?: any): any;
    /**
     * Sets the specified attribute on the user object if it is an XML node.
     *
     * @param nameName    of the attribute whose value should be set.
     * @param valueNew    value of the attribute.
     */
    setAttribute(name: string, value: any): void;
    /**
     * Returns a clone of the cell. Uses <cloneValue> to clone
     * the user object. All fields in {@link Transient} are ignored
     * during the cloning.
     */
    clone(): Cell;
    /**
     * Returns a clone of the cell's user object.
     */
    cloneValue(): any;
    /**
     * Returns the nearest common ancestor for the specified cells to `this`.
     *
     * @param {Cell} cell2  that specifies the second cell in the tree.
     */
    getNearestCommonAncestor(cell2: Cell): Cell | null;
    /**
     * Returns true if the given parent is an ancestor of the given child. Note
     * returns true if child == parent.
     *
     * @param {Cell} child  that specifies the child.
     */
    isAncestor(child: Cell | null): boolean;
    /**
     * Returns the child vertices of the given parent.
     */
    getChildVertices(): CellArray;
    /**
     * Returns the child edges of the given parent.
     */
    getChildEdges(): CellArray;
    /**
     * Returns the children of the given cell that are vertices and/or edges
     * depending on the arguments.
     *
     * @param vertices  Boolean indicating if child vertices should be returned.
     * Default is false.
     * @param edges  Boolean indicating if child edges should be returned.
     * Default is false.
     */
    getChildCells(vertices?: boolean, edges?: boolean): CellArray;
    /**
     * Returns the number of incoming or outgoing edges, ignoring the given
     * edge.
     *
     * @param outgoing  Boolean that specifies if the number of outgoing or
     * incoming edges should be returned.
     * @param {Cell} ignoredEdge  that represents an edge to be ignored.
     */
    getDirectedEdgeCount(outgoing: boolean, ignoredEdge?: Cell | null): number;
    /**
     * Returns all edges of the given cell without loops.
     */
    getConnections(): CellArray;
    /**
     * Returns the incoming edges of the given cell without loops.
     */
    getIncomingEdges(): CellArray;
    /**
     * Returns the outgoing edges of the given cell without loops.
     */
    getOutgoingEdges(): CellArray;
    /**
     * Returns all distinct edges connected to this cell as a new array of
     * {@link Cell}. If at least one of incoming or outgoing is true, then loops
     * are ignored, otherwise if both are false, then all edges connected to
     * the given cell are returned including loops.
     *
     * @param incoming  Optional boolean that specifies if incoming edges should be
     * returned. Default is true.
     * @param outgoing  Optional boolean that specifies if outgoing edges should be
     * returned. Default is true.
     * @param includeLoops  Optional boolean that specifies if loops should be returned.
     * Default is true.
     */
    getEdges(incoming?: boolean, outgoing?: boolean, includeLoops?: boolean): CellArray;
    /**
     * Returns the absolute, accumulated origin for the children inside the
     * given parent as an {@link Point}.
     */
    getOrigin(): Point;
    /**
     * Returns all descendants of the given cell and the cell itself in an array.
     */
    getDescendants(): CellArray;
    /**
     * Visits all cells recursively and applies the specified filter function
     * to each cell. If the function returns true then the cell is added
     * to the resulting array. The parent and result paramters are optional.
     * If parent is not specified then the recursion starts at {@link root}.
     *
     * Example:
     * The following example extracts all vertices from a given model:
     * ```javascript
     * var filter(cell)
     * {
     * 	return model.isVertex(cell);
     * }
     * var vertices = model.filterDescendants(filter);
     * ```
     *
     * @param filter  JavaScript function that takes an {@link Cell} as an argument
     * and returns a boolean.
     */
    filterDescendants(filter: FilterFunction | null): CellArray;
    /**
     * Returns the root of the model or the topmost parent of the given cell.
     */
    getRoot(): Cell;
}
/**
 * Codec for <Cell>s. This class is created and registered
 * dynamically at load time and used implicitly via <Codec>
 * and the <CodecRegistry>.
 *
 * Transient Fields:
 *
 * - children
 * - edges
 * - overlays
 * - mxTransient
 *
 * Reference Fields:
 *
 * - parent
 * - source
 * - target
 *
 * Transient fields can be added using the following code:
 *
 * CodecRegistry.getCodec(mxCell).exclude.push('name_of_field');
 *
 * To subclass <Cell>, replace the template and add an alias as
 * follows.
 *
 * ```javascript
 * function CustomCell(value, geometry, style)
 * {
 *   mxCell.apply(this, arguments);
 * }
 *
 * mxUtils.extend(CustomCell, mxCell);
 *
 * CodecRegistry.getCodec(mxCell).template = new CustomCell();
 * CodecRegistry.addAlias('CustomCell', 'mxCell');
 * ```
 */
export declare class CellCodec extends ObjectCodec {
    constructor();
    /**
     * Returns true since this is a cell codec.
     */
    isCellCodec(): boolean;
    /**
     * Overidden to disable conversion of value to number.
     */
    isNumericAttribute(dec: Codec, attr: Element, obj: any): boolean;
    /**
     * Excludes user objects that are XML nodes.
     */
    isExcluded(obj: any, attr: string, value: Element, isWrite: boolean): boolean;
    /**
     * Encodes an <Cell> and wraps the XML up inside the
     * XML of the user object (inversion).
     */
    afterEncode(enc: Codec, obj: Cell, node: Element): Element;
    /**
     * Decodes an <Cell> and uses the enclosing XML node as
     * the user object for the cell (inversion).
     */
    beforeDecode(dec: Codec, node: Element, obj: Cell): Element | null;
}
export default Cell;
