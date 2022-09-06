# Style

## get default edge style

-   **example**

    ```typescript
    import { Graph } from '@graph-module/core';

    const container = <HTMLDivElement>document.getElementById('app');

    const graph = new Graph(container);

    const defaultEdgeStyle = graph.stylesheet.getDefaultEdgeStyle();
    ```

## get default vertex style

-   **example**

    ```typescript
    import { Graph } from '@graph-module/core';

    const container = <HTMLDivElement>document.getElementById('app');

    const graph = new Graph(container);

    const defaultEdgeStyle = graph.stylesheet.getDefaultVertexStyle();
    ```

## update default vertex style

-   **example**

    ```typescript
    import { CellStateStyle, Graph } from '@graph-module/core';
    import { draw } from '@graph-module/draw';

    const container = <HTMLDivElement>document.getElementById('app');

    const graph = new Graph(container);

    const style: CellStateStyle = {
        shape: 'cloud',
        strokeColor: 'red'
    };
    const _style = graph.stylesheet.createDefaultEdgeStyle();
    graph.stylesheet.putDefaultVertexStyle(Object.assign({}, _style, style));
    ```

## update default edge style

-   **example**

    ```typescript
    import { CellStateStyle, Graph } from '@graph-module/core';

    const container = <HTMLDivElement>document.getElementById('app');

    const graph = new Graph(container);

    const style: CellStateStyle = {
        shape: 'cloud',
        strokeColor: 'red'
    };

    const _style = graph.stylesheet.createDefaultEdgeStyle();
    graph.stylesheet.putDefaultEdgeStyle(Object.assign({}, _style, style));
    ```

