import { TextData } from './../dialog.js';
import { BaseComponent } from './../../component.js';
export class TextSectionInput extends BaseComponent<HTMLElement> implements TextData {
  constructor() {
    super(`<div>
            <div class="form__container">
                <label for="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="form__container">
                <label for="body">Body</label>
                <textarea type="text" row="3" id="body"></textarea>
            </div>
        </div>`);
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector('#body')! as HTMLInputElement;
    return element.value;
  }
}
