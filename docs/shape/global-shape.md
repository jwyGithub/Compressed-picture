# 全局形状

## 注册全局形状

-   **类型**

```typescript
/**
 * @param {c} AbstractCanvas2D
 * @param {x} x位置
 * @param {y} y轴位置
 * @param {w} 宽度
 * @param {h} 高度
 * @param {isForeground} ??
 */
export declare type registerShapeCallback = (c: AbstractCanvas2D, x: number, y: number, w: number, h: number, isForeground?: boolean) => void;

/**
 * @param shapeName 图形名称
 * @callback shapeName 注册回调
 */
export declare type GraphCoreType<S extends string> = {
    registerShape: (shapeName: string, callback: registerShapeCallback) => void;
};
```

-   **示例**

```typescript
import { graphCore } from '@staryea/graph-core';
graphCore.registerShape('customShape', (path, x, y, w, h, isForeground) => {
    const extrude = 10;
    const dy = extrude * 1;
    const dx = extrude * 1;

    if (isForeground) {
        path.moveTo(0, dy);
        path.lineTo(w - dx, dy);
        path.lineTo(w, 0);
        path.moveTo(w - dx, dy);
        path.lineTo(w - dx, h);
    } else {
        path.moveTo(0, dy);
        path.lineTo(dx, 0);
        path.lineTo(w, 0);
        path.lineTo(w, h - dy);
        path.lineTo(w - dx, h);
        path.lineTo(0, h);
        path.lineTo(0, dy);
        path.lineTo(dx, 0);
        path.close();
    }
});

const graph = graphCore.init(container);

graph.draw<'customShape'>({
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [500 / 2 - 100 / 2, 100],
            size: [100, 100],
            style: {
                shape: 'customShape'
            }
        }
    ]
});
```

-   **预览**

  <image src="../images/registerShape.png"  width=100% />

## 获取所有形状

