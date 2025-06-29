<svelte:options customElement="notion-table" />

<script lang="ts">
  import RichText from "./RichText.svelte";
  import type { BaseBlockProps } from "./types.js";

  interface Props extends BaseBlockProps {}

  export let block: Props["block"];
</script>

{#if block.Table}
  <div class="table">
    <table>
      <tbody>
        {#each block.Table.Rows as tableRow, j}
          <tr>
            {#each tableRow.Cells as cell, i}
              {#if (block.Table.HasRowHeader && i === 0) || (block.Table.HasColumnHeader && j === 0)}
                <th>
                  {#each cell.RichTexts as richText}
                    <RichText {richText} />
                  {/each}
                </th>
              {:else}
                <td>
                  {#each cell.RichTexts as richText}
                    <RichText {richText} />
                  {/each}
                </td>
              {/if}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style>
  .table {
    margin: 0.6rem 0;
    overflow-x: auto;
  }

  .table table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    font-weight: normal;
    padding: 0.5rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  .table th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
</style>
