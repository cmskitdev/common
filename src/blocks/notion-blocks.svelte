<svelte:options customElement="notion-blocks" />

<script lang="ts">
  import Bookmark from "./Bookmark.svelte";
  import BulletedListItems from "./BulletedListItems.svelte";
  import Callout from "./Callout.svelte";
  import Code from "./Code.svelte";
  import ColumnList from "./ColumnList.svelte";
  import Divider from "./Divider.svelte";
  import Embed from "./Embed.svelte";
  import Equation from "./Equation.svelte";
  import File from "./File.svelte";
  import Heading1 from "./Heading1.svelte";
  import Heading2 from "./Heading2.svelte";
  import Heading3 from "./Heading3.svelte";
  import Image from "./Image.svelte";
  import LinkToPage from "./LinkToPage.svelte";
  import NumberedListItems from "./NumberedListItems.svelte";
  import Paragraph from "./Paragraph.svelte";
  import Quote from "./Quote.svelte";
  import SyncedBlock from "./SyncedBlock.svelte";
  import Table from "./Table.svelte";
  import TableOfContents from "./TableOfContents.svelte";
  import ToDo from "./ToDo.svelte";
  import Toggle from "./Toggle.svelte";
  import type { Block } from "./types.js";
  import Video from "./Video.svelte";

  interface Props {
    blocks: Block[];
    headings?: Block[];
    urlMap?: Record<string, string>;
    level?: number;
  }

  export let blocks: Props["blocks"];
  export let headings: Props["headings"] = [];
  export let urlMap: Props["urlMap"] = {};
  export let level: Props["level"] = 0;
</script>

{#each blocks as block (block.Id)}
  {#if block.Type === "paragraph"}
    <Paragraph {block} {headings} />
  {:else if block.Type === "heading_1"}
    <Heading1 {block} {headings} />
  {:else if block.Type === "heading_2"}
    <Heading2 {block} {headings} />
  {:else if block.Type === "heading_3"}
    <Heading3 {block} {headings} />
  {:else if block.Type === "bulleted_list_item"}
    <BulletedListItems {block} {headings} />
  {:else if block.Type === "numbered_list_item"}
    <NumberedListItems {block} {headings} {level} />
  {:else if block.Type === "to_do"}
    <ToDo {block} {headings} />
  {:else if block.Type === "image"}
    <Image {block} />
  {:else if block.Type === "file"}
    <File {block} />
  {:else if block.Type === "code"}
    <Code {block} />
  {:else if block.Type === "quote"}
    <Quote {block} {headings} />
  {:else if block.Type === "equation"}
    <Equation {block} />
  {:else if block.Type === "callout"}
    <Callout {block} {headings} />
  {:else if block.Type === "toggle"}
    <Toggle {block} {headings} />
  {:else if block.Type === "embed"}
    <Embed {block} {urlMap} />
  {:else if block.Type === "video"}
    <Video {block} />
  {:else if block.Type === "bookmark" || block.Type === "link_preview"}
    <Bookmark {block} {urlMap} />
  {:else if block.Type === "table"}
    <Table {block} />
  {:else if block.Type === "column_list"}
    <ColumnList {block} {headings} />
  {:else if block.Type === "table_of_contents"}
    <TableOfContents {block} {headings} />
  {:else if block.Type === "link_to_page"}
    <LinkToPage {block} />
  {:else if block.Type === "divider"}
    <Divider />
  {:else if block.Type === "synced_block"}
    <SyncedBlock {block} {headings} />
  {:else}
    <!-- Unknown block type -->
    <div class="unknown-block">
      <p>Unknown block type: {block.Type}</p>
    </div>
  {/if}
{/each}

<style>
  .unknown-block {
    padding: 1rem;
    background-color: #f8f8f8;
    border: 1px dashed #ccc;
    border-radius: 4px;
    margin: 0.5rem 0;
  }

  .unknown-block p {
    margin: 0;
    color: #666;
    font-style: italic;
  }
</style>
