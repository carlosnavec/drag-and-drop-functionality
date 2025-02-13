import { getIdRandom } from '../../../shared/utils';
import Draggable from '../../draganddrop/Draggable';
import './Card.css';
import { CardStates } from './CardConstants';

export default class Card {
  constructor(id, text, state = CardStates.DEFAULT) {
    this.text = text;
    this.state = state;
    this.type = 'default';
    this.id = id || getIdRandom();
    this.className = 'card';
    this.element = this.createElement();
    this.activateListeners();
    new Draggable(this).setDraggable();
  }

  activateListeners() {
    this.element.addEventListener('mouseover', () => this.setState(CardStates.HOVER));
    this.element.addEventListener('mouseout', () => this.setState(CardStates.DEFAULT));
    this.element.addEventListener('mousedown', () => this.setState(CardStates.PRESS));
    this.element.addEventListener('mouseup', () => this.setState(CardStates.HOVER));
  }

  setClone(value) {
    this.isAClone = value;
    this.element.setAttribute('clone', value);
  }

  setState(state) {
    this.state = state;
    this.element.className = this.className;
    this.element.classList.add(this.state);
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add(this.className);
    div.id = 'Card-' + this.id;
    return div;
  }

  render(container) {
    container.appendChild(this.element);
  }
}
