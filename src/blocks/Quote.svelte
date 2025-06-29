<svelte:options customElement="notion-quote" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: colorClass = block.Quote?.Color ? snakeToKebab(block.Quote.Color) : "";
</script>

{#if block.Quote}
  <blockquote class="quote {colorClass}">
    {#each block.Quote.RichTexts as richText}
      <RichText {richText} />
    {/each}
    {#if block.Quote.Children}
      <NotionBlocks blocks={block.Quote.Children} {headings} />
    {/if}
  </blockquote>
{/if}

<style>
  .quote {
    margin: 0.6rem 0;
    padding: 0 0.9rem;
    border-left: 3px solid var(--fg, #000);
    font-size: 1rem;
    line-height: 1.8rem;
  }
</style>
