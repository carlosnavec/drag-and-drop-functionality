import Card from './Card';
import { CardStates, CardTypes } from './CardConstants';
import Icon from '../assets/text.png';

export default class CardText extends Card {
  constructor(id, text = 'Text', state = CardStates.DEFAULT) {
    super(id, text, state);
    this.icon = Icon;
    this.type = CardTypes.TEXT;
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add(this.className);
    div.id = CardTypes.TEXT + '-' + this.id;

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
