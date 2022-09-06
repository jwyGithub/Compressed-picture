import Cell from '../cell/Cell';
import GraphDataModel from '../GraphDataModel';
import ObjectCodec from '../../serialization/ObjectCodec';
import type { UndoableChange } from '../../types';
import Codec from '../../serialization/Codec';
/**
 * Action to change the root in a model.
 *
 * Constructor: mxRootChange
 *
 * Constructs a change of the root in the
 * specified model.
 *
 * @class RootChange
 */
export declare class RootChange implements UndoableChange {
    model: GraphDataModel;
    root: Cell | null;
    previous: Cell | null;
    constructor(model: GraphDataModel, root: Cell | null);
    /**
     * Carries out a change of the root using
     * <Transactions.rootChanged>.
     */
    execute(): void;
}
/**
 * Codec for {@link RootChange}s. This class is created and registered
 * dynamically at load time and used implicitly via <Codec> and
 * the <CodecRegistry>.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 * - root
 */
export declare class RootChangeCodec extends ObjectCodec {
    constructor();
    /**
     * Encodes the child recursively.
     */
    afterEncode(enc: Codec, obj: any, node: Element): Element;
    /**
     * Decodes the optional children as cells
     * using the respective decoder.
     */
    beforeDecode(dec: Codec, node: Element, obj: any): any;
    /**
     * Restores the state by assigning the previous value.
     */
    afterDecode(dec: Codec, node: Element, obj: any): any;
}
export default RootChange;
