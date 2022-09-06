import DragSource, { DropHandler } from '../view/other/DragSource';
import { Graph } from '../view/Graph';
import Cell from '../view/cell/Cell';
/**
 * Configures the given DOM element to act as a drag source for the
 * specified graph. Returns a a new {@link DragSource}. If
 * {@link DragSource#guideEnabled} is enabled then the x and y arguments must
 * be used in funct to match the preview location.
 *
 * Example:
 *
 * ```javascript
 * let funct = (graph, evt, cell, x, y)=>
 * {
 *   if (graph.canImportCell(cell))
 *   {
 *     let parent = graph.getDefaultParent();
 *     let vertex = null;
 *
 *     graph.getDataModel().beginUpdate();
 *     try
 *     {
 *        vertex = graph.insertVertex(parent, null, 'Hello', x, y, 80, 30);
 *     }
 *     finally
 *     {
 *       graph.getDataModel().endUpdate();
 *     }
 *
 *     graph.setSelectionCell(vertex);
 *   }
 * }
 *
 * let img = document.createElement('img');
 * img.setAttribute('src', 'editors/images/rectangle.gif');
 * img.style.position = 'absolute';
 * img.style.left = '0px';
 * img.style.top = '0px';
 * img.style.width = '16px';
 * img.style.height = '16px';
 *
 * let dragImage = img.cloneNode(true);
 * dragImage.style.width = '32px';
 * dragImage.style.height = '32px';
 * mxUtils.makeDraggable(img, graph, funct, dragImage);
 * document.body.appendChild(img);
 * ```
 *
 * @param element DOM element to make draggable.
 * @param graphF {@link Graph} that acts as the drop target or a function that takes a
 * mouse event and returns the current {@link Graph}.
 * @param funct Function to execute on a successful drop.
 * @param dragElement Optional DOM node to be used for the drag preview.
 * @param dx Optional horizontal offset between the cursor and the drag
 * preview.
 * @param dy Optional vertical offset between the cursor and the drag
 * preview.
 * @param autoscroll Optional boolean that specifies if autoscroll should be
 * used. Default is mxGraph.autoscroll.
 * @param scalePreview Optional boolean that specifies if the preview element
 * should be scaled according to the graph scale. If this is true, then
 * the offsets will also be scaled. Default is false.
 * @param highlightDropTargets Optional boolean that specifies if dropTargets
 * should be highlighted. Default is true.
 * @param getDropTarget Optional function to return the drop target for a given
 * location (x, y). Default is mxGraph.getCellAt.
 */
export declare const makeDraggable: (element: Element, graphF: Graph | Function, funct: DropHandler, dragElement: Element, dx?: number | null, dy?: number | null, autoscroll?: boolean | null, scalePreview?: boolean, highlightDropTargets?: boolean, getDropTarget?: ((graph: Graph, x: number, y: number, evt: MouseEvent) => Cell) | null) => DragSource;