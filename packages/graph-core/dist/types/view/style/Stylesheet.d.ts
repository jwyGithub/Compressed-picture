import ObjectCodec from '../../serialization/ObjectCodec';
import Codec from '../../serialization/Codec';
import type { CellStateStyle, CellStyle } from '../../types';
/**
 * @class Stylesheet
 *
 * Defines the appearance of the cells in a graph. See {@link putCellStyle} for an
 * example of creating a new cell style. It is recommended to use objects, not
 * arrays for holding cell styles. Existing styles can be cloned using
 * {@link clone} and turned into a string for debugging using
 * {@link toString}.
 *
 * ### Default Styles
 *
 * The stylesheet contains two built-in styles, which are used if no style is
 * defined for a cell:
 *
 * - defaultVertex Default style for vertices
 * - defaultEdge Default style for edges
 *
 * ### Example
 *
 * ```javascript
 * var vertexStyle = stylesheet.getDefaultVertexStyle();
 * vertexStyle.rounded = true;
 * var edgeStyle = stylesheet.getDefaultEdgeStyle();
 * edgeStyle.edge = mxEdgeStyle.EntityRelation;
 * ```
 *
 * Modifies the built-in default styles.
 *
 * To avoid the default style for a cell, add a leading semicolon
 * to the style definition, eg.
 *
 * ```javascript
 * ;shadow=1
 * ```
 *
 * ### Removing keys
 *
 * For removing a key in a cell style of the form [stylename;|key=value;] the
 * special value none can be used, eg. highlight;fillColor=none
 *
 * See also the helper methods in mxUtils to modify strings of this format,
 * namely {@link setStyle}, {@link indexOfStylename},
 * {@link addStylename}, {@link removeStylename},
 * {@link removeAllStylenames} and {@link setStyleFlag}.
 *
 * Constructor: mxStylesheet
 *
 * Constructs a new stylesheet and assigns default styles.
 */
export declare class Stylesheet {
    constructor();
    /**
     * Maps from names to cell styles. Each cell style is a map of key,
     * value pairs.
     */
    styles: Map<string, CellStateStyle>;
    /**
     * Creates and returns the default vertex style.
     */
    createDefaultVertexStyle(): CellStateStyle<string>;
    /**
     * Creates and returns the default edge style.
     */
    createDefaultEdgeStyle(): CellStateStyle<string>;
    /**
     * Sets the default style for vertices using defaultVertex as the
     * stylename.
     * @param style Key, value pairs that define the style.
     */
    putDefaultVertexStyle(style: CellStateStyle): void;
    /**
     * Sets the default style for edges using defaultEdge as the stylename.
     */
    putDefaultEdgeStyle(style: CellStateStyle): void;
    /**
     * Returns the default style for vertices.
     */
    getDefaultVertexStyle(): CellStateStyle<string> | undefined;
    /**
     * Sets the default style for edges.
     */
    getDefaultEdgeStyle(): CellStateStyle<string> | undefined;
    /**
     * Stores the given map of key, value pairs under the given name in
     * {@link styles}.
     *
     * Example:
     *
     * The following example adds a new style called 'rounded' into an
     * existing stylesheet:
     *
     * ```javascript
     * var style = new Object();
     * style.shape = mxConstants.SHAPE_RECTANGLE;
     * style.perimiter = mxPerimeter.RectanglePerimeter;
     * style.rounded = true;
     * graph.getStylesheet().putCellStyle('rounded', style);
     * ```
     *
     * In the above example, the new style is an object. The possible keys of
     * the object are all the constants in {@link mxConstants} that start with STYLE
     * and the values are either JavaScript objects, such as
     * {@link Perimeter.RightAngleRectanglePerimeter} (which is in fact a function)
     * or expressions, such as true. Note that not all keys will be
     * interpreted by all shapes (eg. the line shape ignores the fill color).
     * The final call to this method associates the style with a name in the
     * stylesheet. The style is used in a cell with the following code:
     *
     * ```javascript
     * model.setStyle(cell, 'rounded');
     * ```
     *
     * @param name Name for the style to be stored.
     * @param style Key, value pairs that define the style.
     */
    putCellStyle(name: string, style: CellStateStyle): void;
    /**
     * Returns the cell style for the specified baseStyleNames or the given
     * defaultStyle if no style can be found for the given baseStyleNames.
     *
     * @param cellStyle An object that represents the style.
     * @param defaultStyle Default style to be returned if no style can be found.
     */
    getCellStyle(cellStyle: CellStyle, defaultStyle: CellStateStyle): CellStateStyle<string>;
}
/**
 * Codec for {@link Stylesheet}s. This class is created and registered
 * dynamically at load time and used implicitly via <Codec>
 * and the <CodecRegistry>.
 */
export declare class StylesheetCodec extends ObjectCodec {
    constructor();
    /**
     * Static global switch that specifies if the use of eval is allowed for
     * evaluating text content. Default is true. Set this to false if stylesheets
     * may contain user input.
     */
    static allowEval: boolean;
    /**
     * Encodes a stylesheet. See <decode> for a description of the
     * format.
     */
    encode(enc: Codec, obj: any): Element;
    /**
     * Returns the string for encoding the given value.
     */
    getStringValue(key: string, value: any): string | null;
    /**
     * Reads a sequence of the following child nodes
     * and attributes:
     *
     * Child Nodes:
     *
     * add - Adds a new style.
     *
     * Attributes:
     *
     * as - Name of the style.
     * extend - Name of the style to inherit from.
     *
     * Each node contains another sequence of add and remove nodes with the following
     * attributes:
     *
     * as - Name of the style (see {@link Constants}).
     * value - Value for the style.
     *
     * Instead of the value-attribute, one can put Javascript expressions into
     * the node as follows if <StylesheetCodec.allowEval> is true:
     * <add as="perimeter">mxPerimeter.RectanglePerimeter</add>
     *
     * A remove node will remove the entry with the name given in the as-attribute
     * from the style.
     *
     * Example:
     *
     * ```javascript
     * <mxStylesheet as="stylesheet">
     *   <add as="text">
     *     <add as="fontSize" value="12"/>
     *   </add>
     *   <add as="defaultVertex" extend="text">
     *     <add as="shape" value="rectangle"/>
     *   </add>
     * </mxStylesheet>
     * ```
     */
    decode(dec: Codec, _node: Element, into: any): any;
}
export default Stylesheet;
