<svelte:options customElement="notion-numbered-list" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];
  export let level: Props["level"] = 0;

  $: numberedListItems =
    block.ListItems?.filter((b) => b.Type === "numbered_list_item") || [];
  $: listTypes = ["1", "i", "a"] as const;
  $: listType = listTypes[level % 3] as "1" | "i" | "a";
</script>

{#if numberedListItems.length > 0}
  <ol class="numbered-list" type={listType}>
    {#each numberedListItems as item}
      {#if item.NumberedListItem}
        <li
          class="numbered-list-item {snakeToKebab(item.NumberedListItem.Color)}"
        >
          {#each item.NumberedListItem.RichTexts as richText}
            <RichText {richText} />
          {/each}
          {#if item.HasChildren && item.NumberedListItem.Children}
            <NotionBlocks
              blocks={item.NumberedListItem.Children}
              {headings}
              level={level + 1}
            />
          {/if}
        </li>
      {/if}
    {/each}
  </ol>
{/if}

<style>
  .numbered-list {
    font-size: 1rem;
    margin: 0.3rem 0;
    padding-left: 1.5rem;
  }

  .numbered-list-item {
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
