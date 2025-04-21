<script lang="ts">
  import HomeHeader from "$lib/components/HomeHeader.svelte";
  import PostListing from "$lib/components/PostListing.svelte";
  import { onMount } from 'svelte';
  import { gsap } from 'gsap'; 
  import { fade } from 'svelte/transition';
  import type { PageData } from "./$types";

  export let data: PageData;
  
  let visible = false;
  
  onMount(() => {
    // 加速显示动画
    setTimeout(() => {
      visible = true;
      
      // 更快速的贴文列表动画
      gsap.from(".post-item", {
        opacity: 0,
        y: 15,
        stagger: 0.06, // 减少间隔时间
        duration: 0.5, // 加快动画速度
        ease: "power2.out", // 更自然的缓动函数
        clearProps: "transform"
      });
    }, 100); // 减少延迟
  });
</script>

<HomeHeader />

<section class="pb-10">
  <div in:fade={{duration: 400, delay: 150}}>
    <header
      class="mx-4 mb-8 inline-block border-b border-black/10 dark:border-white/10 py-2 transition-all duration-300"
    >
      <h2 class="text-2xl font-medium tracking-tight" style="letter-spacing: -0.01em;">Blog Posts</h2>
    </header>
  </div>
  
  <section class="space-y-6 divide-y dark:divide-white/5 divide-black/5">
    {#each data.posts as post}
      {#if visible}
        <div class="post-item">
          <PostListing {post} />
        </div>
      {/if}
    {/each}
  </section>
</section>
