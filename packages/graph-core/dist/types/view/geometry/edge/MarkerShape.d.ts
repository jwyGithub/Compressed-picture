import { ArrowType } from '../../../types';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D';
import Point from '../Point';
import Shape from '../Shape';
/**
 * A static class that implements all markers for VML and SVG using a registry.
 * NOTE: The signatures in this class will change.
 * @class MarkerShape
 */
declare class MarkerShape {
    /**
     * Maps from markers names to functions to paint the markers.
     *
     * Mapping: the attribute name on the object is the marker type, the associated value is the function to paint the marker
     */
    static markers: Record<string, Function>;
    /**
     * Adds a factory method that updates a given endpoint and returns a
     * function to paint the marker onto the given canvas.
     */
    static addMarker(type: string, funct: Function): void;
    /**
     * Returns a function to paint the given marker.
     */
    static createMarker(canvas: AbstractCanvas2D, shape: Shape, type: ArrowType, pe: Point, unitX: number, unitY: number, size: number, source: boolean, sw: number, filled: boolean): any;
}
export default MarkerShape;
