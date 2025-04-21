<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  
  export let title: string;
  export let content: string = '';
  export let delay: number = 0;
  
  let visible = false;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, delay);
  });
</script>

{#if visible}
  <div 
    in:fly={{ y: 20, duration: 400, delay: 100 }}
    class="card w-full bg-base-100 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div class="card-body">
      <h2 class="card-title text-primary">{title}</h2>
      <p>{content}</p>
      <div class="card-actions justify-end">
        <slot />
      </div>
    </div>
  </div>
{/if}