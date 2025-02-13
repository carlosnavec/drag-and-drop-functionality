import { CardTypes } from '../cards/CardConstants';

export const PrintAreaSetting = [
  { title: 'Header', cardsAllowed: [CardTypes.IMAGE] },
  { title: 'Body', cardsAllowed: [CardTypes.TEXT, CardTypes.IMAGE] },
  { title: 'Footer', cardsAllowed: [CardTypes.TEXT, CardTypes.IMAGE] },
];
