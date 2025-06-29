<svelte:options
  customElement={{
    tag: "custom-element",
    shadow: "none",
    props: {
      name: { reflect: true, type: "Number", attribute: "element-index" },
    },
    extend: (customElementConstructor) => {
      // Extend the class so we can let it participate in HTML forms
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }

        // Add the function here, not below in the component so that
        // it's always available, not just when the inner Svelte component
        // is mounted
        randomIndex() {
          this.elementIndex = Math.random();
        }
      };
    },
  }}
/>

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: colorClass = block.Paragraph?.Color
    ? snakeToKebab(block.Paragraph.Color)
    : "";
</script>

{#if block.Paragraph}
  <p class="paragraph {colorClass}">
    {#each block.Paragraph.RichTexts as richText}
      <RichText {richText} />
    {/each}
    {#if block.Paragraph.Children}
      <NotionBlocks blocks={block.Paragraph.Children} {headings} />
    {/if}
  </p>
{/if}

<style>
  .paragraph {
    margin: 0.3rem 0;
    font-size: 1rem;
    min-height: 1.8rem;
    line-height: 1.6;
  }

  /* Notion color classes */
  .default {
    color: inherit;
  }

  .gray {
    color: rgba(120, 119, 116, 1);
  }

  .brown {
    color: rgba(159, 107, 83, 1);
  }

  .orange {
    color: rgba(217, 115, 13, 1);
  }

  .yellow {
    color: rgba(203, 145, 47, 1);
  }

  .green {
    color: rgba(68, 131, 97, 1);
  }

  .blue {
    color: rgba(51, 126, 169, 1);
  }

  .purple {
    color: rgba(144, 101, 176, 1);
  }

  .pink {
    color: rgba(193, 76, 138, 1);
  }

  .red {
    color: rgba(212, 76, 71, 1);
  }

  .gray-background {
    background-color: rgba(241, 241, 239, 1);
  }

  .brown-background {
    background-color: rgba(244, 238, 238, 1);
  }

  .orange-background {
    background-color: rgba(251, 236, 221, 1);
  }

  .yellow-background {
    background-color: rgba(251, 243, 219, 1);
  }

  .green-background {
    background-color: rgba(237, 243, 236, 1);
  }

  .blue-background {
    background-color: rgba(231, 243, 248, 1);
  }

  .purple-background {
    background-color: rgba(244, 240, 247, 0.8);
  }

  .pink-background {
    background-color: rgba(249, 238, 243, 0.8);
  }

  .red-background {
    background-color: rgba(253, 235, 236, 1);
  }
</style>
