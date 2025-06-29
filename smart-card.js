class SmartCard extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "smart-card", SmartCard);
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['type', 'title', 'subtitle', 'image', 'href', 'badge', 'elevation'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
    }
  }

  get type() {
    return this.getAttribute('type') || 'default';
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  get subtitle() {
    return this.getAttribute('subtitle') || '';
  }

  get image() {
    return this.getAttribute('image') || '';
  }

  get href() {
    return this.getAttribute('href') || '';
  }

  get badge() {
    return this.getAttribute('badge') || '';
  }

  get elevation() {
    return this.getAttribute('elevation') || '2';
  }

  setupEventListeners() {
    const card = this.shadowRoot.querySelector('.card');
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = this.getElevationShadow(parseInt(this.elevation) + 2);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = this.getElevationShadow(parseInt(this.elevation));
    });

    if (this.href) {
      card.addEventListener('click', () => {
        window.open(this.href, '_blank');
      });
      card.style.cursor = 'pointer';
    }
  }

  getElevationShadow(level) {
    const shadows = {
      0: 'none',
      1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    };
    return shadows[Math.min(level, 5)] || shadows[2];
  }

  getTypeStyles() {
    const types = {
      default: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff'
      },
      product: {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: '#ffffff'
      },
      profile: {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        color: '#ffffff'
      },
      article: {
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        color: '#ffffff'
      },
      minimal: {
        background: '#ffffff',
        color: '#333333',
        border: '1px solid #e1e5e9'
      }
    };
    return types[this.type] || types.default;
  }

  render() {
    const typeStyles = this.getTypeStyles();
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .card {
          background: ${typeStyles.background};
          color: ${typeStyles.color};
          border-radius: 12px;
          padding: 24px;
          box-shadow: ${this.getElevationShadow(parseInt(this.elevation))};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          ${typeStyles.border ? `border: ${typeStyles.border};` : ''}
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .card-image {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .card-content {
          flex: 1;
          min-width: 0;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .card-subtitle {
          font-size: 0.875rem;
          opacity: 0.8;
          margin: 0;
          line-height: 1.4;
        }

        .card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-body {
          line-height: 1.6;
        }

        .card-body ::slotted(*) {
          margin: 0 0 12px 0;
        }

        .card-body ::slotted(*:last-child) {
          margin-bottom: 0;
        }

        .card-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-footer ::slotted(*) {
          margin: 0;
        }

        @media (max-width: 480px) {
          .card {
            padding: 20px;
          }
          
          .card-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .card-image {
            width: 80px;
            height: 80px;
          }
        }
      </style>

      <div class="card">
        ${this.badge ? `<div class="card-badge">${this.badge}</div>` : ''}
        
        ${this.title || this.subtitle || this.image ? `
          <div class="card-header">
            ${this.image ? `<img class="card-image" src="${this.image}" alt="${this.title}" />` : ''}
            <div class="card-content">
              ${this.title ? `<h3 class="card-title">${this.title}</h3>` : ''}
              ${this.subtitle ? `<p class="card-subtitle">${this.subtitle}</p>` : ''}
            </div>
          </div>
        ` : ''}

        <div class="card-body">
          <slot></slot>
        </div>

        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

SmartCard.register();