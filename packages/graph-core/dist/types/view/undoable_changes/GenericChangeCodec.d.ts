import ObjectCodec from '../../serialization/ObjectCodec';
import Codec from '../../serialization/Codec';
/**
 * Codec for {@link ValueChange}s, {@link StyleChange}s, {@link GeometryChange}s,
 * {@link CollapseChange}s and {@link VisibleChange}s. This class is created
 * and registered dynamically at load time and used implicitly
 * via <Codec> and the <CodecRegistry>.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 *
 * Reference Fields:
 *
 * - cell
 *
 * Constructor: GenericChangeCodec
 *
 * Factory function that creates a <ObjectCodec> for
 * the specified change and fieldname.
 *
 * @param obj An instance of the change object.
 * @param variable The fieldname for the change data.
 */
declare class GenericChangeCodec extends ObjectCodec {
    constructor(obj: any, variable: string);
    variable: string;
    /**
     * Restores the state by assigning the previous value.
     */
    afterDecode(dec: Codec, node: Element, obj: any): any;
}
export default GenericChangeCodec;
