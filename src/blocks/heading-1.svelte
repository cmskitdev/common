<svelte:options customElement="notion-heading1" />

<script lang="ts">
  import NotionBlocks from "./NotionBlocks.svelte";
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";
  import { buildHeadingId } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: id = block.Heading1 ? buildHeadingId(block.Heading1) : "";
</script>

{#if block.Heading1}
  {#if block.Heading1.IsToggleable}
    <details class="toggle">
      <summary>
        <a href="#{id}" {id}>
          <h3>
            {#each block.Heading1.RichTexts as richText}
              <RichText {richText} />
            {/each}
          </h3>
        </a>
      </summary>
      <div>
        {#if block.Heading1.Children}
          <NotionBlocks blocks={block.Heading1.Children} {headings} />
        {/if}
      </div>
    </details>
  {:else}
    <a href="#{id}" {id}>
      <h3>
        {#each block.Heading1.RichTexts as richText}
          <RichText {richText} />
        {/each}
      </h3>
    </a>
  {/if}
{/if}

<style>
  h3 {
    margin: 1.1em 0 0.3em;
    color: var(--fg, #000);
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    h3 {
      font-size: 1.3rem;
    }
  }

  .toggle {
    margin: 2rem 0 0;
  }

  @media (max-width: 640px) {
    .toggle {
      margin: 1.4rem 0 0;
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

  .toggle > summary > a > h3 {
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
