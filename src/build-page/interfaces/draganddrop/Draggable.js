import CardService from '../../application/services/CardService';
import { CardStates } from '../views/cards/CardConstants';

export default class Draggable {
  constructor(card) {
    this.card = card;
    this.element = card.element;
    this.cardService = new CardService();
  }

  setDraggable() {
    this.element.setAttribute('draggable', true);
    this.element.addEventListener('dragstart', this.handlerDragStart.bind(this));
    this.element.addEventListener('dragend', this.handlerDragEnd.bind(this));
  }

  handlerDragStart(event) {
    this.card.setState(CardStates.DRAGGING);
    event.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ type: this.card.type, id: this.card.id }),
    );
    event.dataTransfer.effectAllowed = 'copyMove';
  }

  handlerDragEnd(event) {
    this.card.setState(CardStates.DEFAULT);
    const isACloneFromOriginal = event.target.getAttribute('clone');
    const placeHolder = event.target.parentElement;
    if (isACloneFromOriginal) {
      placeHolder.removeChild(event.target);
      this.cardService.removeCard(placeHolder.id, this.card.id);
      if (placeHolder.querySelector('div') === null) {
        placeHolder.classList.remove('items');
      }
    }
  }
}
