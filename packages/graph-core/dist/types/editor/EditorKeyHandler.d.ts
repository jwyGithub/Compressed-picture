import KeyHandler from '../view/handler/KeyHandler';
import Editor from './Editor';
import ObjectCodec from '../serialization/ObjectCodec';
import Codec from '../serialization/Codec';
/**
 * Binds keycodes to actionnames in an editor.  This aggregates an internal {@link handler} and extends the implementation of {@link KeyHandler.escape} to not only cancel the editing, but also hide the properties dialog and fire an <Editor.escape> event via {@link editor}.  An instance of this class is created by {@link Editor} and stored in {@link Editor.keyHandler}.
 *
 * @Example
 * Bind the delete key to the delete action in an existing editor.
 * ```javascript
 * var keyHandler = new EditorKeyHandler(editor);
 * keyHandler.bindAction(46, 'delete');
 * ```
 *
 * @Codec
 * This class uses the {@link DefaultKeyHandlerCodec} to read configuration data into an existing instance.  See {@link DefaultKeyHandlerCodec} for a description of the configuration format.
 *
 * @Keycodes
 * See {@link KeyHandler}.
 * An {@link InternalEvent.ESCAPE} event is fired via the editor if the escape key is pressed.
 */
export declare class EditorKeyHandler {
    constructor(editor?: Editor | null);
    /**
     * Reference to the enclosing {@link Editor}.
     */
    editor: Editor | null;
    /**
     * Holds the {@link KeyHandler} for key event handling.
     */
    handler: KeyHandler | null;
    /**
     * Binds the specified keycode to the given action in {@link editor}.  The optional control flag specifies if the control key must be pressed to trigger the action.
     *
     * @param code      Integer that specifies the keycode.
     * @param action    Name of the action to execute in {@link editor}.
     * @param control   Optional boolean that specifies if control must be pressed.  Default is false.
     */
    bindAction(code: number, action: string, control?: boolean): void;
    /**
     * Destroys the {@link handler} associated with this object.  This does normally not need to be called, the {@link handler} is destroyed automatically when the window unloads (in IE) by {@link Editor}.
     */
    destroy(): void;
}
/**
 * Custom codec for configuring <EditorKeyHandler>s. This class is created
 * and registered dynamically at load time and used implicitly via
 * <Codec> and the <CodecRegistry>. This codec only reads configuration
 * data for existing key handlers, it does not encode or create key handlers.
 */
export declare class EditorKeyHandlerCodec extends ObjectCodec {
    constructor();
    /**
     * Returns null.
     */
    encode(enc: Codec, obj: any): null;
    /**
     * Reads a sequence of the following child nodes
     * and attributes:
     *
     * Child Nodes:
     *
     * add - Binds a keystroke to an actionname.
     *
     * Attributes:
     *
     * as - Keycode.
     * action - Actionname to execute in editor.
     * control - Optional boolean indicating if
     *     the control key must be pressed.
     *
     * Example:
     *
     * ```javascript
     * <EditorKeyHandler as="keyHandler">
     *   <add as="88" control="true" action="cut"/>
     *   <add as="67" control="true" action="copy"/>
     *   <add as="86" control="true" action="paste"/>
     * </EditorKeyHandler>
     * ```
     *
     * The keycodes are for the x, c and v keys.
     *
     * See also: <EditorKeyHandler.bindAction>,
     * http://www.js-examples.com/page/tutorials__key_codes.html
     */
    decode(dec: Codec, _node: Element, into: any): any;
}
export default EditorKeyHandler;
