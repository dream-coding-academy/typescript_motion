/**
 * Set of callbacks that a draggable component must implement to get notified when dragging starts and stops
 */
export interface Draggable {
  // Item reacts when dragging has started
  onDragStart(event: DragEvent): void;
  // Item reacts when the dragging has finished
  onDragEnd(event: DragEvent): void;
}

/**
 * Set of callbacks that an item that listens for drag hover needs to implement to get notified
 */
export interface Hoverable {
  // Notify when dragged item enters the area
  onDragEnter(event: DragEvent): void;
  // Notify when dragged item leaves the area
  onDragLeave(event: DragEvent): void;
}

/**
 * Set of callbacks that a component needs to implement to receive drops of dragged items
 */
export interface Droppable {
  // Method that takes care of what happens when a draggable item is hovered over the host widget
  onDragOver(event: DragEvent): void;
  //   Method that handles the dropping of a draggable item
  onDrop(event: DragEvent): void;
}
