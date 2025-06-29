# Web Component Template

This repository serves as a template for creating Web Components. It includes:

## What's Included

- **Template files** for creating new components:
  - `component-name.js` - Basic Web Component structure
  - `component-name.html` - Demo page template
  - `README-TEMPLATE.md` - Documentation template
  - `package-template.json` - NPM package template

- **Example implementation** (smart-card):
  - `smart-card.js` - Fully featured card component
  - `index.html` - Complete demo site
  - `snippets.html` - Code examples and playground
  - All supporting documentation

## Creating a New Component

1. **Copy the template files:**
   ```bash
   cp component-name.js your-component.js
   cp component-name.html your-component.html
   cp README-TEMPLATE.md README.md
   cp package-template.json package.json
   ```

2. **Find and replace:**
   - `component-name` → `your-component`
   - `ComponentName` → `YourComponent`
   - `@your-username/component-name` → `@your-username/your-component`
   - Update descriptions, URLs, and author information

3. **Implement your component:**
   - Add your component logic to `your-component.js`
   - Update the demo page in `your-component.html`
   - Document your component in `README.md`

4. **Publish:**
   - Update `package.json` with correct information
   - Run `npm publish` to publish to NPM
   - Enable GitHub Pages for live demo

## Features

- ✅ **Modern Web Components** - Uses Custom Elements v1 and Shadow DOM
- ✅ **Development Server** - Vite for fast development
- ✅ **NPM Publishing** - Ready for package distribution
- ✅ **CDN Support** - Works with unpkg and esm.sh
- ✅ **Documentation** - Complete README template
- ✅ **Demo Pages** - HTML templates for showcasing
- ✅ **GitHub Actions** - Automated NPM publishing

## Example: Smart Card Component

This repository includes a complete example implementation of a smart card component that demonstrates:

- Multiple component types and styles
- Attribute-based configuration
- Slot-based content architecture
- Responsive design
- Interactive features
- Professional documentation
- Code playground

## Browser Support

Components created with this template work in all modern browsers that support:
- Custom Elements v1
- Shadow DOM v1
- ES6 Classes

## Credit

Based on the excellent work by:
- [David Darnes](https://darn.es/) - Original component template
- [Zach Leatherman](https://zachleat.com) - Web Component inspiration