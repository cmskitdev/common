<svelte:options customElement="notion-image" />

<script lang="ts">
  import Caption from "./Caption.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { filePath } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let enableLightbox: boolean = false;

  $: image =
    block.Image?.External?.Url ||
    (block.Image?.File ? filePath(new URL(block.Image.File.Url)) : "");
</script>

{#if block.Image && image}
  <figure class="image">
    <div class="image-container">
      <div class="image-wrapper">
        {#if enableLightbox}
          <a data-fslightbox href={image} data-type="image">
            <img src={image} alt="Image in a image block" loading="lazy" />
          </a>
        {:else}
          <img src={image} alt="Image in a image block" loading="lazy" />
        {/if}
      </div>
      <Caption richTexts={block.Image.Caption} />
    </div>
  </figure>
{/if}

<style>
  .image {
    display: flex;
    margin: 0.2rem auto 0;
  }

  .image-container {
    margin: 0 auto;
  }

  .image-wrapper {
    /* Wrapper for the image */
  }

  .image-wrapper img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .image-wrapper a {
    display: block;
  }
</style>
