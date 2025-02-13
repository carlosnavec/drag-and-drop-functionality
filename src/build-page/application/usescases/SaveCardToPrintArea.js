import LocalStoragePrintAreaRepository from '../../infraestructure/adapters/repositories/LocalStoragePrintAreaRepository';

export default class SaveCardToPrintArea {
  constructor() {
    this.areaRepository = new LocalStoragePrintAreaRepository();
  }

  execute(areaName, card) {
    const area = this.areaRepository.getAreaByName(areaName) || { name: areaName, cards: [] };
    area.cards.push(card);
    this.areaRepository.saveArea(area);
  }
}
