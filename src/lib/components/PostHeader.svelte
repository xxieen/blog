<script lang="ts">
  import type { MarkdownPost } from "../../types";
  import { formatPublishedAt } from "$lib/utils/dates";
  import { fade, scale } from 'svelte/transition';

  export let metadata: MarkdownPost["metadata"];
</script>

<header class="px-6 pt-6 pb-4">
  <div class="mb-6 w-full mx-auto max-w-3xl">
    <div
      in:scale={{duration: 600, delay: 300}}
      class="aspect-h-9 aspect-w-16 overflow-hidden rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08),0_3px_10px_rgba(0,0,0,0.04)]" style="transform: translateZ(0); /* 启用GPU加速, 增强层次感 */"
    >
      {#if metadata.youtubeId}
        <iframe
          title={metadata.title}
          src={`https://www.youtube.com/embed/${metadata.youtubeId}?origin=http://example.com`}
          allow="fullscreen"
          class="w-full h-full"
        />
      {:else}
        <img
          src={metadata.imgUrl}
          alt={metadata.title}
          class="object-cover w-full h-full"
        />
      {/if}
    </div>
  </div>

  <div in:fade={{duration: 500, delay: 400}} class="mb-4">
    <h1 class="mb-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
      {metadata.title}
    </h1>

    <div class="text-sm text-base-content/70">
      <time
        datetime={metadata.publishedAt}
      >
        {formatPublishedAt(metadata.publishedAt)}
      </time>
    </div>
  </div>
</header>
