import Card from './Card';
import { CardStates, CardTypes } from './CardConstants';
import Icon from '../assets/icon.png';

export default class CardImage extends Card {
  constructor(id, text = 'Image', state = CardStates.DEFAULT) {
    super(id, text, state);
    this.icon = Icon;
    this.type = CardTypes.IMAGE;
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add(this.className);
    div.id = CardTypes.IMAGE + '-' + this.id;

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.id = 'card-icon';
    div.appendChild(myIcon);

    const paragraph = document.createElement('p');
    paragraph.textContent = this.text;
    div.appendChild(paragraph);

    return div;
  }
}
