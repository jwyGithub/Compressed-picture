### 1. install

-   use npm

    ```sh
    npm i @graph-libs/shared --save
    ```

-   use yarn
    ```sh
    yarn add @graph-libs/shared --save
    ```
-   use pnpm
    ```sh
    pnpm add @graph-libs/shared --save
    ```

### 2. use

```typescript
import * as utils from '@graph-libs/shared';
```

### 3. type

```typescript
import isArray from './shared/isArray';
import isEmptyArray from './shared/isEmptyArray';
import isEmptyObject from './shared/isEmptyObject';
import isFunction from './shared/isFunction';
import isObject from './shared/isObject';
import averageDistribution from './distribution/average';
import useID from './shared/useID';
export { isArray, isEmptyArray, isEmptyObject, isFunction, isObject, averageDistribution, useID };
```

