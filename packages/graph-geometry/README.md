### 1. install

-   use npm

    ```sh
    npm i @graph-libs/geometry --save
    ```

-   use yarn
    ```sh
    yarn add @graph-libs/geometry --save
    ```
-   use pnpm
    ```sh
    pnpm add @graph-libs/geometry --save
    ```

### 2. use

```typescript
import { getGeometry } from '@graph-libs/geometry';

const Geometry = getGeometry(0.25, 0);

graph.draw({
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [500 / 2 - 100 / 2, 10],
            size: [100, 100],
            style: {
                shape: 'cylinder',
                fillColor: '#ccc',
                strokeColor: '#efefef',
                fontSize: 14,
                verticalAlign: 'middle'
            },
            geometryClass: Geometry
        }
    ]
});
```

### 3. type

```typescript
export declare type getGeometry = (step?: number, start?: number) => typeof Geometry;
/**
 * @description 分布模式
 * @param averageDistribution 平均分布
 * @param randomDistribution 随机分布
 */
export declare type distributionPattern = 'averageDistribution';
export declare const getGeometry: getGeometry;
```

