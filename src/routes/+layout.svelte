<script lang="ts">
  import MainHeader from "$lib/components/MainHeader.svelte";
  import ThemeInitializer from "$lib/components/ThemeInitializer.svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: pagePath = data.pathname;
  
  // 初始化GSAP动画（更快速）
  onMount(() => {
    // 页面内容淡入动画
    gsap.from(".page-content", {
      opacity: 0,
      y: 8, // 减少位移距离
      duration: 0.4, // 加快动画
      ease: "power2.out", // 更自然的缓动
      clearProps: "all" // 清除属性以避免影响其他动画
    });
  });
</script>

<ThemeInitializer>
  <div class="min-h-screen bg-base-100 font-sans text-base-content transition-colors duration-300" style="-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <MainHeader></MainHeader>
    {#key pagePath}
      <main
        in:fly={{ y: -8, duration: 300, delay: 80 }}
        out:fly={{ y: 8, duration: 200 }}
        class="container mx-auto max-w-5xl pt-24 px-4 page-content"
      >
        <slot></slot>
      </main>
    {/key}
    <footer class="mt-16 py-10 px-4 backdrop-blur-lg bg-base-100/80 border-t border-black/5 dark:border-white/5">
      <div class="max-w-5xl mx-auto text-center">
        <div class="flex justify-center items-center gap-6 mb-6">
          <a href="/" class="link-apple text-base-content/80 hover:text-base-content transition-colors">Home</a>
          <a href="https://github.com/xxieen" target="_blank" rel="noopener noreferrer" class="link-apple text-base-content/80 hover:text-base-content transition-colors">GitHub</a>
          <a href="https://www.youtube.com/@moomincare" target="_blank" rel="noopener noreferrer" class="link-apple text-base-content/80 hover:text-base-content transition-colors">YouTube</a>
        </div>
        
        <div class="flex justify-center items-center gap-4 mb-8">
          <a href="https://github.com/xxieen" target="_blank" rel="noopener noreferrer" aria-label="Github" class="text-base-content/70 hover:text-base-content transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.youtube.com/@moomincare" target="_blank" rel="noopener noreferrer" aria-label="Youtube" class="text-base-content/70 hover:text-base-content transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
        </div>
        
        <p class="text-sm text-base-content/60 font-light">© {new Date().getFullYear()} Xieen - All rights reserved</p>
      </div>
    </footer>
  </div>
</ThemeInitializer>
