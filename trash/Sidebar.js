import './Sidebar.css';

export default class Sidebar {
  constructor(text) {
    this.name = 'sidebar';
    this.text = text;
    this.element = this.createElement();
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add(this.name);
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

  handleClick() {
    console.log(`Button clicked! ${this.text}`);
  }

  render(container) {
    container.appendChild(this.element);
  }
}
