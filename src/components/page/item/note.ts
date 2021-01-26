import { BaseComponent } from './../../component.js';
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
            <h2 class="page-item__title note__title"></h2>  
            <p class="note__body"></p>
        </section>`);

    const titleElement = this.element.querySelector('.note__title')! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector('.note__body')! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
