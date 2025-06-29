# `smart-card`

A versatile, beautiful Web Component for creating interactive cards with multiple styles and features.

**[Demo](https://daviddarnes.github.io/smart-card/demo.html)** | **[Further reading](https://darn.es/web-component-github-starter-template/)**

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/daviddarnes/smart-card?file=smart-card.js&initialPath=/demo.html)

## ✨ Features

- **Multiple card types** with beautiful gradient backgrounds
- **Responsive design** with mobile optimization
- **Smooth animations** and micro-interactions
- **Configurable elevation** shadows (0-5 levels)
- **Image support** with automatic sizing
- **Badge system** for status indicators
- **Clickable cards** with URL support
- **Slot-based content** for maximum flexibility
- **Zero dependencies** - pure Web Components

## 🎨 Card Types

- `default` - Purple gradient background
- `product` - Pink gradient, perfect for e-commerce
- `profile` - Blue gradient, ideal for user profiles
- `article` - Green gradient, great for blog posts
- `minimal` - Clean white background with subtle border

## Examples

### Basic Usage

```html
<script type="module" src="smart-card.js"></script>

<smart-card title="My Card" subtitle="Card description">
  <p>Your content here</p>
</smart-card>
```

### Product Card

```html
<smart-card 
  type="product"
  title="Amazing Product"
  subtitle="The best product ever"
  image="https://example.com/product.jpg"
  badge="Sale"
  elevation="3"
>
  <p>Product description and features</p>
  <div slot="footer">
    <strong>$29.99</strong>
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
  <p>Passionate about creating beautiful user experiences.</p>
  <div slot="footer">
    <small>📍 San Francisco, CA</small>
  </div>
</smart-card>
```

### Clickable Card

```html
<smart-card 
  type="article"
  title="Read More"
  subtitle="Click to visit"
  href="https://example.com"
  elevation="2"
>
  <p>This card is clickable and will open the URL in a new tab.</p>
</smart-card>
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | String | `default` | Card style: `default`, `product`, `profile`, `article`, `minimal` |
| `title` | String | `""` | Main heading text |
| `subtitle` | String | `""` | Secondary text below title |
| `image` | String | `""` | Image URL to display in card header |
| `href` | String | `""` | Makes card clickable, opens URL in new tab |
| `badge` | String | `""` | Badge text displayed in top-right corner |
| `elevation` | String | `"2"` | Shadow depth level (0-5) |

## Slots

- **Default slot**: Main content area
- **`footer` slot**: Content displayed at the bottom of the card

## Styling

The component uses CSS custom properties and can be styled with CSS:

```css
smart-card {
  --card-border-radius: 16px;
  --card-padding: 32px;
}
```

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/smart-card): `npm install @daviddarnes/smart-card`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/smart-card/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="smart-card.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/smart-card@1.0.0/smart-card.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/smart-card@1.0.0"
></script>
```

## Browser Support

This Web Component works in all modern browsers that support:
- Custom Elements v1
- Shadow DOM v1
- ES6 Classes

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/zachleat/web-component-template)