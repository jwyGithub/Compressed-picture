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
import Point from '../geometry/Point';
import Dictionary from '../../util/Dictionary';
/**
 * @class CellStatePreview
 *
 * Implements a live preview for moving cells.
 */
class CellStatePreview {
    constructor(graph) {
        /**
         * Contains the number of entries in the map.
         */
        this.count = 0;
        this.deltas = new Dictionary();
        this.graph = graph;
    }
    /**
     * Returns true if this contains no entries.
     */
    isEmpty() {
        return this.count === 0;
    }
    /**
       *
     * @param {CellState} state
     * @param {number} dx
     * @param {number} dy
     * @param {boolean} add
     * @param {boolean} includeEdges
     * @return {*}  {mxPoint}
     * @memberof mxCellStatePreview
     */
    moveState(state, dx, dy, add = true, includeEdges = true) {
        let delta = this.deltas.get(state.cell);
        if (delta == null) {
            // Note: Deltas stores the point and the state since the key is a string.
            delta = { point: new Point(dx, dy), state };
            this.deltas.put(state.cell, delta);
            this.count++;
        }
        else if (add) {
            delta.point.x += dx;
            delta.point.y += dy;
        }
        else {
            delta.point.x = dx;
            delta.point.y = dy;
        }
        if (includeEdges) {
            this.addEdges(state);
        }
        return delta.point;
    }
    /**
       *
     * @param {Function} visitor
     * @memberof mxCellStatePreview
     */
    show(visitor = null) {
        this.deltas.visit((key, delta) => {
            this.translateState(delta.state, delta.point.x, delta.point.y);
        });
        this.deltas.visit((key, delta) => {
            this.revalidateState(delta.state, delta.point.x, delta.point.y, visitor);
        });
    }
    /**
       *
     * @param {CellState} state
     * @param {number} dx
     * @param {number} dy
     * @memberof mxCellStatePreview
     */
    translateState(state, dx, dy) {
        if (state != null) {
            if (state.cell.isVertex()) {
                state.view.updateCellState(state);
                const geo = state.cell.getGeometry();
                // Moves selection cells and non-relative vertices in
                // the first phase so that edge terminal points will
                // be updated in the second phase
                if ((dx !== 0 || dy !== 0) &&
                    geo != null &&
                    (!geo.relative || this.deltas.get(state.cell) != null)) {
                    state.x += dx;
                    state.y += dy;
                }
            }
            for (const child of state.cell.getChildren()) {
                this.translateState(state.view.getState(child), dx, dy);
            }
        }
    }
    /**
       *
     * @param {CellState} state
     * @param {number} dx
     * @param {number} dy
     * @param {Function} visitor
     * @memberof mxCellStatePreview
     */
    revalidateState(state, dx, dy, visitor = null) {
        // Updates the edge terminal points and restores the
        // (relative) positions of any (relative) children
        if (state.cell.isEdge()) {
            state.view.updateCellState(state);
        }
        const geo = state.cell.getGeometry();
        const pState = state.view.getState(state.cell.getParent());
        // Moves selection vertices which are relative
        if ((dx !== 0 || dy !== 0) &&
            geo != null &&
            geo.relative &&
            state.cell.isVertex() &&
            (pState == null || pState.cell.isVertex() || this.deltas.get(state.cell) != null)) {
            state.x += dx;
            state.y += dy;
        }
        this.graph.cellRenderer.redraw(state);
        // Invokes the visitor on the given state
        if (visitor != null) {
            visitor(state);
        }
        for (const child of state.cell.getChildren()) {
            this.revalidateState(this.graph.view.getState(child), dx, dy, visitor);
        }
    }
    /**
       *
     * @param {CellState} state
     * @memberof mxCellStatePreview
     */
    addEdges(state) {
        const edgeCount = state.cell.getEdgeCount();
        for (let i = 0; i < edgeCount; i += 1) {
            const s = state.view.getState(state.cell.getEdgeAt(i));
            if (s != null) {
                this.moveState(s, 0, 0);
            }
        }
    }
}
export default CellStatePreview;