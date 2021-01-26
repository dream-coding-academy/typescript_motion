import { BaseComponent } from './../../component.js';
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="page-item__title todo__title"></h2>  
            <input type="checkbox" id="todo-checkbox"/>
            <label for="todo-checkbox" class="todo-label"></label>
        </section>`);

    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector('.todo-label')! as HTMLLabelElement;
    todoElement.textContent = todo;
  }
}
