<svelte:options customElement="notion-table-of-contents" />

<script lang="ts">
  import type { BaseBlockProps } from "./types.js";
  import { buildHeadingId, snakeToKebab } from "./utils.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
  export let headings: Props["headings"] = [];

  $: colorClass = block.TableOfContents?.Color
    ? snakeToKebab(block.TableOfContents.Color)
    : "";
</script>

{#if block.TableOfContents}
  <div class="table-of-contents">
    {#each headings as headingBlock}
      {@const heading =
        headingBlock.Heading1 || headingBlock.Heading2 || headingBlock.Heading3}
      {#if heading}
        {@const indentClass =
          headingBlock.Type === "heading_2"
            ? "indent-1"
            : headingBlock.Type === "heading_3"
              ? "indent-2"
              : ""}
        <a
          href="#{buildHeadingId(heading)}"
          class="toc-link {colorClass} {indentClass}"
        >
          {heading.RichTexts.map((richText) => richText.PlainText).join("")}
        </a>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .table-of-contents {
    margin: 1rem 0;
  }

  .toc-link {
    display: block;
    line-height: 1.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: underline;
    color: inherit;
    padding: 0.1rem 0;
  }

  .toc-link:hover {
    background: rgba(241, 241, 239, 1) !important;
  }

  .toc-link.indent-1 {
    padding-left: 1.5rem;
  }

  .toc-link.indent-2 {
    padding-left: 3rem;
  }
</style>
