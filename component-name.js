class ComponentName extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "component-name", ComponentName);
    }
  }

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<p>Hello world</p>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Handle attribute changes
  }
}

ComponentName.register();