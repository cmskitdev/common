<svelte:options customElement="notion-column-list" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];
</script>

{#if block.ColumnList}
  <div class="column-list">
    {#each block.ColumnList.Columns as column}
      <div class="column">
        <NotionBlocks blocks={column.Children} {headings} />
      </div>
    {/each}
  </div>
{/if}

<style>
  .column-list {
    display: flex;
    width: 100%;
    margin: 1rem auto;
    gap: 1rem;
  }

  .column {
    flex: 1 1 180px;
    min-width: 180px;
  }

  @media (max-width: 640px) {
    .column-list {
      display: block;
    }

    .column {
      width: 100%;
      min-width: auto;
      margin-bottom: 1rem;
    }

    .column:last-child {
      margin-bottom: 0;
    }
  }
</style>
