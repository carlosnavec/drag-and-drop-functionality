import LocalStoragePrintAreaRepository from '../../infraestructure/adapters/repositories/LocalStoragePrintAreaRepository';

export default class GetCardsByPrintArea {
  constructor() {
    this.areaRepository = new LocalStoragePrintAreaRepository();
  }

  execute(areaName) {
    const area = this.areaRepository.getAreaByName(areaName) || { name: areaName, cards: [] };
    return area.cards;
  }
}
