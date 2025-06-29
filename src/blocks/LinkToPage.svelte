<svelte:options customElement="notion-link-to-page" />

<script lang="ts">
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
</script>

{#if block.LinkToPage}
  <p class="link-to-page">
    <a href="/page/{block.LinkToPage.PageId}" class="page-link">
      📄 Link to page
    </a>
  </p>
{/if}

<style>
  .link-to-page {
    margin: 0.5rem 0;
  }

  .page-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 600;
    text-decoration: underline;
    color: inherit;
  }

  .page-link:hover {
    opacity: 0.8;
  }
</style>
