<svelte:options customElement="notion-todo" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: todoItems = block.ListItems?.filter((b) => b.Type === "to_do") || [];
</script>

{#if todoItems.length > 0}
  <div class="to-do">
    {#each todoItems as item}
      {#if item.ToDo}
        <div class="to-do-item {snakeToKebab(item.ToDo.Color)}">
          <input type="checkbox" checked={item.ToDo.Checked} disabled />
          <span class="to-do-content" class:completed={item.ToDo.Checked}>
            {#each item.ToDo.RichTexts as richText}
              <RichText {richText} />
            {/each}
          </span>
          {#if item.HasChildren && item.ToDo.Children}
            <NotionBlocks blocks={item.ToDo.Children} {headings} />
          {/if}
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .to-do {
    color: #222;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8rem;
    margin: 0.3rem 0;
  }

  .to-do-item {
    display: flex;
    align-items: flex-start;
    margin: 0.2rem 0;
    gap: 0.5rem;
  }

  .to-do-item input[type="checkbox"] {
    margin-top: 0.1rem;
    flex-shrink: 0;
  }

  .to-do-content {
    flex: 1;
  }

  .to-do-content.completed {
    text-decoration: line-through;
    color: rgba(120, 119, 116, 0.8);
  }
</style>
