<svelte:options customElement="notion-synced-block" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];
</script>

{#if block.SyncedBlock?.Children}
  <NotionBlocks blocks={block.SyncedBlock.Children} {headings} />
{/if}
