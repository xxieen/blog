<script lang="ts">
  import { hoverAnimation, pageEnterAnimation, textReveal } from '$lib/utils/animations';

  // Create action for hover effects
  export function hover(node: HTMLElement) {
    return hoverAnimation(node);
  }

  // Create action for page enter animations
  export function pageEnter(node: HTMLElement, options: { delay?: number } = {}) {
    return pageEnterAnimation(node, options.delay || 0);
  }

  // Create action for text reveal animations
  export function reveal(node: HTMLElement, options: { delay?: number } = {}) {
    return textReveal(node, options.delay || 0);
  }
</script>