import Point from '../geometry/Point';
import Rectangle from '../geometry/Rectangle';
import Cell from './Cell';
import GraphView from '../../view/GraphView';
import Shape from '../geometry/Shape';
import TextShape from '../geometry/node/TextShape';
import Dictionary from '../../util/Dictionary';
import { ALIGN } from '../../util/Constants';
import { CellStateStyle } from '../../types';
import RectangleShape from '../geometry/node/RectangleShape';
import CellOverlay from './CellOverlay';
/**
 * Represents the current state of a cell in a given {@link GraphView}.
 *
 * For edges, the edge label position is stored in <absoluteOffset>.
 *
 * The size for oversize labels can be retrieved using the boundingBox property
 * of the <text> field as shown below.
 *
 * ```javascript
 * let bbox = (state.text != null) ? state.text.boundingBox : null;
 * ```
 *
 * Constructor: CellState
 *
 * Constructs a new object that represents the current state of the given
 * cell in the specified view.
 *
 * @param view {@link GraphView} that contains the state.
 * @param cell <Cell> that this state represents.
 * @param style Array of key, value pairs that constitute the style.
 */
declare class CellState extends Rectangle {
    node: HTMLElement | null;
    cellBounds: Rectangle | null;
    paintBounds: Rectangle | null;
    boundingBox: Rectangle | null;
    control: Shape | null;
    overlays: Dictionary<CellOverlay, Shape>;
    /**
     * Reference to the enclosing {@link GraphView}.
     */
    view: GraphView;
    /**
     * Reference to the <Cell> that is represented by this state.
     */
    cell: Cell;
    /**
     * Contains an array of key, value pairs that represent the style of the
     * cell.
     */
    style: CellStateStyle;
    /**
     * Specifies if the style is invalid. Default is false.
     */
    invalidStyle: boolean;
    /**
     * Specifies if the state is invalid. Default is true.
     */
    invalid: boolean;
    /**
     * {@link Point} that holds the origin for all child cells. Default is a new
     * empty {@link Point}.
     */
    origin: Point;
    /**
     * Holds an array of <Point> that represent the absolute points of an
     * edge.
     */
    absolutePoints: (null | Point)[];
    /**
     * {@link Point} that holds the absolute offset. For edges, this is the
     * absolute coordinates of the label position. For vertices, this is the
     * offset of the label relative to the top, left corner of the vertex.
     */
    absoluteOffset: Point;
    /**
     * Caches the visible source terminal state.
     */
    visibleSourceState: CellState | null;
    /**
     * Caches the visible target terminal state.
     */
    visibleTargetState: CellState | null;
    /**
     * Caches the distance between the end points for an edge.
     */
    terminalDistance: number;
    /**
     * Caches the length of an edge.
     */
    length: number;
    /**
     * Array of numbers that represent the cached length of each segment of the
     * edge.
     */
    segments: number[];
    /**
     * Holds the {@link Shape} that represents the cell graphically.
     */
    shape: Shape | null;
    /**
     * Holds the {@link Text} that represents the label of the cell. Thi smay be
     * null if the cell has no label.
     */
    text: TextShape | null;
    /**
     * Holds the unscaled width of the state.
     */
    unscaledWidth: number;
    /**
     * Holds the unscaled height of the state.
     */
    unscaledHeight: number;
    parentHighlight: RectangleShape | null;
    point: Point | null;
    constructor(view?: GraphView | null, cell?: Cell | null, style?: CellStateStyle | null);
    /**
     * Returns the {@link Rectangle} that should be used as the perimeter of the
     * cell.
     *
     * @param border Optional border to be added around the perimeter bounds.
     * @param bounds Optional {@link Rectangle} to be used as the initial bounds.
     */
    getPerimeterBounds(border?: number, bounds?: Rectangle): Rectangle;
    /**
     * Sets the first or last point in <absolutePoints> depending on isSource.
     *
     * @param point {@link Point} that represents the terminal point.
     * @param isSource Boolean that specifies if the first or last point should
     * be assigned.
     */
    setAbsoluteTerminalPoint(point: Point | null, isSource?: boolean): void;
    /**
     * Sets the given cursor on the shape and text shape.
     */
    setCursor(cursor: string): void;
    /**
     * Returns the visible source or target terminal cell.
     *
     * @param source Boolean that specifies if the source or target cell should be
     * returned.
     */
    getVisibleTerminal(source?: boolean): Cell | null;
    /**
     * Returns the visible source or target terminal state.
     *
     * @param source Boolean that specifies if the source or target state should be
     * returned.
     */
    getVisibleTerminalState(source?: boolean): CellState | null;
    /**
     * Sets the visible source or target terminal state.
     *
     * @param terminalState <CellState> that represents the terminal.
     * @param source Boolean that specifies if the source or target state should be set.
     */
    setVisibleTerminalState(terminalState: CellState | null, source?: boolean): void;
    /**
     * Returns the unscaled, untranslated bounds.
     */
    getCellBounds(): Rectangle | null;
    /**
     * Returns the unscaled, untranslated paint bounds. This is the same as
     * <getCellBounds> but with a 90 degree rotation if the shape's
     * isPaintBoundsInverted returns true.
     */
    getPaintBounds(): Rectangle | null;
    /**
     * Updates the cellBounds and paintBounds.
     */
    updateCachedBounds(): void;
    /**
     * Destructor: setState
     *
     * Copies all fields from the given state to this state.
     */
    setState(state: CellState): void;
    /**
     * Returns a clone of this {@link Point}.
     */
    clone(): CellState;
    /**
     * Destructor: destroy
     *
     * Destroys the state and all associated resources.
     */
    destroy(): void;
    /**
     * Returns true if the given cell state is a loop.
     *
     * @param state {@link CellState} that represents a potential loop.
     */
    isLoop(state: CellState): boolean | null;
    /*****************************************************************************
     * Group: Graph appearance
     *****************************************************************************/
    /**
     * Returns the vertical alignment for the given cell state. This
     * implementation returns the value stored under
     * {@link 'verticalAlign'} in the cell style.
     *
     * @param state {@link CellState} whose vertical alignment should be
     * returned.
     */
    getVerticalAlign(): import("../../types").VAlignValue | ALIGN.MIDDLE;
    /**
     * Returns true if the given state has no stroke- or fillcolor and no image.
     *
     * @param state {@link CellState} to check.
     */
    isTransparentState(): boolean;
    /**
     * Returns the image URL for the given cell state. This implementation
     * returns the value stored under {@link 'image'} in the cell
     * style.
     *
     * @param state {@link CellState} whose image URL should be returned.
     */
    getImageSrc(): string | null;
    /**
     * Returns the indicator color for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_COLOR} in the cell style.
     *
     * @param state {@link CellState} whose indicator color should be
     * returned.
     */
    getIndicatorColor(): string | null;
    /**
     * Returns the indicator gradient color for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_GRADIENTCOLOR} in the cell style.
     *
     * @param state {@link CellState} whose indicator gradient color should be
     * returned.
     */
    getIndicatorGradientColor(): string | null;
    /**
     * Returns the indicator shape for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_SHAPE} in the cell style.
     *
     * @param state {@link CellState} whose indicator shape should be returned.
     */
    getIndicatorShape(): string | null;
    /**
     * Returns the indicator image for the given cell state. This
     * implementation returns the value stored under
     * {@link mxConstants.STYLE_INDICATOR_IMAGE} in the cell style.
     *
     * @param state {@link CellState} whose indicator image should be returned.
     */
    getIndicatorImageSrc(): string | null;
}
export default CellState;
