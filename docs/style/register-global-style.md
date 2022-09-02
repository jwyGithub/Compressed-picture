# 全局样式

## 注册全局样式

-   **类型**

```typescript
/**
 * @param registerStyleConfig CellStateStyle
 */
export declare type registerStyleConfig<S extends string> = CellStateStyle<S>;

/**
 * @param styleName 样式名称
 * @param config 样式配置
 */
export declare type GraphCoreType<S extends string> = {
    registerStyle: (styleName: string, config: registerStyleConfig<S>) => void;
};
```

-   **示例**

```typescript
// 引入包核心对象
import { graphCore } from '@staryea/graph-core';
// 使用registerStyle方法注册样式
graphCore.registerStyle('customStyle', {
    fillColor: '#9d9d9d',
    strokeColor: 'blue',
    fontColor: 'red',
    fontSize: 20,
    fontStyle: 4
});

// 创建容器
const container = document.createElement('div');

// 初始化容器
const graph = graphCore.init(container);

// 开始绘制
graph.draw({
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [500 / 2 - 100 / 2, 0],
            size: [100, 100],
            style: {
                // 在单独样式设置里面使用自定义样式
                baseStyleNames: ['customStyle']
            }
        }
    ],
    vertexStyle: {
        // 在通用样式设置里面使用自定义样式
        baseStyleNames: ['customStyle']
    }
});
```

