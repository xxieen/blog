<script>
  import { Shine } from "svelte-ux";
  import { blur } from "svelte/transition";
  import { circIn, circOut } from "svelte/easing";
  import { Gooey, cls, timerStore } from "svelte-ux";
  const indexTimer = timerStore({
    initial: 0,
    delay: 1400,
    onTick: (value) => (value ?? 0) + 1
  });
</script>

<section class="flex px-4 py-6">
  <div class="bg-primary/10 inline-block rounded-lg">
    <!-- <Shine> -->
    <!--   <div class="h-40 w-40 overflow-hidden rounded-full"> -->
    <!--     <img -->
    <!--       src="/profile-image.jpg" -->
    <!--       alt="Profile" -->
    <!--       class="h-full w-full object-cover" -->
    <!--     /> -->
    <!--   </div> -->
    <!-- </Shine> -->
    <div>
      <Gooey blur={4} alphaPixel={255} alphaShift={-144}>
        {@const words = [
          "Why",
          "is",
          "this",
          "so",
          "satisfying",
          "to",
          "watch?"
        ]}
        <div
          class={cls(
            "grid-stack grid place-items-center",
            "w-[500px] text-center text-8xl font-bold"
          )}
        >
          {#key $indexTimer}
            <span
              in:blur={{
                amount: "10px",
                duration: 1000,
                easing: circOut
              }}
              out:blur={{
                amount: "100px",
                duration: 1000,
                easing: circIn
              }}
            >
              {words[($indexTimer ?? 0) % words.length]}
            </span>
          {/key}
        </div>
      </Gooey>
      <div />
      <!-- <Gooey -->
      <!--   blur={4} -->
      <!--   alphaPixel={255} -->
      <!--   alphaShift={-144} -->
      <!--   composite="atop" -->
      <!-- > -->
      <!--   {@const words = ["🚀", "🍩", "🍔", "🥨", "🥓"]} -->
      <!--   <div -->
      <!--     class={cls( -->
      <!--       "grid-stack grid place-items-center", -->
      <!--       "w-[500px] text-center text-8xl font-bold" -->
      <!--     )} -->
      <!--   > -->
      <!--     {#key $indexTimer} -->
      <!--       <span -->
      <!--         in:blur={{ -->
      <!--           amount: "10px", -->
      <!--           duration: 1000, -->
      <!--           easing: circOut -->
      <!--         }} -->
      <!--         out:blur={{ -->
      <!--           amount: "100px", -->
      <!--           duration: 1000, -->
      <!--           easing: circIn -->
      <!--         }} -->
      <!--       > -->
      <!--         {words[($indexTimer ?? 0) % words.length]} -->
      <!--       </span> -->
      <!--     {/key} -->
      <!--   </div> -->
      <!-- </Gooey> -->
    </div>
  </div>

  <div class="space-y-2 py-4">
    <h2 class="text-4xl font-bold">Hey! I'm Xieen.</h2>
    <p class="text-2xl font-light">
      我是一个兴趣广泛，什么都想学🤯，杂食程序员🧑‍💻
    </p>
    <p class="text-2xl font-thin">
      这是我的blog，记录生活、学习、所想所感。
    </p>
    <p class="text-1xl font-thin">
      #cpp #svelte #algorithm #neovim
    </p>
  </div>
</section>
