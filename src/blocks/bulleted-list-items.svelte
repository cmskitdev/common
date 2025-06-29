<svelte:options customElement="notion-bulleted-list" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: bulletedListItems =
    block.ListItems?.filter((b) => b.Type === "bulleted_list_item") || [];
</script>

{#if bulletedListItems.length > 0}
  <ul class="bulleted-list">
    {#each bulletedListItems as item}
      {#if item.BulletedListItem}
        <li
          class="bulleted-list-item {snakeToKebab(item.BulletedListItem.Color)}"
        >
          {#each item.BulletedListItem.RichTexts as richText}
            <RichText {richText} />
          {/each}
          {#if item.HasChildren && item.BulletedListItem.Children}
            <NotionBlocks blocks={item.BulletedListItem.Children} {headings} />
          {/if}
        </li>
      {/if}
    {/each}
  </ul>
{/if}

<style>
  .bulleted-list {
    font-size: 1rem;
    margin: 0.3rem 0;
    padding-left: 1.5rem;
  }

  .bulleted-list-item {
    margin: 0.2rem 0;
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
</style>
