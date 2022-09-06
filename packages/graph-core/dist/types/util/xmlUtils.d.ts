import CellArray from '../view/cell/CellArray';
import { Graph } from '../view/Graph';
import type { StyleValue } from '../types';
/**
 * Returns a new, empty XML document.
 */
export declare const createXmlDocument: () => XMLDocument;
export declare const parseXml: (xmlString: string) => HTMLElement;
export declare const getViewXml: (graph: Graph, scale?: number, cells?: CellArray | null, x0?: number, y0?: number) => Element | null;
/**
 * Returns the XML content of the specified node. For Internet Explorer,
 * all \r\n\t[\t]* are removed from the XML string and the remaining \r\n
 * are replaced by \n. All \n are then replaced with linefeed, or &#xa; if
 * no linefeed is defined.
 *
 * @param node DOM node to return the XML for.
 * @param linefeed Optional string that linefeeds are converted into. Default is
 * &#xa;
 */
export declare const getXml: (node: Element, linefeed?: string) => string;
/**
 * Returns a pretty printed string that represents the XML tree for the
 * given node. This method should only be used to print XML for reading,
 * use <getXml> instead to obtain a string for processing.
 *
 * @param node DOM node to return the XML for.
 * @param tab Optional string that specifies the indentation for one level.
 * Default is two spaces.
 * @param indent Optional string that represents the current indentation.
 * Default is an empty string.
 * @param newline Option string that represents a linefeed. Default is '\n'.
 */
export declare const getPrettyXml: (node: Element, tab: string, indent: string, newline: string, ns: string) => string;
/**
 * Returns the first node where attr equals value.
 * This implementation does not use XPath.
 */
export declare const findNode: (node: Element, attr: string, value: StyleValue) => Element | null;
