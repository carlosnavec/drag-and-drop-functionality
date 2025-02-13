export default class PrintAreaModel {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard(cardId) {
    this.cards = this.cards.filter((card) => card.id !== cardId);
  }

  getCards() {
    return this.cards;
  }
}
