import LocalStoragePrintAreaRepository from '../../infraestructure/adapters/repositories/LocalStoragePrintAreaRepository';

export default class RemoveCardToPrintArea {
  constructor() {
    this.areaRepository = new LocalStoragePrintAreaRepository();
  }

  execute(areaName, cardId) {
    const area = this.areaRepository.getAreaByName(areaName) || { name: areaName, cards: [] };
    const cardIndex = area.cards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      area.cards.splice(cardIndex, 1);
    }
    this.areaRepository.saveArea(area);
  }
}
