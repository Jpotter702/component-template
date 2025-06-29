# Smart Card Web Component

> A modern, versatile Web Component for creating beautiful interactive cards with multiple styles and smooth animations.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/Jpotter702/component-template)

## ✨ Features

- 🎨 **5 Beautiful Card Types** - Default, Product, Profile, Article, and Minimal styles
- 🌈 **Stunning Gradients** - Eye-catching gradient backgrounds for each card type
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Hover effects and micro-interactions
- 🎯 **Interactive Elements** - Clickable cards with URL support
- 🏷️ **Badge System** - Status indicators and labels
- 📐 **Elevation Control** - 6 levels of shadow depth (0-5)
- 🖼️ **Image Support** - Automatic image sizing and optimization
- 🔧 **Slot Architecture** - Flexible content with header, body, and footer slots
- 🚀 **Zero Dependencies** - Pure Web Components, no frameworks required
- 💡 **Modern Development** - Built with Vite for fast development

## 🚀 Quick Start

### Development

```bash
# Clone the repository
git clone https://github.com/Jpotter702/component-template.git
cd component-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Installation

Choose your preferred installation method:

### NPM
```bash
npm install @jpotter702/smart-card
```

### CDN (ESM)
```html
<script type="module" src="https://esm.sh/@jpotter702/smart-card@1.0.0"></script>
```

### Direct Download
Download `smart-card.js` from the [releases page](https://github.com/Jpotter702/component-template/releases)

## 🎨 Card Types & Examples

### Default Card
```html
<smart-card type="default" title="Welcome" subtitle="Getting started" badge="New">
  <p>Beautiful purple gradient background perfect for general use.</p>
  <div slot="footer">
    <small>Default styling</small>
  </div>
</smart-card>
```

### Product Card
```html
<smart-card 
  type="product" 
  title="Amazing Product" 
  subtitle="Best seller" 
  image="https://example.com/product.jpg"
  badge="Sale"
  elevation="3"
>
  <p>Perfect for e-commerce with vibrant pink gradients.</p>
  <div slot="footer">
    <strong>$29.99</strong> <del>$39.99</del>
  </div>
</smart-card>
```

### Profile Card
```html
<smart-card 
  type="profile" 
  title="Sarah Johnson" 
  subtitle="Senior Developer" 
  image="https://example.com/avatar.jpg"
  badge="Online"
>
  <p>Ideal for user profiles with cool blue gradients.</p>
  <div slot="footer">
    <small>📍 San Francisco, CA</small>
  </div>
</smart-card>
```

### Article Card
```html
<smart-card 
  type="article" 
  title="Web Components Guide" 
  subtitle="Learn modern development" 
  image="https://example.com/article.jpg"
  href="https://example.com/article"
>
  <p>Great for blog posts with fresh green gradients.</p>
  <div slot="footer">
    <small>5 min read • March 2024</small>
  </div>
</smart-card>
```

### Minimal Card
```html
<smart-card 
  type="minimal" 
  title="Clean Design" 
  subtitle="Simple and elegant"
  elevation="1"
>
  <p>Clean white background with subtle borders.</p>
</smart-card>
```

## 🔧 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `string` | `"default"` | Card style: `default`, `product`, `profile`, `article`, `minimal` |
| `title` | `string` | `""` | Main heading text |
| `subtitle` | `string` | `""` | Secondary text below title |
| `image` | `string` | `""` | Image URL for card header |
| `href` | `string` | `""` | Makes card clickable, opens URL in new tab |
| `badge` | `string` | `""` | Badge text in top-right corner |
| `elevation` | `string` | `"2"` | Shadow depth level (0-5) |

### Slots

| Slot | Description |
|------|-------------|
| Default | Main content area of the card |
| `footer` | Content displayed at the bottom of the card |

### CSS Custom Properties

```css
smart-card {
  --card-border-radius: 12px;
  --card-padding: 24px;
  --card-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🎯 Interactive Features

### Hover Effects
- Cards lift up on hover with smooth animations
- Shadow depth increases dynamically
- Subtle overlay effects for enhanced visual feedback

### Clickable Cards
- Add `href` attribute to make cards clickable
- Opens links in new tabs automatically
- Cursor changes to pointer for better UX

### Responsive Design
- Mobile-first approach with breakpoints
- Flexible grid layouts
- Optimized touch targets for mobile devices

## 🌟 Advanced Usage

### Custom Styling
```css
/* Override default styles */
smart-card {
  --card-border-radius: 20px;
  --card-padding: 32px;
}

/* Target specific card types */
smart-card[type="product"] {
  max-width: 350px;
}
```

### Dynamic Content
```javascript
// Create cards programmatically
const card = document.createElement('smart-card');
card.setAttribute('type', 'product');
card.setAttribute('title', 'Dynamic Card');
card.innerHTML = '<p>Created with JavaScript!</p>';
document.body.appendChild(card);
```

### Event Handling
```javascript
// Listen for card interactions
document.querySelectorAll('smart-card').forEach(card => {
  card.addEventListener('click', (e) => {
    console.log('Card clicked:', e.target.getAttribute('title'));
  });
});
```

## 🌐 Browser Support

Works in all modern browsers that support:
- ✅ Custom Elements v1
- ✅ Shadow DOM v1  
- ✅ ES6 Classes
- ✅ CSS Grid & Flexbox

### Supported Browsers
- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## 🛠️ Development

### Project Structure
```
component-template/
├── smart-card.js          # Main Web Component
├── index.html            # Demo page
├── demo.html            # Original demo (legacy)
├── package.json         # Dependencies & scripts
├── README.md           # Original documentation
└── README-NEW.md       # This file
```

### Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your fork and submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **David Darnes** - Original creator and maintainer
- **Zach Leatherman** - Web Component template inspiration
- **Pexels** - Demo images

## 🔗 Links

- [GitHub Repository](https://github.com/Jpotter702/component-template)
- [NPM Package](https://www.npmjs.com/package/@jpotter702/smart-card)
- [Live Demo](https://jpotter702.github.io/component-template/)
- [Author Website](https://darn.es/)

---

<div align="center">
  <strong>Made with ❤️ by <a href="https://darn.es/">David Darnes</a></strong>
</div>