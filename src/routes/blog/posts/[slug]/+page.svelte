<script lang="ts">
  import "./prism-night-owl.css";
  import type { PageData } from "./$types";
  import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
  import PostHeader from "$lib/components/PostHeader.svelte";
  import { fade } from 'svelte/transition';
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let data: PageData;

  const { metadata, post: Post } = data;
  
  onMount(() => {
    // Add subtle entrance animation
    gsap.from(".post-content", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      ease: "power2.out",
      clearProps: "y"
    });
  });
</script>

<article in:fade={{duration: 300, delay: 150}} class="max-w-3xl mx-auto my-8 relative">
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <!-- Apple-style gradient background with subtle blur -->
    <div class="absolute -top-[40vh] left-1/4 w-[70vh] h-[70vh] bg-blue-200/20 dark:bg-blue-900/15 rounded-full mix-blend-normal filter blur-[100px]"></div>
    <div class="absolute top-[20vh] right-1/4 w-[50vh] h-[50vh] bg-purple-100/20 dark:bg-purple-900/15 rounded-full mix-blend-normal filter blur-[100px]"></div>
    <div class="absolute bottom-[30vh] left-1/3 w-[60vh] h-[60vh] bg-blue-100/15 dark:bg-blue-800/15 rounded-full mix-blend-normal filter blur-[100px]"></div>
  </div>
  
  <PostHeader {metadata} />

  <div class="post-content prose max-w-none dark:prose-invert mb-8 glass-card mx-4 rounded-apple-lg mt-6 p-7 backdrop-blur-md" style="box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1); transform: translateZ(0);">
    <CopyCodeInjector>
      <Post />
    </CopyCodeInjector>
  </div>

  <div class="px-4 mb-12">
    <a href="/" class="inline-flex items-center text-sm link-apple text-base-content/70 hover:text-primary transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Back to Home
    </a>
  </div>
</article>
