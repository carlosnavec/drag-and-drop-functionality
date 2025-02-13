import CardService from '../../application/services/CardService';
import CardDTO from '../dtos/CardDTO';
import CardFactory from '../views/cards/CardFactory';
import CardImage from '../views/cards/CardImage';
import CardText from '../views/cards/CardText';

export default class Droppable {
  constructor(printArea) {
    this.printArea = printArea;
    this.element = printArea.element;
    this.cardService = new CardService();
  }

  setDroppable() {
    this.element.addEventListener('drop', (event) => {
      const dataCardInString = event.dataTransfer.getData('text');
      const cardDropped = JSON.parse(dataCardInString);
      console.log('cardsAllowed', this.printArea.cardsAllowed, cardDropped, event.target.id);

      if (this.printArea.cardsAllowed.includes(cardDropped.type)) {
        const cardCloned = CardFactory.createCard(cardDropped.type, cardDropped.id);
        cardCloned.setClone(true);

        let placeholder = event.target.querySelector('.placeholder') || event.target;
        placeholder = placeholder.closest('.placeholder');

        if (placeholder && !this.printArea.cardsAllowed.includes(placeholder.id)) {
          cardCloned.render(placeholder);
          placeholder.classList.add('items');

          const cardData = new CardDTO(cardCloned.id, cardCloned.type);
          this.cardService.saveCard(placeholder.id, cardData);
        } else {
          console.error('No placeholder found');
        }
      }
    });

    this.element.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  }
}
