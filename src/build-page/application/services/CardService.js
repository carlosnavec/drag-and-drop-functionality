import GetCardsByPrintArea from '../usescases/GetCardsByPrintArea';
import RemoveCardToPrintArea from '../usescases/RemoveCardFromPrintArea';
import SaveCardToPrintArea from '../usescases/SaveCardToPrintArea';

export default class CardService {
  constructor() {}

  saveCard(printAreaText, cardId) {
    this.saveCardToPrintArea = new SaveCardToPrintArea();
    this.saveCardToPrintArea.execute(printAreaText, cardId);
  }

  removeCard(printAreaText, cardId) {
    this.removeCardFromPrintArea = new RemoveCardToPrintArea();
    this.removeCardFromPrintArea.execute(printAreaText, cardId);
  }
  getCardsByPrintArea(areaName) {
    this.getCardsByPrintArea = new GetCardsByPrintArea();
    return this.getCardsByPrintArea.execute(areaName);
  }
}
