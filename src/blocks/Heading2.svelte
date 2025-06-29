<svelte:options customElement="notion-heading2" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { buildHeadingId } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: id = block.Heading2 ? buildHeadingId(block.Heading2) : "";
</script>

{#if block.Heading2}
  {#if block.Heading2.IsToggleable}
    <details class="toggle">
      <summary>
        <a href="#{id}" {id}>
          <h4>
            {#each block.Heading2.RichTexts as richText}
              <RichText {richText} />
            {/each}
          </h4>
        </a>
      </summary>
      <div>
        {#if block.Heading2.Children}
          <NotionBlocks blocks={block.Heading2.Children} {headings} />
        {/if}
      </div>
    </details>
  {:else}
    <a href="#{id}" {id}>
      <h4>
        {#each block.Heading2.RichTexts as richText}
          <RichText {richText} />
        {/each}
      </h4>
    </a>
  {/if}
{/if}

<style>
  h4 {
    margin: 1em 0 0.3em;
    color: var(--fg, #000);
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    h4 {
      font-size: 1.2rem;
    }
  }

  .toggle {
    margin: 1.6rem 0 0;
  }

  @media (max-width: 640px) {
    .toggle {
      margin: 1.2rem 0 0;
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

  .toggle > summary > a > h4 {
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
