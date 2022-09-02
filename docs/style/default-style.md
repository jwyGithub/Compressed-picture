# 默认样式

## 查看当前默认样式

-   **类型**

```typescript
/**
 * @description 获取默认样式类型
 * @returns  CellStateStyle
 */
export declare type getDefaultStyleType = (this: GraphCoreObject) => CellStateStyle<string>;
```

-   **示例**

```typescript
const graph = graphCore.init(container);

// 查看默认edge样式
const defaultEdgeStyle = graph.getDefaultEdgeStyle();

// 查看默认vertex样式
const defaultVertexStyle = graph.getDefaultVertexStyle();
```

## 修改默认样式

-   **类型**

```typescript
/**
 * @description 修改默认样式类型
 * @param style CellStateStyle
 */
export declare type updateDefaultStyleType = <S>(this: GraphCoreObject, style: CellStateStyle<S>) => void;
/**
 * @description 修改默认edge样式
 * @param this GraphCoreObject
 * @param style CellStateStyle
 */
export declare const updateDefaultEdgeStyle: updateDefaultStyleType;
/**
 * @description 修改默认vertex样式
 * @param this GraphCoreObject
 * @param style CellStateStyle
 */
export declare const updateDefaultVertexStyle: updateDefaultStyleType;
```

-   **示例**

```typescript
const graph = graphCore.init(container);
// 修改默认edge样式
graph.updateDefaultEdgeStyle({
    strokeColor: 'red',
    fontSize: 20
});

// 修改默认vertex样式;
graph.updateDefaultVertexStyle<'customShape'>({
    strokeColor: 'blue',
    fontSize: 20,
    shape: 'customShape'
});
```

