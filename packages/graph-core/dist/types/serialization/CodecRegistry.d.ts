import ObjectCodec from './ObjectCodec';
/**
 * Singleton class that acts as a global registry for codecs.
 *
 * ### Adding an <Codec>:
 *
 * 1. Define a default codec with a new instance of the object to be handled.
 *
 *     ```javascript
 *     var codec = new ObjectCodec(new Transactions());
 *     ```
 *
 * 2. Define the functions required for encoding and decoding objects.
 *
 *     ```javascript
 *     codec.encode = function(enc, obj) { ... }
 *     codec.decode = function(dec: Codec, node: Element, into: any): any { ... }
 *     ```
 *
 * 3. Register the codec in the <CodecRegistry>.
 *
 *     ```javascript
 *     CodecRegistry.register(codec);
 *     ```
 *
 * {@link ObjectCodec.decode} may be used to either create a new
 * instance of an object or to configure an existing instance,
 * in which case the into argument points to the existing
 * object. In this case, we say the codec "configures" the
 * object.
 *
 * @class CodecRegistry
 */
declare class CodecRegistry {
    static codecs: {
        [key: string]: any;
    };
    /**
     * Maps from classnames to codecnames.
     * @static
     */
    static aliases: {
        [key: string]: any;
    };
    /**
     * Registers a new codec and associates the name of the template
     * constructor in the codec with the codec object.
     *
     * @static
     *
     * @param codec - {@link ObjectCodec} to be registered.
     */
    static register(codec: ObjectCodec): ObjectCodec;
    /**
     * Adds an alias for mapping a classname to a codecname.
     * @static
     */
    static addAlias(classname: string, codecname: string): void;
    /**
     * Returns a codec that handles objects that are constructed
     * using the given constructor.
     *
     * @static
     *
     * @param ctor - JavaScript constructor function.
     */
    static getCodec(constructor_: any): ObjectCodec | null;
}
export default CodecRegistry;
