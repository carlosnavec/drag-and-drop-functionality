import Card from './Card';
import { CardTypes } from './CardConstants';
import CardImage from './CardImage';
import CardText from './CardText';

class CardFactory {
  static createCard(type, id) {
    switch (type) {
      case CardTypes.IMAGE:
        return new CardImage(id);
      case CardTypes.TEXT:
        return new CardText(id);
      default:
        return new Card(id);
    }
  }
}

export default CardFactory;
