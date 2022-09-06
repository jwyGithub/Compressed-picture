import { Graph } from '../Graph';
import CellState from '../cell/CellState';
import InternalMouseEvent from '../event/InternalMouseEvent';
import type { GraphPlugin } from '../../types';
import EventSource from '../event/EventSource';
/**
 * Graph event handler that displays tooltips. {@link Graph#getTooltip} is used to
 * get the tooltip for a cell or handle. This handler is built-into
 * {@link Graph#tooltipHandler} and enabled using {@link Graph#setTooltips}.
 *
 * Example:
 *
 * (code>
 * new mxTooltipHandler(graph);
 * (end)
 *
 * Constructor: mxTooltipHandler
 *
 * Constructs an event handler that displays tooltips with the specified
 * delay (in milliseconds). If no delay is specified then a default delay
 * of 500 ms (0.5 sec) is used.
 *
 * @param graph Reference to the enclosing {@link Graph}.
 * @param delay Optional delay in milliseconds.
 */
declare class TooltipHandler implements GraphPlugin {
    static pluginId: string;
    constructor(graph: Graph);
    div: HTMLElement;
    /**
     * Specifies the zIndex for the tooltip and its shadow. Default is 10005.
     */
    zIndex: number;
    /**
     * Reference to the enclosing {@link Graph}.
     */
    graph: Graph;
    /**
     * Delay to show the tooltip in milliseconds. Default is 500.
     */
    delay: number;
    /**
     * Specifies if touch and pen events should be ignored. Default is true.
     */
    ignoreTouchEvents: boolean;
    /**
     * Specifies if the tooltip should be hidden if the mouse is moved over the
     * current cell. Default is false.
     */
    hideOnHover: boolean;
    /**
     * True if this handler was destroyed using <destroy>.
     */
    destroyed: boolean;
    lastX: number;
    lastY: number;
    state: CellState | null;
    stateSource: boolean;
    node: any;
    thread: number | null;
    /**
     * Specifies if events are handled. Default is false.
     */
    enabled: boolean;
    /**
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;
    /**
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Returns <hideOnHover>.
     */
    isHideOnHover(): boolean;
    /**
     * Sets <hideOnHover>.
     */
    setHideOnHover(value: boolean): void;
    /**
     * Returns the <CellState> to be used for showing a tooltip for this event.
     */
    getStateForEvent(me: InternalMouseEvent): CellState | null;
    /**
     * Handles the event by initiating a rubberband selection. By consuming the
     * event all subsequent events of the gesture are redirected to this
     * handler.
     */
    mouseDown(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Handles the event by updating the rubberband selection.
     */
    mouseMove(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Handles the event by resetting the tooltip timer or hiding the existing
     * tooltip.
     */
    mouseUp(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Resets the timer.
     */
    resetTimer(): void;
    /**
     * Resets and/or restarts the timer to trigger the display of the tooltip.
     */
    reset(me: InternalMouseEvent, restart: boolean, state?: CellState | null): void;
    /**
     * Hides the tooltip and resets the timer.
     */
    hide(): void;
    /**
     * Hides the tooltip.
     */
    hideTooltip(): void;
    /**
     * Shows the tooltip for the specified cell and optional index at the
     * specified location (with a vertical offset of 10 pixels).
     */
    show(tip: HTMLElement | string | null, x: number, y: number): void;
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    onDestroy(): void;
}
export default TooltipHandler;
