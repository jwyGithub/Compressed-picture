import Point from '../geometry/Point';
import CellState from '../cell/CellState';
import InternalMouseEvent from '../event/InternalMouseEvent';
import ConnectionConstraint from '../other/ConnectionConstraint';
import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
declare module '../Graph' {
    interface Graph {
        constrainChildren: boolean;
        constrainRelativeChildren: boolean;
        disconnectOnMove: boolean;
        cellsDisconnectable: boolean;
        getOutlineConstraint: (point: Point, terminalState: CellState, me: InternalMouseEvent) => ConnectionConstraint | null;
        getAllConnectionConstraints: (terminal: CellState | null, source: boolean) => ConnectionConstraint[] | null;
        getConnectionConstraint: (edge: CellState, terminal: CellState | null, source: boolean) => ConnectionConstraint;
        setConnectionConstraint: (edge: Cell, terminal: Cell | null, source: boolean, constraint: ConnectionConstraint | null) => void;
        getConnectionPoint: (vertex: CellState, constraint: ConnectionConstraint, round?: boolean) => Point | null;
        connectCell: (edge: Cell, terminal: Cell | null, source: boolean, constraint?: ConnectionConstraint | null) => Cell;
        cellConnected: (edge: Cell, terminal: Cell | null, source: boolean, constraint?: ConnectionConstraint | null) => void;
        disconnectGraph: (cells: CellArray) => void;
        getConnections: (cell: Cell, parent?: Cell | null) => CellArray;
        isConstrainChild: (cell: Cell) => boolean;
        isConstrainChildren: () => boolean;
        setConstrainChildren: (value: boolean) => void;
        isConstrainRelativeChildren: () => boolean;
        setConstrainRelativeChildren: (value: boolean) => void;
        isDisconnectOnMove: () => boolean;
        setDisconnectOnMove: (value: boolean) => void;
        isCellDisconnectable: (cell: Cell, terminal: Cell | null, source: boolean) => boolean;
        isCellsDisconnectable: () => boolean;
        setCellsDisconnectable: (value: boolean) => void;
        isValidSource: (cell: Cell | null) => boolean;
        isValidTarget: (cell: Cell | null) => boolean;
        isValidConnection: (source: Cell | null, target: Cell | null) => boolean;
        setConnectable: (connectable: boolean) => void;
        isConnectable: () => boolean;
    }
}
