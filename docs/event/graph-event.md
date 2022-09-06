# Event

## Graph Event

-   **type**

    ```typescript
    interface GraphEventType {
        activate: typeof InternalEvent.ACTIVATE;
        add: typeof InternalEvent.ADD;
        addCells: typeof InternalEvent.ADD_CELLS;
        addOverlay: typeof InternalEvent.ADD_OVERLAY;
        addVertex: typeof InternalEvent.ADD_VERTEX;
        afterAddVertex: typeof InternalEvent.AFTER_ADD_VERTEX;
        alignCells: typeof InternalEvent.ALIGN_CELLS;
        beforeAddVertex: typeof InternalEvent.BEFORE_ADD_VERTEX;
        beforeUndo: typeof InternalEvent.BEFORE_UNDO;
        beginUpdate: typeof InternalEvent.BEGIN_UPDATE;
        cellsAdded: typeof InternalEvent.CELLS_ADDED;
        cellsFolded: typeof InternalEvent.CELLS_FOLDED;
        cellsMoved: typeof InternalEvent.CELLS_MOVED;
        cellsOrdered: typeof InternalEvent.CELLS_ORDERED;
        cellsRemoved: typeof InternalEvent.CELLS_REMOVED;
        cellsResized: typeof InternalEvent.CELLS_RESIZED;
        cellsToggled: typeof InternalEvent.CELLS_TOGGLED;
        cellConnected: typeof InternalEvent.CELL_CONNECTED;
        change: typeof InternalEvent.CHANGE;
        clear: typeof InternalEvent.CLEAR;
        click: typeof InternalEvent.CLICK;
        close: typeof InternalEvent.CLOSE;
        connect: typeof InternalEvent.CONNECT;
        connectCell: typeof InternalEvent.CONNECT_CELL;
        destroy: typeof InternalEvent.DESTROY;
        disconnect: typeof InternalEvent.DISCONNECT;
        done: typeof InternalEvent.DONE;
        doubleClick: typeof InternalEvent.DOUBLE_CLICK;
        down: typeof InternalEvent.DOWN;
        editingStarted: typeof InternalEvent.EDITING_STARTED;
        editingStopped: typeof InternalEvent.EDITING_STOPPED;
        endEdit: typeof InternalEvent.END_EDIT;
        endUpdate: typeof InternalEvent.END_UPDATE;
        escape: typeof InternalEvent.ESCAPE;
        execute: typeof InternalEvent.EXECUTE;
        executed: typeof InternalEvent.EXECUTED;
        fired: typeof InternalEvent.FIRED;
        fireMouseEvent: typeof InternalEvent.FIRE_MOUSE_EVENT;
        flipEdge: typeof InternalEvent.FLIP_EDGE;
        foldCells: typeof InternalEvent.FOLD_CELLS;
        gesture: typeof InternalEvent.GESTURE;
        get: typeof InternalEvent.GET;
        groupCells: typeof InternalEvent.GROUP_CELLS;
        hide: typeof InternalEvent.HIDE;
        labelChanged: typeof InternalEvent.LABEL_CHANGED;
        layoutCells: typeof InternalEvent.LAYOUT_CELLS;
        mark: typeof InternalEvent.MARK;
        maximize: typeof InternalEvent.MAXIMIZE;
        minimize: typeof InternalEvent.MINIMIZE;
        mouseDown: typeof InternalEvent.MOUSE_DOWN;
        mouseMove: typeof InternalEvent.MOUSE_MOVE;
        mouseUp: typeof InternalEvent.MOUSE_UP;
        move: typeof InternalEvent.MOVE;
        moveCells: typeof InternalEvent.MOVE_CELLS;
        moveEnd: typeof InternalEvent.MOVE_END;
        moveStart: typeof InternalEvent.MOVE_START;
        normalize: typeof InternalEvent.NORMALIZE;
        notify: typeof InternalEvent.NOTIFY;
        open: typeof InternalEvent.OPEN;
        orderCells: typeof InternalEvent.ORDER_CELLS;
        pan: typeof InternalEvent.PAN;
        panEnd: typeof InternalEvent.PAN_END;
        panStart: typeof InternalEvent.PAN_START;
        post: typeof InternalEvent.POST;
        receive: typeof InternalEvent.RECEIVE;
        redo: typeof InternalEvent.REDO;
        refresh: typeof InternalEvent.REFRESH;
        remove: typeof InternalEvent.REMOVE;
        removeCells: typeof InternalEvent.REMOVE_CELLS;
        removeCellsFromParent: typeof InternalEvent.REMOVE_CELLS_FROM_PARENT;
        removeOverlay: typeof InternalEvent.REMOVE_OVERLAY;
        reset: typeof InternalEvent.RESET;
        resize: typeof InternalEvent.RESIZE;
        resizeCells: typeof InternalEvent.RESIZE_CELLS;
        resizeEnd: typeof InternalEvent.RESIZE_END;
        resizeStart: typeof InternalEvent.RESIZE_START;
        resume: typeof InternalEvent.RESUME;
        root: typeof InternalEvent.ROOT;
        save: typeof InternalEvent.SAVE;
        scale: typeof InternalEvent.SCALE;
        scaleAndTranslate: typeof InternalEvent.SCALE_AND_TRANSLATE;
        select: typeof InternalEvent.SELECT;
        show: typeof InternalEvent.SHOW;
        size: typeof InternalEvent.SIZE;
        splitEdge: typeof InternalEvent.SPLIT_EDGE;
        start: typeof InternalEvent.START;
        startEdit: typeof InternalEvent.START_EDIT;
        startEditing: typeof InternalEvent.START_EDITING;
        suspend: typeof InternalEvent.SUSPEND;
        tapAndHold: typeof InternalEvent.TAP_AND_HOLD;
        toggleCells: typeof InternalEvent.TOGGLE_CELLS;
        translate: typeof InternalEvent.TRANSLATE;
        undo: typeof InternalEvent.UNDO;
        ungroupCells: typeof InternalEvent.UNGROUP_CELLS;
        up: typeof InternalEvent.UP;
        updateCellSize: typeof InternalEvent.UPDATE_CELL_SIZE;
    }
    class GraphEvent {
        private graph;
        private eventMap;
        /**
         * mount
         */
        mount(graph: Graph): this;
        /**
         * on
         * @param eventName GraphEventType
         * @param cb
         */
        on(eventName: keyof GraphEventType, cb: (g: Graph, e: EventObject) => void): void;
        /**
         * off
         */
        off(eventName: keyof GraphEventType, cb?: () => void): void;
        /**
         * once
         */
        once(eventName: keyof GraphEventType, cb: (g: Graph, e: EventObject) => void): void;
        /**
         * removeAllListeners
         */
        removeAllListeners(cb?: () => void): void;
    }
    declare const graphEvent: GraphEvent;
    ```

-   **example**

    ```typescript
    // 引入包
    import { Graph } from '@graph-module/core';
    // 引入event包
    import { graphEvent } from '@graph-module/event';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 初始化事件，并挂载容器
    const eleEvent = graphEvent.mount(graph);
    // 监听事件
    eleEvent.on('click', (g: Graph, e) => {
        console.log(e, `e`);
    });
    ```

