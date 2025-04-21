<script lang="ts">
  import CheckIcon from "./svg/CheckIcon.svelte";
  import CopyIcon from "./svg/CopyIcon.svelte";

  let copyButton: HTMLButtonElement;
  let showCheckmark = false;

  function handleClick() {
    const preTagSibling =
      copyButton.nextElementSibling as HTMLPreElement;

    navigator.clipboard.writeText(preTagSibling.innerText);

    showCheckmark = true;

    setTimeout(() => (showCheckmark = false), 1000);
  }
</script>

<button
  bind:this={copyButton}
  on:click={handleClick}
  class={`absolute right-2 top-2 rounded-full p-1.5 transition-all duration-200 backdrop-blur-md ${
    showCheckmark
      ? "bg-success/90 shadow-md"
      : "bg-base-200/80 hover:bg-base-200/95 shadow-sm hover:shadow-md"
  }`}
  aria-label="Copy code to clipboard"
  title="Copy code to clipboard"
>
  {#if showCheckmark}
    <CheckIcon class="h-5 w-5 text-white" />
  {:else}
    <CopyIcon class="h-5 w-5 text-base-content/80" />
  {/if}
</button>
