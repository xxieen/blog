<script lang="ts">
  import type { MarkdownPostMetadataAndSlug } from "../../types";
  import { formatPublishedAt } from "$lib/utils/dates";
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let post: MarkdownPostMetadataAndSlug;

  let href = `/blog/posts/${post.slug}`;
  let youtubeHref = post.metadata.youtubeId
    ? `https://youtu.be/${post.metadata.youtubeId}`
    : "";

  let isHovered = false;
  let cardElement: HTMLElement;

  // 增强阴影和图片缩放效果
  function handleMouseEnter() {
    isHovered = true;

    gsap.to(cardElement, {
      boxShadow:
        "0 20px 40px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",
      // backgroundColor: "rgba(var(--color-base-200), 0.5)",
      y: -5,
      duration: 0.2,
      ease: "expo.out"
    });
  }

  function handleMouseLeave() {
    isHovered = false;

    gsap.to(cardElement, {
      boxShadow:
        "0 8px 20px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)",
      // backgroundColor: "rgba(var(--color-base-100), 0)",
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  }

  onMount(() => {
    // 为每个变量添加 CSS 变量
    const r =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--b1")
        .trim() || "255, 255, 255";
    cardElement.style.setProperty("--color-base-100", r);

    const rb2 =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--b2")
        .trim() || "245, 245, 247";
    cardElement.style.setProperty("--color-base-200", rb2);
  });
</script>

<article
  bind:this={cardElement}
  class="rounded-apple border-b border-black/5 p-5 pb-6 backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md dark:border-white/5 sm:flex sm:gap-6 sm:p-6"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <a {href} class="block flex-shrink-0 sm:w-64">
    <div
      class="aspect-h-9 aspect-w-16 transform-gpu overflow-hidden rounded-apple shadow-apple-md"
    >
      <img
        src={post.metadata.imgUrl}
        alt={post.metadata.title}
        class="object-cover transition-all duration-500 ease-in-out {isHovered
          ? 'scale-105'
          : 'scale-100'}"
      />
    </div>
  </a>

  <div
    class="flex flex-1 flex-col justify-between pt-5 sm:pt-0"
  >
    <div>
      <a {href} class="group block">
        <h3
          class="mb-2 text-xl font-medium transition-colors duration-300 group-hover:text-primary"
        >
          {post.metadata.title}
        </h3>

        <div class="mb-3 text-sm">
          <time
            datetime={post.metadata.publishedAt}
            class="text-base-content/60 font-light"
          >
            {formatPublishedAt(post.metadata.publishedAt)}
          </time>
        </div>

        <p
          class="text-base-content/80 py-1 font-light leading-relaxed"
        >
          {post.metadata.summary}
        </p>
      </a>
    </div>

    <div class="mt-4 flex flex-wrap gap-3 text-sm">
      <a
        {href}
        class="link-apple inline-flex items-center text-primary"
      >
        Read More
      </a>

      {#if post.metadata.youtubeId}
        <a
          href={youtubeHref}
          target="_blank"
          rel="noopener noreferrer"
          class="text-base-content/70 inline-flex items-center transition-colors duration-300 hover:text-primary"
        >
          <svg
            class="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path>
          </svg>
          Watch Video
        </a>
      {/if}
    </div>
  </div>
</article>
