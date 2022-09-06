import Cell from '../cell/Cell';
import CellArray from '../cell/CellArray';
declare module '../Graph' {
    interface Graph {
        dropEnabled: boolean;
        splitEnabled: boolean;
        autoScroll: boolean;
        autoExtend: boolean;
        isAutoScroll: () => boolean;
        isAutoExtend: () => boolean;
        isDropEnabled: () => boolean;
        setDropEnabled: (value: boolean) => void;
        isSplitEnabled: () => boolean;
        setSplitEnabled: (value: boolean) => void;
        isSplitTarget: (target: Cell, cells?: CellArray, evt?: MouseEvent | null) => boolean;
    }
}
