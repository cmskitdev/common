<svelte:options customElement="notion-equation" />

<script lang="ts">
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];

  // Handle equation rendering (you might want to use a library like KaTeX)
  function renderEquation(expression: string): string {
    // Placeholder - implement with KaTeX or similar
    return expression;
  }
</script>

{#if block.Equation}
  <div class="equation">
    {@html renderEquation(block.Equation.Expression)}
  </div>
{/if}

<style>
  .equation {
    text-align: center;
    margin: 1rem 0;
    font-family: "KaTeX_Main", "Times New Roman", serif;
    font-size: 1.1em;
  }
</style>
