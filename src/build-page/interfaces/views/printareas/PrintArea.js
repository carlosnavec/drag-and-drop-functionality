import Droppable from '../../draganddrop/Droppable';
import PlaceHolder from './PlaceHolder';
import './PrintArea.css';

export default class PrintArea {
  constructor(setting) {
    this.text = setting?.title;
    this.cardsAllowed = setting?.cardsAllowed;
    this.element = this.createElement();
    this.createInitialPlaceHolder();
    new Droppable(this).setDroppable();
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add('printarea');
    div.id = 'printarea';

    const paragraph = document.createElement('p');
    paragraph.textContent = this.text;
    div.appendChild(paragraph);

    return div;
  }

  createInitialPlaceHolder() {
    new PlaceHolder(this.text).render(this.element);
  }

  render(container) {
    container.appendChild(this.element);
  }
}
