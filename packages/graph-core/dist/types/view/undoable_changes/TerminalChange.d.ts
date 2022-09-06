import Cell from '../cell/Cell';
import GraphDataModel from '../GraphDataModel';
import ObjectCodec from '../../serialization/ObjectCodec';
import type { UndoableChange } from '../../types';
import Codec from '../../serialization/Codec';
/**
 * Action to change a terminal in a model.
 *
 * Constructor: mxTerminalChange
 *
 * Constructs a change of a terminal in the
 * specified model.
 */
export declare class TerminalChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    terminal: Cell | null;
    previous: Cell | null;
    source: boolean;
    constructor(model: GraphDataModel, cell: Cell, terminal: Cell | null, source: boolean);
    /**
     * Changes the terminal of {@link cell}` to {@link previous}` using
     * <Transactions.terminalForCellChanged>.
     */
    execute(): void;
}
/**
 * Codec for {@link TerminalChange}s. This class is created and registered
 * dynamically at load time and used implicitly via <Codec> and
 * the <CodecRegistry>.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 *
 * Reference Fields:
 *
 * - cell
 * - terminal
 */
export declare class TerminalChangeCodec extends ObjectCodec {
    constructor();
    /**
     * Restores the state by assigning the previous value.
     */
    afterDecode(dec: Codec, node: Element, obj: any): any;
}
export default TerminalChange;
