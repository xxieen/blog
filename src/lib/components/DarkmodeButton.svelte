<script lang="ts">
  import { darkmode } from "$lib/stores/darkmode";
  import { scale } from "svelte/transition";
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import MoonIcon from "./svg/MoonIcon.svelte";
  import SunIcon from "./svg/SunIcon.svelte";
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
  
  function toggleDarkmode() {
    // 添加动画过渡效果
    const container = document.documentElement;
    
    if ($darkmode) {
      // 从暗变亮
      gsap.to(container, {
        backgroundColor: "#ffffff",
        color: "#1d1d1f",
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          $darkmode = false;
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        }
      });
    } else {
      // 从亮变暗
      gsap.to(container, {
        backgroundColor: "#1c1c1e",
        color: "#ffffff",
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          $darkmode = true;
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      });
    }
  }
</script>

<button
  class="relative p-2 rounded-full hover:bg-base-200/70 transition-all duration-300"
  on:click={toggleDarkmode}
  aria-label="Toggle theme"
>
  <div class="relative w-5 h-5">
    <!-- Sun icon -->
    <div class="absolute inset-0 {$darkmode ? 'opacity-100' : 'opacity-0'} transform transition-all duration-300">
      {#if mounted}
        <div in:scale={{ duration: 400, delay: 100 }}>
          <SunIcon class="h-5 w-5 fill-current" />
        </div>
      {:else}
        <SunIcon class="h-5 w-5 fill-current" />
      {/if}
    </div>
    
    <!-- Moon icon -->
    <div class="absolute inset-0 {$darkmode ? 'opacity-0' : 'opacity-100'} transform transition-all duration-300">
      {#if mounted}
        <div in:scale={{ duration: 400, delay: 100 }}>
          <MoonIcon class="h-5 w-5 fill-current" />
        </div>
      {:else}
        <MoonIcon class="h-5 w-5 fill-current" />
      {/if}
    </div>
  </div>
</button>
