import Droppable from '../../draganddrop/Droppable';
import './PanelRow.css';

export default class PanelRow {
  constructor(text) {
    this.name = 'panelRow';
    this.text = text;
    this.element = this.createElement();
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add(this.name);
    div.classList.add(this.text.toLowerCase());

    div.appendChild(this.createHeader());
    div.appendChild(this.createContainer());
    return div;
  }

  createHeader() {
    const header = document.createElement('div');
    header.classList.add(`${this.name}_header`);
    header.appendChild(this.createParagraph());
    return header;
  }

  createParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = this.text;
    return paragraph;
  }

  createContainer() {
    const container = document.createElement('div');
    container.classList.add(`${this.name}_content`);
    return container;
  }

  addCards(cards) {
    cards.forEach((card) => {
      this.element.querySelector(`.${this.name}_content`).appendChild(card.element);
    });
  }

  handleClick() {
    console.log(`Button clicked! ${this.text}`);
  }

  render(container) {
    container.appendChild(this.element);
  }
}
