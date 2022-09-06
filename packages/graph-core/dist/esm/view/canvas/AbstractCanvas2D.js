/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { arcToCurves, getRotatedPoint } from '../../util/mathUtils';
import { DEFAULT_FONTFAMILY, DEFAULT_FONTSIZE, DIRECTION, NONE, SHADOWCOLOR, SHADOW_OFFSET_X, SHADOW_OFFSET_Y, SHADOW_OPACITY, } from '../../util/Constants';
import UrlConverter from '../../util/UrlConverter';
import Point from '../geometry/Point';
import { clone } from '../../util/cloneUtils';
/**
 * Base class for all canvases. A description of the public API is available in <mxXmlCanvas2D>.
 * All color values of {@link Constants#NONE} will be converted to null in the state.
 *
 * Constructor: D
 *
 * Constructs a new abstract canvas.
 */
class AbstractCanvas2D {
    constructor() {
        /**
         * Holds the current state.
         */
        this.state = this.createState();
        /**
         * Stack of states.
         */
        this.states = [];
        /**
         * Holds the current path as an array.
         */
        this.path = [];
        /**
         * Switch for rotation of HTML. Default is false.
         */
        this.rotateHtml = true;
        /**
         * Holds the last x coordinate.
         */
        this.lastX = 0;
        /**
         * Holds the last y coordinate.
         */
        this.lastY = 0;
        /**
         * Contains the string used for moving in paths. Default is 'M'.
         */
        this.moveOp = 'M';
        /**
         * Contains the string used for moving in paths. Default is 'L'.
         */
        this.lineOp = 'L';
        /**
         * Contains the string used for quadratic paths. Default is 'Q'.
         */
        this.quadOp = 'Q';
        /**
         * Contains the string used for bezier curves. Default is 'C'.
         */
        this.curveOp = 'C';
        /**
         * Holds the operator for closing curves. Default is 'Z'.
         */
        this.closeOp = 'Z';
        /**
         * Boolean value that specifies if events should be handled. Default is false.
         */
        this.pointerEvents = false;
        // from Polyline (maybe from other shapes also)
        this.pointerEventsValue = null;
        /**
         * Adds the given operation to the path.
         */
        this.addOp = (op, ...args) => {
            this.path.push(op);
            if (args.length > 1) {
                const s = this.state;
                for (let i = 1; i < args.length; i += 2) {
                    this.lastX = args[i - 1];
                    this.lastY = args[i];
                    this.path.push(this.format((this.lastX + s.dx) * s.scale));
                    this.path.push(this.format((this.lastY + s.dy) * s.scale));
                }
            }
        };
        this.converter = this.createUrlConverter();
        this.reset();
    }
    /**
     * Create a new <UrlConverter> and returns it.
     */
    createUrlConverter() {
        return new UrlConverter();
    }
    /**
     * Resets the state of this canvas.
     */
    reset() {
        this.state = this.createState();
        this.states = [];
    }
    /**
     * Creates the state of the this canvas.
     */
    createState() {
        return {
            dx: 0,
            dy: 0,
            scale: 1,
            alpha: 1,
            fillAlpha: 1,
            strokeAlpha: 1,
            fillColor: NONE,
            gradientFillAlpha: 1,
            gradientColor: NONE,
            gradientAlpha: 1,
            gradientDirection: DIRECTION.EAST,
            strokeColor: NONE,
            strokeWidth: 1,
            dashed: false,
            dashPattern: '3 3',
            fixDash: false,
            lineCap: 'flat',
            lineJoin: 'miter',
            miterLimit: 10,
            fontColor: '#000000',
            fontBackgroundColor: NONE,
            fontBorderColor: NONE,
            fontSize: DEFAULT_FONTSIZE,
            fontFamily: DEFAULT_FONTFAMILY,
            fontStyle: 0,
            shadow: false,
            shadowColor: SHADOWCOLOR,
            shadowAlpha: SHADOW_OPACITY,
            shadowDx: SHADOW_OFFSET_X,
            shadowDy: SHADOW_OFFSET_Y,
            rotation: 0,
            rotationCx: 0,
            rotationCy: 0,
        };
    }
    /**
     * Rounds all numbers to integers.
     */
    format(value) {
        return Math.round(value);
    }
    /**
     * Rotates the given point and returns the result as an {@link Point}.
     */
    rotatePoint(x, y, theta, cx, cy) {
        const rad = theta * (Math.PI / 180);
        return getRotatedPoint(new Point(x, y), Math.cos(rad), Math.sin(rad), new Point(cx, cy));
    }
    /**
     * Saves the current state.
     */
    save() {
        this.states.push(this.state);
        this.state = clone(this.state);
    }
    /**
     * Restores the current state.
     */
    restore() {
        const state = this.states.pop();
        if (state)
            this.state = state;
    }
    /**
     * Sets the current link. Hook for subclassers.
     */
    setLink(link) {
        // nop
    }
    /**
     * Scales the current state.
     */
    scale(value) {
        this.state.scale *= value;
        if (this.state.strokeWidth !== null)
            this.state.strokeWidth *= value;
    }
    /**
     * Translates the current state.
     */
    translate(dx, dy) {
        this.state.dx += dx;
        this.state.dy += dy;
    }
    /**
     * Rotates the current state.
     */
    rotate(theta, flipH, flipV, cx, cy) {
        // nop
    }
    /**
     * Sets the current alpha.
     */
    setAlpha(value) {
        this.state.alpha = value;
    }
    /**
     * Sets the current solid fill alpha.
     */
    setFillAlpha(value) {
        this.state.fillAlpha = value;
    }
    /**
     * Sets the current stroke alpha.
     */
    setStrokeAlpha(value) {
        this.state.strokeAlpha = value;
    }
    /**
     * Sets the current fill color.
     */
    setFillColor(value) {
        this.state.fillColor = value ?? NONE;
        this.state.gradientColor = NONE;
    }
    /**
     * Sets the current gradient.
     */
    setGradient(color1, color2, x, y, w, h, direction, alpha1 = 1, alpha2 = 1) {
        const s = this.state;
        s.fillColor = color1;
        s.gradientFillAlpha = alpha1;
        s.gradientColor = color2;
        s.gradientAlpha = alpha2;
        s.gradientDirection = direction;
    }
    /**
     * Sets the current stroke color.
     */
    setStrokeColor(value) {
        this.state.strokeColor = value ?? NONE;
    }
    /**
     * Sets the current stroke width.
     */
    setStrokeWidth(value) {
        this.state.strokeWidth = value;
    }
    /**
     * Enables or disables dashed lines.
     */
    setDashed(value, fixDash = false) {
        this.state.dashed = value;
        this.state.fixDash = fixDash;
    }
    /**
     * Sets the current dash pattern.
     */
    setDashPattern(value) {
        this.state.dashPattern = value;
    }
    /**
     * Sets the current line cap.
     */
    setLineCap(value) {
        this.state.lineCap = value;
    }
    /**
     * Sets the current line join.
     */
    setLineJoin(value) {
        this.state.lineJoin = value;
    }
    /**
     * Sets the current miter limit.
     */
    setMiterLimit(value) {
        this.state.miterLimit = value;
    }
    /**
     * Sets the current font color.
     */
    setFontColor(value) {
        this.state.fontColor = value ?? NONE;
    }
    /**
     * Sets the current font background color.
     */
    setFontBackgroundColor(value) {
        this.state.fontBackgroundColor = value ?? NONE;
    }
    /**
     * Sets the current font border color.
     */
    setFontBorderColor(value) {
        this.state.fontBorderColor = value ?? NONE;
    }
    /**
     * Sets the current font size.
     */
    setFontSize(value) {
        this.state.fontSize = value;
    }
    /**
     * Sets the current font family.
     */
    setFontFamily(value) {
        this.state.fontFamily = value;
    }
    /**
     * Sets the current font style.
     */
    setFontStyle(value) {
        this.state.fontStyle = value;
    }
    /**
     * Enables or disables and configures the current shadow.
     */
    setShadow(enabled) {
        this.state.shadow = enabled;
    }
    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowColor(value) {
        this.state.shadowColor = value ?? NONE;
    }
    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowAlpha(value) {
        this.state.shadowAlpha = value;
    }
    /**
     * Enables or disables and configures the current shadow.
     */
    setShadowOffset(dx, dy) {
        this.state.shadowDx = dx;
        this.state.shadowDy = dy;
    }
    /**
     * Starts a new path.
     */
    begin() {
        this.lastX = 0;
        this.lastY = 0;
        this.path = [];
    }
    /**
     *  Moves the current path the given coordinates.
     */
    moveTo(x, y) {
        this.addOp(this.moveOp, x, y);
    }
    /**
     * Draws a line to the given coordinates. Uses moveTo with the op argument.
     */
    lineTo(x, y) {
        this.addOp(this.lineOp, x, y);
    }
    /**
     * Adds a quadratic curve to the current path.
     */
    quadTo(x1, y1, x2, y2) {
        this.addOp(this.quadOp, x1, y1, x2, y2);
    }
    /**
     * Adds a bezier curve to the current path.
     */
    curveTo(x1, y1, x2, y2, x3, y3) {
        this.addOp(this.curveOp, x1, y1, x2, y2, x3, y3);
    }
    /**
     * Adds the given arc to the current path. This is a synthetic operation that
     * is broken down into curves.
     */
    arcTo(rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
        const curves = arcToCurves(this.lastX, this.lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y);
        if (curves != null) {
            for (let i = 0; i < curves.length; i += 6) {
                this.curveTo(curves[i], curves[i + 1], curves[i + 2], curves[i + 3], curves[i + 4], curves[i + 5]);
            }
        }
    }
    /**
     * Closes the current path.
     */
    close(x1, y1, x2, y2, x3, y3) {
        this.addOp(this.closeOp);
    }
    /**
     * Empty implementation for backwards compatibility. This will be removed.
     */
    end() { }
    stroke() { }
    fill() { }
    fillAndStroke() { }
    rect(x, y, w, h) { }
    roundrect(x, y, w, h, r1, r2) { }
    ellipse(x, y, w, h) { }
    image(x, y, w, h, src, aspect = true, flipH = false, flipV = false) { }
    text(x, y, w, h, str, align, valign, wrap, format, overflow, clip, rotation = 0, dir) { }
    updateText(x, y, w, h, align, valign, wrap, overflow, clip, rotation = 0, node) { }
}
export default AbstractCanvas2D;