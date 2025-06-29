# Notion Blocks - Svelte 5 Web Components

A complete set of Svelte 5 web components for rendering Notion blocks with 100% TypeScript typing.

## Features

- ✅ **Full TypeScript Support**: Complete type definitions for all Notion block types
- ✅ **Svelte 5 Compatible**: Built using modern Svelte 5 syntax and patterns
- ✅ **True Web Components**: Compiled as custom elements that work across any framework
- ✅ **Modular Design**: Import only the components you need
- ✅ **Rich Text Support**: Complete support for Notion's rich text formatting
- ✅ **Color Support**: Full support for Notion's color system
- ✅ **Responsive**: Mobile-friendly responsive design

## Installation

```bash
npm install @cmskit/common
```

## Usage

### As Svelte Components

```svelte
<script>
  import { NotionBlocks } from '@cmskit/common/blocks';
  
  export let blocks = []; // Array of Notion blocks
  export let headings = []; // Array of heading blocks for TOC
</script>

<NotionBlocks {blocks} {headings} />
```

### As Web Components

Since these are compiled as custom elements, you can use them in any framework or vanilla JavaScript:

```html
<!-- In HTML -->
<notion-blocks></notion-blocks>

<script>
  // Set properties
  const notionBlocks = document.querySelector('notion-blocks');
  notionBlocks.blocks = [...]; // Your block data
  notionBlocks.headings = [...]; // Your heading data
</script>
```

```jsx
// In React
function MyComponent() {
  return (
    <notion-blocks 
      blocks={blockData} 
      headings={headingData}
    />
  );
}
```

```vue
<!-- In Vue -->
<template>
  <notion-blocks 
    :blocks="blockData" 
    :headings="headingData"
  />
</template>
```

### Custom Element Names

All components are registered with the `notion-` prefix:

- `<notion-blocks>` - Main container component
- `<notion-paragraph>` - Paragraph blocks
- `<notion-heading1>`, `<notion-heading2>`, `<notion-heading3>` - Heading blocks
- `<notion-quote>` - Quote blocks
- `<notion-code>` - Code blocks with syntax highlighting
- `<notion-bulleted-list>` - Bulleted lists
- `<notion-numbered-list>` - Numbered lists
- `<notion-todo>` - Todo/checkbox lists
- `<notion-image>` - Image blocks
- `<notion-video>` - Video embeds
- `<notion-file>` - File attachments
- `<notion-embed>` - Generic embeds
- `<notion-bookmark>` - Link previews
- `<notion-callout>` - Callout blocks
- `<notion-toggle>` - Collapsible sections
- `<notion-table>` - Data tables
- `<notion-column-list>` - Multi-column layouts
- `<notion-divider>` - Horizontal dividers
- `<notion-equation>` - Math equations
- `<notion-table-of-contents>` - Table of contents
- `<notion-link-to-page>` - Internal page links
- `<notion-synced-block>` - Synced content
- `<notion-rich-text>` - Rich text renderer
- `<notion-caption>` - Media captions

### Individual Components

```svelte
<script>
  import { 
    Paragraph, 
    Heading1, 
    Code, 
    Image 
  } from '@cmskit/common/blocks';
</script>

<Paragraph {block} />
<Heading1 {block} {headings} />
<Code {block} />
<Image {block} enableLightbox={true} />
```

## Component API

### Core Components

#### `NotionBlocks` / `<notion-blocks>`
Main component that renders an array of blocks.

**Props:**
- `blocks: Block[]` - Array of Notion blocks to render
- `headings?: Block[]` - Array of heading blocks for table of contents
- `urlMap?: Record<string, string>` - URL mapping for bookmark metadata
- `level?: number` - Nesting level for numbered lists

#### `RichText` / `<notion-rich-text>`
Renders Notion rich text with all formatting.

**Props:**
- `richText: RichText` - Rich text object to render

#### `Caption` / `<notion-caption>`
Renders captions for media blocks.

**Props:**
- `richTexts: RichText[]` - Array of rich text objects for the caption

### Block Components

All block components extend `BaseBlockProps`:

```typescript
interface BaseBlockProps {
  block: Block;
  headings?: Block[];
  urlMap?: Record<string, string>;
  level?: number;
}
```

## Types

### Core Types

```typescript
// Main block interface
interface Block {
  Id: string;
  Type: string;
  HasChildren: boolean;
  
  // Block-specific properties
  Paragraph?: Paragraph;
  Heading1?: Heading1;
  // ... other block types
}

// Rich text with formatting
interface RichText {
  Text?: Text;
  Annotation: Annotation;
  PlainText: string;
  Href?: string;
  Equation?: Equation;
  Mention?: Mention;
}

// Text annotations
interface Annotation {
  Bold: boolean;
  Italic: boolean;
  Strikethrough: boolean;
  Underline: boolean;
  Code: boolean;
  Color: string;
}
```

## Styling

The components use CSS custom properties for theming:

```css
:root {
  --fg: #000000;                    /* Foreground text color */
  --radius: 4px;                    /* Border radius */
  --accents-3: rgba(120, 119, 116, 0.8); /* Muted text color */
}
```

### Notion Colors

All components support Notion's color system:
- Text colors: `gray`, `brown`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `red`
- Background colors: Same colors with `_background` suffix

## Advanced Usage

### Custom URL Mapping

For bookmark components, you can provide pre-fetched metadata:

```svelte
<script>
  const urlMap = {
    'https://example.com': '<html>...</html>' // Pre-fetched HTML for metadata
  };
</script>

<NotionBlocks {blocks} {urlMap} />
```

### Lightbox Support

Enable lightbox for images:

```svelte
<Image {block} enableLightbox={true} />
```

### Custom Syntax Highlighting

The Code component supports custom syntax highlighting. Implement with Prism.js or similar:

```javascript
// In your app
import Prism from 'prismjs';
// Import language components as needed
```

## Compiling for Production

To compile these components as web components, ensure your Svelte configuration includes:

```javascript
// vite.config.js or svelte.config.js
export default {
  compilerOptions: {
    customElement: true
  }
}
```

## Dependencies

The components have minimal dependencies:
- Svelte 5.0+
- TypeScript 5.0+

Optional dependencies for enhanced features:
- `mermaid` - For diagram rendering in code blocks
- `katex` - For LaTeX equation rendering
- Syntax highlighting library (Prism.js, Shiki, etc.)

## Browser Support

- Modern browsers with ES2020+ support
- Full Web Components support (Custom Elements v1)
- Works with any JavaScript framework or vanilla JS

## Contributing

1. Follow the existing code style
2. Add proper TypeScript types for all new features
3. Include comprehensive documentation
4. Test components across different block types
5. Ensure web component compilation works correctly

## License

MIT License - see LICENSE file for details. 