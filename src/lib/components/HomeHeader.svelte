<script>
  import { Shine } from "svelte-ux";
</script>

<section class="px-4 py-6">
  <div class="bg-primary/10 inline-block rounded-lg">
    <Shine>
      <div class="h-40 w-40 overflow-hidden rounded-full">
        <img
          src="/profile-image.jpg"
          alt="Profile"
          class="h-full w-full object-cover"
        />
      </div>
    </Shine>

    <Shine depth={3}>
      <div class="text-[9rem] leading-[9rem]">
        🚀 🧸 🍔 🥨 🍩 🍓 🍒 🪼 🧠 🌎
      </div>
    </Shine>
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
