<script lang="ts">
  import MainHeader from "$lib/components/MainHeader.svelte";
  import ThemeInitializer from "$lib/components/ThemeInitializer.svelte";
  import { fly } from "svelte/transition";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: pagePath = data.pathname;
</script>

<ThemeInitializer>
  <MainHeader></MainHeader>
  {#key pagePath}
    <main
      in:fly={{ y: -15, duration: 200, delay: 0 }}
      out:fly={{ y: 15 }}
      class="mx-auto max-w-5xl pt-24"
    >
      <slot></slot>
    </main>
  {/key}
</ThemeInitializer>
