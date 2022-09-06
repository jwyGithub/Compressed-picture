import GraphDataModel from '../GraphDataModel';
import Cell from '../cell/Cell';
import ObjectCodec from '../../serialization/ObjectCodec';
import type { UndoableChange } from '../../types';
import Codec from '../../serialization/Codec';
/**
 * Action to add or remove a child in a model.
 *
 * Constructor: mxChildChange
 *
 * Constructs a change of a child in the
 * specified model.
 *
 * @class ChildChange
 */
export declare class ChildChange implements UndoableChange {
    model: GraphDataModel;
    parent: Cell | null;
    child: Cell;
    previous: Cell | null;
    index: number;
    previousIndex: number;
    constructor(model: GraphDataModel, parent: Cell | null, child: Cell, index?: number);
    /**
     * Changes the parent of {@link child}` using
     * <Transactions.parentForCellChanged> and
     * removes or restores the cell's
     * connections.
     */
    execute(): void;
    /**
     * Disconnects the given cell recursively from its
     * terminals and stores the previous terminal in the
     * cell's terminals.
     *
     * @warning doc from mxGraph source code is incorrect
     */
    connect(cell: Cell, isConnect?: boolean): void;
}
/**
 * Codec for {@link ChildChange}s. This class is created and registered
 * dynamically at load time and used implicitly via <Codec> and
 * the <CodecRegistry>.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 * - previousIndex
 * - child
 *
 * Reference Fields:
 *
 * - parent
 */
export declare class ChildChangeCodec extends ObjectCodec {
    constructor();
    /**
     * Returns true for the child attribute if the child
     * cell had a previous parent or if we're reading the
     * child as an attribute rather than a child node, in
     * which case it's always a reference.
     */
    isReference(obj: any, attr: string, value: any, isWrite: boolean): boolean;
    /**
     * Excludes references to parent or previous if not in the model.
     */
    isExcluded(obj: any, attr: string, value: any, write: boolean): boolean;
    /**
     * Encodes the child recusively and adds the result
     * to the given node.
     */
    afterEncode(enc: Codec, obj: any, node: Element): Element;
    /**
     * Decodes the any child nodes as using the respective
     * codec from the registry.
     */
    beforeDecode(dec: Codec, _node: Element, obj: any): any;
    /**
     * Restores object state in the child change.
     */
    afterDecode(dec: Codec, node: Element, obj: any): any;
}
export default ChildChange;
