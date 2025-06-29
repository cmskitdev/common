<svelte:options customElement="notion-bookmark" />

<script lang="ts">
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {
    urlMap?: Record<string, string>;
  }

  export let block: Props["block"];
  export let urlMap: Props["urlMap"] = {};

  $: urlString =
    block.Bookmark?.Url || block.LinkPreview?.Url || block.Embed?.Url || "";
</script>

{#if urlString}
  <div class="bookmark">
    <a href={urlString} target="_blank" rel="noopener noreferrer">
      <div class="bookmark-content">
        <div class="bookmark-title">Link</div>
        <div class="bookmark-description">{urlString}</div>
        <div class="bookmark-link">
          <img
            src={`https://www.google.com/s2/favicons?domain=${new URL(urlString).hostname}`}
            alt="Favicon"
            loading="lazy"
          />
          <span>{new URL(urlString).origin}</span>
        </div>
      </div>
    </a>
  </div>
{/if}

<style>
  .bookmark {
    display: flex;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .bookmark a {
    width: 100%;
    box-sizing: border-box;
    text-decoration: none;
    border: 1px solid rgba(55, 53, 47, 0.16);
    border-radius: 3px;
    display: flex;
    overflow: hidden;
    user-select: none;
    color: inherit;
  }

  .bookmark-content {
    flex: 1;
    padding: 12px 14px 14px;
    overflow: hidden;
    text-align: left;
  }

  .bookmark-title {
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 24px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .bookmark-description {
    font-size: 12px;
    line-height: 16px;
    opacity: 0.8;
    height: 32px;
    overflow: hidden;
  }

  .bookmark-link {
    display: flex;
    align-items: center;
    margin-top: 6px;
    gap: 6px;
  }

  .bookmark-link img {
    width: 16px;
    height: 16px;
  }

  .bookmark-link span {
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
