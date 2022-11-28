import { draw } from '@graph/draw';
import { Graph } from '@maxgraph/core';

const root = <HTMLDivElement>document.querySelector<HTMLDivElement>('#app');

const graph = new Graph(root);

draw(graph, {
    vertexs: [
        {
            id: '',
            value: '',
            position: [0, 0],
            size: [50, 50],
            style: {
                shape: 'cloud'
            }
        }
    ]
});

export {};

