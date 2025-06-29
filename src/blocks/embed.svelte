<svelte:options customElement="notion-embed" />

<script lang="ts">
  import Bookmark from "./Bookmark.svelte";
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {
    urlMap?: Record<string, string>;
  }

  export let block: Props["block"];
  export let urlMap: Props["urlMap"] = {};
</script>

{#if block.Embed}
  <!-- For now, just render as a bookmark. In a full implementation, 
       you'd check the URL type and render appropriate embed components -->
  <Bookmark {block} {urlMap} />
{/if}
