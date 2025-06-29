<svelte:options customElement="notion-caption" />

<script lang="ts">
  import type { RichText } from "./types.js";

  interface Props {
    richTexts: RichText[];
  }

  export let richTexts: RichText[];

  $: hasContent =
    richTexts.length > 0 &&
    richTexts[0].Text?.Content &&
    richTexts[0].Text.Content.trim() !== "";
</script>

{#if hasContent}
  <div class="caption">
    <div>{richTexts[0].Text?.Content}</div>
  </div>
{/if}

<style>
  .caption {
    display: flex;
    margin-top: 0.3rem;
    font-size: 0.9rem;
    color: rgba(120, 119, 116, 0.8);
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.4;
  }

  .caption > div {
    flex-grow: 1;
    width: 0;
  }
</style>
