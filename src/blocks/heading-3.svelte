<svelte:options customElement="notion-heading3" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { buildHeadingId } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: id = block.Heading3 ? buildHeadingId(block.Heading3) : "";
</script>

{#if block.Heading3}
  {#if block.Heading3.IsToggleable}
    <details class="toggle">
      <summary>
        <a href="#{id}" {id}>
          <h5>
            {#each block.Heading3.RichTexts as richText}
              <RichText {richText} />
            {/each}
          </h5>
        </a>
      </summary>
      <div>
        {#if block.Heading3.Children}
          <NotionBlocks blocks={block.Heading3.Children} {headings} />
        {/if}
      </div>
    </details>
  {:else}
    <a href="#{id}" {id}>
      <h5>
        {#each block.Heading3.RichTexts as richText}
          <RichText {richText} />
        {/each}
      </h5>
    </a>
  {/if}
{/if}

<style>
  h5 {
    margin: 0.9em 0 0.3em;
    color: var(--fg, #000);
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    h5 {
      font-size: 1.1rem;
    }
  }

  .toggle {
    margin: 1.2rem 0 0;
  }

  @media (max-width: 640px) {
    .toggle {
      margin: 1.1rem 0 0;
    }
  }

  .toggle > summary {
    cursor: pointer;
  }

  .toggle > summary > a {
    display: inline;
    text-decoration: none;
    color: inherit;
  }

  .toggle > summary > a > h5 {
    display: inline;
  }

  .toggle > div {
    margin-left: 1em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
