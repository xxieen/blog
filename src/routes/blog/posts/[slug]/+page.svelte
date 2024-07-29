<script lang="ts">
  import "./prism-night-owl.css";
  import type { PageData } from "./$types";
  import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
  import PostHeader from "$lib/components/PostHeader.svelte";

  export let data: PageData;

  const { metadata, post: Post } = data;
</script>

<article>
  <PostHeader {metadata} />

  <div class="prose max-w-none px-4 py-4 dark:prose-invert">
    <CopyCodeInjector>
      <Post />
    </CopyCodeInjector>
  </div>
</article>
