import { InternalEvent, KeyboardEventListener, MouseEventListener } from '@graph-module/core';

class ElementEvent {
    private root!: HTMLElement;
    private eventMap: Map<string, MouseEventListener | KeyboardEventListener> = new Map();

    public mount(root: HTMLElement) {
        this.root = root;
        return this;
    }

    public on(eventName: keyof HTMLElementEventMap, cb: (event: Event) => void) {
        InternalEvent.addListener(this.root, eventName, cb);
        if (this.eventMap.has(eventName)) {
            this.eventMap.delete(eventName);
            this.eventMap.set(eventName, cb);
        } else {
            this.eventMap.set(eventName, cb);
        }
    }
    public off(eventName: keyof HTMLElementEventMap, cb?: () => void) {
        if (this.eventMap.has(eventName)) {
            const _cb = this.eventMap.get(eventName);
            _cb && InternalEvent.removeListener(this.root, eventName, _cb);
            _cb && this.eventMap.delete(eventName);
            cb && cb();
        }
    }
    public once(eventName: keyof HTMLElementEventMap, cb: (event: Event) => void) {
        const fn = (event: Event) => {
            cb(event);
            InternalEvent.removeListener(this.root, eventName, fn);
        };
        InternalEvent.addListener(this.root, eventName, fn);
    }

    public removeAllListeners(cb?: () => void) {
        InternalEvent.removeAllListeners(this.root);
        cb && cb();
    }
}

export const elementEvent = new ElementEvent();

