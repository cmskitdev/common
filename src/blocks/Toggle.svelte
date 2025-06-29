<svelte:options customElement="notion-toggle" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: colorClass = block.Toggle?.Color ? snakeToKebab(block.Toggle.Color) : "";
</script>

{#if block.Toggle}
  <details class="toggle {colorClass}">
    <summary>
      {#each block.Toggle.RichTexts as richText}
        <RichText {richText} />
      {/each}
    </summary>
    <div class="toggle-content">
      <NotionBlocks blocks={block.Toggle.Children} {headings} />
    </div>
  </details>
{/if}

<style>
  .toggle {
    padding: 0.4rem;
    margin: 0.3rem 0;
  }

  .toggle > summary {
    cursor: pointer;
    font-weight: 500;
  }

  .toggle > summary > a {
    display: inline;
  }

  .toggle-content {
    margin-left: 1em;
    margin-top: 0.5rem;
  }
</style>
