/**
 * Example usage of Notion Blocks components
 */

import type { Block } from "./types.js";

// Example block data structure
export const exampleBlocks: Block[] = [
  {
    Id: "1",
    Type: "heading_1",
    HasChildren: false,
    Heading1: {
      RichTexts: [
        {
          Text: { Content: "Welcome to Notion Blocks" },
          Annotation: {
            Bold: false,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: "Welcome to Notion Blocks",
        },
      ],
      Color: "default",
      IsToggleable: false,
    },
  },
  {
    Id: "2",
    Type: "paragraph",
    HasChildren: false,
    Paragraph: {
      RichTexts: [
        {
          Text: { Content: "This is a sample paragraph with " },
          Annotation: {
            Bold: false,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: "This is a sample paragraph with ",
        },
        {
          Text: { Content: "bold text" },
          Annotation: {
            Bold: true,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: "bold text",
        },
        {
          Text: { Content: " and " },
          Annotation: {
            Bold: false,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: " and ",
        },
        {
          Text: { Content: "italic text" },
          Annotation: {
            Bold: false,
            Italic: true,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: "italic text",
        },
      ],
      Color: "default",
    },
  },
  {
    Id: "3",
    Type: "code",
    HasChildren: false,
    Code: {
      RichTexts: [
        {
          Text: { Content: 'console.log("Hello, World!");' },
          Annotation: {
            Bold: false,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: 'console.log("Hello, World!");',
        },
      ],
      Language: "javascript",
      Caption: [],
    },
  },
  {
    Id: "4",
    Type: "callout",
    HasChildren: false,
    Callout: {
      RichTexts: [
        {
          Text: { Content: "This is an important callout message!" },
          Annotation: {
            Bold: false,
            Italic: false,
            Strikethrough: false,
            Underline: false,
            Code: false,
            Color: "default",
          },
          PlainText: "This is an important callout message!",
        },
      ],
      Icon: {
        Type: "emoji",
        Emoji: "💡",
      },
      Color: "blue_background",
    },
  },
];

// Example usage in a Svelte component:
/*
<script lang="ts">
  import { NotionBlocks } from '@cmskit/common/blocks';
  import { exampleBlocks } from '@cmskit/common/blocks/example';
  
  let blocks = exampleBlocks;
</script>

<div class="notion-content">
  <NotionBlocks {blocks} />
</div>

<style>
  .notion-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }
</style>
*/
