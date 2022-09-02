# 锚点

## 类型

```typescript
import { Geometry } from '@staryea/graph';
/**
 * @param step 步进
 * @param start 开始
 */
export declare type getGeometry = (step?: number, start?: number) => typeof Geometry;
/**
 * @description 分布模式
 * @param averageDistribution 平均分布
 * @param randomDistribution 随机分布
 */
export declare type distributionPattern = 'averageDistribution';
export declare const getGeometry: getGeometry;
```

### 示例

```typescript
// 引入包核心对象
import { graphCore, Client } from '@staryea/graph-core';

// 引入geometry包
import { getGeometry } from '@staryea/graph-geometry';

// 设置锚点样式图片位置
Client.setImageBasePath('/images');

// 创建容器
const container = document.createElement('div');

// 初始化容器
const graph = graphCore.init(container);

// 获取锚点类
const Geometry = getGeometry(0.25, 0);

// 开始绘制
graph.draw({
    vertexs: [
        {
            id: 'vertex1',
            value: 'vertex1',
            position: [500 / 2 - 100 / 2, 0],
            size: [100, 100],
            // 增加锚点类
            geometryClass: Geometry
        }
    ]
});
```
