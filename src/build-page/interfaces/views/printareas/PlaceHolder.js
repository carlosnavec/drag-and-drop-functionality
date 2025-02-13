import CardService from '../../../application/services/CardService';
import CardFactory from '../cards/CardFactory';
import './PlaceHolder.css';
import PlaceHolderStates from './PlaceHolderStates';

export default class PlaceHolder {
  constructor(
    printAreaName,
    text = 'Drag and drop an element or component into this section',
    state = PlaceHolderStates.DEFAULT,
  ) {
    this.printAreaName = printAreaName;
    this.text = text;
    this.state = state;
    this.element = this.createElement();
    this.cardService = new CardService();
    this.addCardsFromRepository();
  }

  setState(state) {
    this.state = state;
    this.element.className = 'placeholder';
    this.element.classList.add(this.state);
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add('placeholder');
    div.id = this.printAreaName.toLowerCase();

    const paragraph = document.createElement('p');
    paragraph.id = 'placeholderText';
    paragraph.textContent = this.text;
    div.appendChild(paragraph);

    return div;
  }

  addCardsFromRepository() {
    const cards = this.cardService.getCardsByPrintArea(this.printAreaName.toLowerCase());
    if (cards.length > 0) {
      this.element.classList.add('items');
      cards.map((card) => {
        const cardCloned = CardFactory.createCard(card.type, card.id);
        cardCloned.setClone(true);
        cardCloned.render(this.element);
      });
    }
  }

  render(container) {
    if (this.element) {
      container.appendChild(this.element);
    }
  }
}
