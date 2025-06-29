<svelte:options customElement="notion-file" />

<script lang="ts">
  import Caption from "./Caption.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { filePath } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];

  let url: URL | null = null;
  let filename = "";

  $: {
    try {
      if (block.File?.External?.Url || block.File?.File?.Url) {
        url = new URL(block.File.External?.Url || block.File.File?.Url || "");
        filename = decodeURIComponent(url.pathname.split("/").slice(-1)[0]);
      }
    } catch (err) {
      console.error(`Invalid file URL. error: ${err}`);
      url = null;
      filename = "";
    }
  }
</script>

{#if block.File && url}
  <div class="file">
    <div class="file-link">
      <a
        href={block.File.External ? url.toString() : filePath(url)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.notion.so/icons/document_gray.svg"
          alt="File icon in a file block"
        />
        {filename}
      </a>
    </div>
    <Caption richTexts={block.File.Caption} />
  </div>
{/if}

<style>
  .file {
    margin: 0.5rem 0;
  }

  .file-link a {
    display: block;
    padding: 0.5rem 0.2rem 0.4rem;
    border-radius: var(--radius, 4px);
    color: var(--fg, #000);
    font-weight: 500;
    line-height: 1.4rem;
    text-decoration: none;
  }

  .file-link a:hover {
    background-color: #eee;
  }

  .file-link a img {
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: sub;
    margin-right: 0.5rem;
  }
</style>
