<svelte:options customElement="notion-callout" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: colorClass = block.Callout?.Color ? snakeToKebab(block.Callout.Color) : "";
</script>

{#if block.Callout}
  <div class="callout {colorClass}">
    {#if block.Callout.Icon}
      <div class="icon">
        {#if block.Callout.Icon.Type === "emoji" && "Emoji" in block.Callout.Icon}
          {block.Callout.Icon.Emoji}
        {:else if block.Callout.Icon.Type === "external" && "Url" in block.Callout.Icon}
          <img src={block.Callout.Icon.Url} alt="Icon in a callout block" />
        {/if}
      </div>
    {/if}
    <div class="content">
      {#each block.Callout.RichTexts as richText}
        <RichText {richText} />
      {/each}
      {#if block.Callout.Children}
        <NotionBlocks blocks={block.Callout.Children} {headings} />
      {/if}
    </div>
  </div>
{/if}

<style>
  .callout {
    display: flex;
    margin: 0.4rem auto;
    padding: 16px 12px;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    background: rgba(235, 236, 237, 0.6);
  }

  .callout .content {
    margin: 0;
    line-height: 1.5rem;
    flex: 1;
  }

  .callout .icon {
    margin-right: 0.7rem;
    flex-shrink: 0;
  }

  .callout .icon img {
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
