import { Draggable, Droppable, Hoverable } from '../components/common/type';
import { Component } from './../components/component';

type GConstructor<T = {}> = new (...args: any[]) => T;
type DraggableClass = GConstructor<Component & Draggable>;

export function EnableDragging<TBase extends DraggableClass>(Base: TBase) {
  return class DraggableItem extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragstart', (event: DragEvent) => {
        this.onDragStart(event);
      });
      this.registerEventListener('dragend', (event: DragEvent) => {
        this.onDragEnd(event);
      });
    }
  };
}

type DragHoverClass = GConstructor<Component & Hoverable>;

export function EnableHover<TBase extends DragHoverClass>(Base: TBase) {
  return class DragHoverArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragenter', (event: DragEvent) => {
        event.preventDefault();
        this.onDragEnter(event);
      });
      this.registerEventListener('dragleave', (event: DragEvent) => {
        this.onDragLeave(event);
      });
    }
  };
}

type DropTargetClass = GConstructor<Component & Droppable>;

export function EnableDrop<TBase extends DropTargetClass>(Base: TBase) {
  return class DropArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragover', (event: DragEvent) => {
        event.preventDefault();
        this.onDragOver(event);
      });
      this.registerEventListener('drop', (event: DragEvent) => {
        event.preventDefault();
        this.onDrop(event);
      });
    }
  };
}
