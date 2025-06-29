<svelte:options customElement="notion-rich-text" />

<script lang="ts">
  import type { RichText } from "./types.js";
  import { snakeToKebab, splitByNewlines } from "./utils.js";

  interface Props {
    richText: RichText;
  }

  export let richText: RichText;

  // Handle equation rendering (you might want to use a library like KaTeX)
  function renderEquation(expression: string): string {
    // Placeholder - implement with KaTeX or similar
    return `$$${expression}$$`;
  }

  // Get the text content with line breaks
  function getTextContent(): (string | "BR")[] {
    if (!richText.Text?.Content) return [];

    const lines = splitByNewlines(richText.Text.Content);
    const result: (string | "BR")[] = [];

    lines.forEach((line, index) => {
      if (index > 0) result.push("BR");
      result.push(line);
    });

    return result;
  }

  $: textContent = getTextContent();
  $: colorClass =
    richText.Annotation.Color && richText.Annotation.Color !== "default"
      ? snakeToKebab(richText.Annotation.Color)
      : "";
</script>

{#if richText.Text}
  <!-- Text content with annotations -->
  {#if richText.Href && !richText.Mention}
    <a href={richText.Href} class="rich-text-link">
      {#if richText.Annotation.Code}
        <code class="inline-code {colorClass}">
          {#each textContent as item}
            {#if item === "BR"}
              <br />
            {:else}
              {item}
            {/if}
          {/each}
        </code>
      {:else}
        <span
          class="rich-text {colorClass}"
          class:bold={richText.Annotation.Bold}
          class:italic={richText.Annotation.Italic}
          class:strikethrough={richText.Annotation.Strikethrough}
          class:underline={richText.Annotation.Underline}
        >
          {#each textContent as item}
            {#if item === "BR"}
              <br />
            {:else}
              {item}
            {/if}
          {/each}
        </span>
      {/if}
    </a>
  {:else if richText.Annotation.Code}
    <code class="inline-code {colorClass}">
      {#each textContent as item}
        {#if item === "BR"}
          <br />
        {:else}
          {item}
        {/if}
      {/each}
    </code>
  {:else}
    <span
      class="rich-text {colorClass}"
      class:bold={richText.Annotation.Bold}
      class:italic={richText.Annotation.Italic}
      class:strikethrough={richText.Annotation.Strikethrough}
      class:underline={richText.Annotation.Underline}
    >
      {#each textContent as item}
        {#if item === "BR"}
          <br />
        {:else}
          {item}
        {/if}
      {/each}
    </span>
  {/if}
{:else if richText.Equation}
  <!-- Equation content -->
  <span class="equation"
    >{@html renderEquation(richText.Equation.Expression)}</span
  >
{:else if richText.Mention?.Page}
  <!-- Page mention - this would typically link to another component -->
  <span class="mention" data-page-id={richText.Mention.Page.Id}>
    {richText.PlainText}
  </span>
{/if}

<style>
  .rich-text-link {
    text-decoration: underline;
    color: inherit;
  }

  .rich-text.bold {
    font-weight: bold;
  }

  .rich-text.italic {
    font-style: italic;
  }

  .rich-text.strikethrough {
    text-decoration: line-through;
  }

  .rich-text.underline {
    text-decoration: underline;
  }

  .inline-code {
    color: #eb5757;
    background-color: rgba(135, 131, 120, 0.15);
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-family:
      "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 0.85em;
  }

  .equation {
    font-family: "KaTeX_Main", "Times New Roman", serif;
  }

  .mention {
    background-color: rgba(135, 131, 120, 0.15);
    border-radius: 3px;
    padding: 0.1em 0.2em;
    font-weight: 500;
  }

  /* Notion color classes */
  .default {
    color: inherit;
  }

  .gray {
    color: rgba(120, 119, 116, 1);
  }

  .brown {
    color: rgba(159, 107, 83, 1);
  }

  .orange {
    color: rgba(217, 115, 13, 1);
  }

  .yellow {
    color: rgba(203, 145, 47, 1);
  }

  .green {
    color: rgba(68, 131, 97, 1);
  }

  .blue {
    color: rgba(51, 126, 169, 1);
  }

  .purple {
    color: rgba(144, 101, 176, 1);
  }

  .pink {
    color: rgba(193, 76, 138, 1);
  }

  .red {
    color: rgba(212, 76, 71, 1);
  }

  .gray-background {
    background-color: rgba(241, 241, 239, 1);
  }

  .brown-background {
    background-color: rgba(244, 238, 238, 1);
  }

  .orange-background {
    background-color: rgba(251, 236, 221, 1);
  }

  .yellow-background {
    background-color: rgba(251, 243, 219, 1);
  }

  .green-background {
    background-color: rgba(237, 243, 236, 1);
  }

  .blue-background {
    background-color: rgba(231, 243, 248, 1);
  }

  .purple-background {
    background-color: rgba(244, 240, 247, 0.8);
  }

  .pink-background {
    background-color: rgba(249, 238, 243, 0.8);
  }

  .red-background {
    background-color: rgba(253, 235, 236, 1);
  }
</style>
