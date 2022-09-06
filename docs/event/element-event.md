# Event

## ElementEvent

-   **type**

    ```typescript
    class ElementEvent {
        private root;
        private eventMap;
        mount(root: HTMLElement): this;
        on(eventName: keyof HTMLElementEventMap, cb: (event: Event) => void): void;
        off(eventName: keyof HTMLElementEventMap, cb?: () => void): void;
        once(eventName: keyof HTMLElementEventMap, cb: (event: Event) => void): void;
        removeAllListeners(cb?: () => void): void;
    }
    declare const elementEvent: ElementEvent;
    ```

-   **example**

    ```typescript
    // 引入包
    import { Graph } from '@graph-module/core';
    // 引入event包
    import { elementEvent } from '@graph-module/event';
    // 获取容器
    const container = <HTMLDivElement>document.getElementById('app');
    // 初始化容器
    const graph = new Graph(container);
    // 初始化事件，并挂载容器
    const eleEvent = elementEvent.mount(container);
    // 监听事件
    eleEvent.on('click', event => {
        console.log(`click`, event);
    });
    // 移除事件
    eleEvent.off('click');
    ```

    > 事件系统采用框架原事件中心执行，并没有使用原生`addEventListener`方法 <br /> `off` 方法的回调不是`addEventListener`的执行回调,而是移除监听事件后的回调，所以为可选参数

