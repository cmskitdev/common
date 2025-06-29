<svelte:options customElement="notion-code" />

<script lang="ts">
  import { onMount } from "svelte";
  import Caption from "./Caption.svelte";
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];

  let codeElement: HTMLElement;

  $: code = block.Code
    ? block.Code.RichTexts.map((richText) => richText.Text?.Content || "").join(
        ""
      )
    : "";
  $: language = block.Code?.Language.toLowerCase() || "javascript";

  function highlightCode(code: string, language: string): string {
    // Placeholder for syntax highlighting - implement with Prism.js or similar
    return code;
  }

  function copyToClipboard() {
    if (navigator.clipboard && code) {
      navigator.clipboard.writeText(code).then(() => {
        // Could show a toast notification here
        console.log("Code copied to clipboard");
      });
    }
  }

  onMount(() => {
    // Initialize mermaid if needed
    if (language === "mermaid" && typeof window !== "undefined") {
      // Import and initialize mermaid dynamically
      import("mermaid")
        .then(({ default: mermaid }) => {
          mermaid.initialize({ startOnLoad: true, theme: "neutral" });
          mermaid.init(undefined, codeElement);
        })
        .catch(console.error);
    }
  });
</script>

{#if block.Code}
  <div class="code">
    <div class="code-container">
      {#if language === "mermaid"}
        <pre class="mermaid" bind:this={codeElement}>{code}</pre>
      {:else}
        <div class="code-header">
          <button class="copy-button" on:click={copyToClipboard}> Copy </button>
        </div>
        <pre><code>{@html highlightCode(code, language)}</code></pre>
      {/if}
    </div>
    <Caption richTexts={block.Code.Caption} />
  </div>
{/if}

<style>
  .code {
    display: block;
    width: 100%;
    margin-bottom: 0.6rem;
  }

  .code-container {
    background: rgb(247, 246, 243);
    border-radius: var(--radius, 4px);
    position: relative;
  }

  .code-header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
  }

  .copy-button {
    display: block;
    width: 4rem;
    border: 0;
    border-radius: var(--radius, 4px);
    background-color: rgba(227, 226, 224, 0.5);
    color: var(--fg, #000);
    line-height: 1.2rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }

  .copy-button:hover {
    background-color: rgba(227, 226, 224, 0.8);
  }

  pre {
    display: block;
    overflow: auto;
    padding: 0.8rem 2rem 2rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
    white-space: pre;
    width: 100px;
    min-width: 100%;
    overflow-x: auto;
    margin: 0;
  }

  pre::-webkit-scrollbar {
    height: 10px;
  }

  pre::-webkit-scrollbar-thumb {
    background: rgb(211, 209, 203);
  }

  pre::-webkit-scrollbar-track {
    background: rgb(237, 236, 233);
  }

  pre.mermaid {
    padding: 2rem;
  }

  code {
    color: var(--fg, #000);
    padding: 0;
    background: rgb(247, 246, 243) !important;
    border-radius: 0;
    font-family:
      "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
</style>
