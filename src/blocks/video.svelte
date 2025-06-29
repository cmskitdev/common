<svelte:options customElement="notion-video" />

<script lang="ts">
  import Caption from "./Caption.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { isYouTubeURL, parseYouTubeVideoId } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];

  let url: URL | null = null;

  $: {
    try {
      if (block.Video?.External?.Url) {
        url = new URL(block.Video.External.Url);
      }
    } catch (err) {
      console.log(err);
      url = null;
    }
  }
</script>

{#if block.Video && url}
  <div class="video">
    <div class="video-container">
      {#if isYouTubeURL(url)}
        <iframe
          src={`https://www.youtube.com/embed/${parseYouTubeVideoId(url)}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      {:else}
        <video controls>
          <source src={url.toString()} />
          Your browser does not support the video tag.
        </video>
      {/if}
    </div>
    <Caption richTexts={block.Video.Caption} />
  </div>
{/if}

<style>
  .video-container {
    width: 100%;
    margin: 0.5rem 0;
  }

  .video-container iframe,
  .video-container video {
    width: 100%;
    height: 340px;
  }

  @media (max-width: 640px) {
    .video-container iframe,
    .video-container video {
      height: 220px;
    }
  }
</style>
