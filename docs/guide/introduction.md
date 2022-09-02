# 简介

### 什么是 graph-lib

graph-lib 是一个 TypeScript library ，使用第三方库[maxgraph](https://github.com/maxGraph/maxGraph)作为基础，结合日常业务场景进一次封装。

### 什么是 [mxgraph](https://github.com/jgraph/mxgraph/edit/master/README.md)?

mxGraph is a fully client side JavaScript diagramming library that uses SVG and HTML for rendering.

The PHP model was deprecated after release 4.0.3 and the archive can be found [here](https://github.com/jgraph/mxgraph-php).

The unmaintained npm build is [here](https://www.npmjs.com/package/mxgraph)

We don't support Typescript, but there is a [project to implement this](https://github.com/process-analytics/mxgraph-road-to-DefinitelyTyped), with [this repo](https://github.com/hungtcs/mxgraph-type-definitions) currently used as the lead repo.

The mxGraph library uses no third-party software, it requires no plugins and can be integrated in virtually any framework (it's vanilla JS).

### 什么是 [maxGraph](https://github.com/maxGraph/maxGraph/blob/development/README.md)?

maxGraph is a TypeScript library which can display and allow interaction with vector diagrams. At a high level, it provides:

-   **Nodes**, also known as **vertices** which are typically represented by shapes like rectangles.
-   **Edges** which can be lines and arrows which normally point between one node and another.

It provides many of the diagramming features which would be expected by a piece of presentation software like Microsoft® PowerPoint™ or LibreOffice® Impress such as being able to resize, move or rotate nodes, but has a stronger focus on automatic layout algorithms and applications of [Graph Theory](https://en.wikipedia.org/wiki/Graph_theory). It is suited towards software which requires finer-grained customization of functionality than off-the-shelf packages.

The `maxGraph` library uses no third-party software, it requires no plugins and can be integrated in virtually any framework (it's vanilla JS).

`maxGraph` is the successor of [mxGraph](https://github.com/jgraph/mxgraph) which is now end of life. At first, it provides the same features as mxGraph and adds

-   TypeScript support
-   maintained npm package
-   modern modular, tree shakable, version of mxGraph to reduce the whole package size

New features will follow.

