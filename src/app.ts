import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');

    // https://www.youtube.com/watch?v=K3-jG52XwuQ
    // https://youtu.be/K3-jG52XwuQ
    const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
