import LocalStoragePrintAreaRepository from '../../infraestructure/adapters/repositories/LocalStoragePrintAreaRepository';
import CardImage from './cards/CardImage';
import CardText from './cards/CardText';
import PanelRow from './panels/PanelRow';
import PrintArea from './printareas/PrintArea';
import { PrintAreaSetting } from './printareas/printAreaSetting';
import './index.css';

const printAreaRepository = new LocalStoragePrintAreaRepository();

export function buildPanelCanvas() {
  const canvas = new PanelRow('Canvas');
  const printAreasInCanvas = [];

  PrintAreaSetting.map((setting) => {
    printAreasInCanvas.push(new PrintArea(setting));
  });

  canvas.addCards(printAreasInCanvas);
  canvas.render(document.getElementById('app'));
}

export function buildPanelCards() {
  const sidebar = new PanelRow('Elements');
  const cards = [new CardText(0), new CardImage(0)];

  sidebar.addCards(cards);
  sidebar.render(document.getElementById('app'));
}
