<script>
  import DarkmodeButton from "./DarkmodeButton.svelte";
  import Logo from "./svg/Logo.svelte";
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  
  let isScrolled = false;
  let menuOpen = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    
    // 初始化GSAP动画 - 加快速度
    gsap.from(".header-content", {
      y: -15,
      opacity: 0,
      duration: 0.4, // 减少动画时间
      ease: "power2.out",
      stagger: 0.05 // 减少间隔
    });
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={menuOpen} /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-black/5 dark:border-white/5 backdrop-blur-xl transition-all duration-200 will-change-[backdrop-filter,box-shadow] {isScrolled ? 'shadow-apple bg-base-100/80' : 'bg-base-100/70'}"
    >
      <div class="container mx-auto max-w-5xl px-4 flex items-center justify-between h-20">
        <div class="flex items-center header-content">
          <div class="lg:hidden mr-2">
            <button 
              type="button" 
              aria-controls="my-drawer-3" 
              aria-expanded={menuOpen ? 'true' : 'false'} 
              class="p-2 focus-ring rounded-full" 
              on:click={toggleMenu}
            >
              <span class="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          <a href="/" class="transition-transform duration-200 hover:scale-102"> 
            <Logo class="h-28 w-28" /> 
          </a>
        </div>
        
        <div class="hidden lg:flex header-content">
          <a href="/" class="mx-2 p-2 link-apple">Home</a>
        </div>
        
        <div class="flex items-center gap-3 header-content">
          <DarkmodeButton />
          <a 
            href="https://www.youtube.com/@moomincare" 
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 hover:text-primary transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
          <a 
            href="https://github.com/xxieen" 
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </header>
  </div> 
  <!-- Mobile sidebar menu -->
  <div class="drawer-side z-50">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 h-full bg-base-100 dark:bg-base-200 shadow-apple-lg">
      <!-- Sidebar content here -->
      <li class="mb-2 mt-4">
        <a 
          href="/"
          class="text-lg font-medium {menuOpen ? 'active' : ''} rounded-apple-sm"
          on:click={toggleMenu}
        >
          Home
        </a>
      </li>
      <div class="divider"></div>
      <li>
        <a 
          href="https://github.com/xxieen"
          target="_blank"
          class="text-lg rounded-apple-sm"
          on:click={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current mr-2"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </li>
      <li>
        <a 
          href="https://www.youtube.com/@moomincare"
          target="_blank"
          class="text-lg rounded-apple-sm"
          on:click={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current mr-2"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          YouTube
        </a>
      </li>
    </ul>
  </div>
</div>
