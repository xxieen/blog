<script>
  import { Shine } from "svelte-ux";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { fade, fly, scale } from "svelte/transition";

  let typedText = "";
  let fullText = "记录生活、学习、所想所感。";
  let typingIndex = 0;
  let typingSpeed = 50; // 加快打字速度
  let visible = false;

  onMount(() => {
    // Start the typing animation
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (typingIndex < fullText.length) {
          typedText += fullText[typingIndex];
          typingIndex++;
        } else {
          clearInterval(typingInterval);

          // 加快光标闪烁动画
          gsap.to(".typing-cursor", {
            opacity: 0.5,
            duration: 0.5, // 更快的闪烁
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
        }
      }, typingSpeed);
    }, 400); // 减少延迟

    setTimeout(() => {
      visible = true;

      // 加快标签动画
      gsap.from(".badge-tag", {
        y: 10,
        opacity: 0,
        duration: 0.35, // 更快的动画
        stagger: 0.05, // 更快的间隔
        ease: "power2.out", // 更自然的缓动
        delay: 0.1
      });
    }, 300); // 减少延迟

    // 更细微的浮动动画
    gsap.to(".avatar-container", {
      y: -6, // 减少浮动幅度
      duration: 2, // 加快循环
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });
</script>

<section class="relative overflow-hidden px-4 py-16">
  <div class="relative z-0 mx-auto max-w-3xl text-center">
    <div
      in:scale={{ duration: 500, delay: 100 }}
      class="avatar-container mb-8"
    >
      <div
        class="mx-auto h-44 w-44 overflow-hidden rounded-full bg-white/5 p-1 shadow-apple-md backdrop-blur-sm dark:bg-black/5"
        style="transform: translateZ(0);"
      >
        <div
          class="h-full w-full overflow-hidden rounded-full"
        >
          <Shine>
            <img
              src="/profile-image.jpg"
              alt="Profile"
              class="h-full w-full object-cover"
            />
          </Shine>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h1
        in:fly={{ y: -15, duration: 400, delay: 200 }}
        class="mb-5 text-4xl font-semibold leading-none tracking-tight md:text-5xl"
        style="letter-spacing: -0.02em;"
      >
        Hey! I'm Xieen.
      </h1>

      <p
        in:fade={{ duration: 300, delay: 400 }}
        class="mb-4 text-xl"
      >
        谢谢你看我的blog <span
          class="inline-block animate-pulse-slow">🤠</span
        >
      </p>

      <div class="mb-8 min-h-16 text-xl font-light">
        <span class="typing-text">{typedText}</span>
        <span class="typing-cursor">|</span>
      </div>

      {#if visible}
        <div
          in:fade={{ duration: 400, delay: 600 }}
          class="mt-6 flex flex-wrap justify-center gap-2"
        >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >cpp</span
          >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >rust</span
          >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >svelte</span
          >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >guitar</span
          >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >algorithm</span
          >
          <span
            class="badge-tag badge-apple bg-base-200/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >neovim</span
          >
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .typing-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
