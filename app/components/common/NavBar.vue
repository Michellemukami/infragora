<template>
    <header
  class="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-white"
>
  <div
    class="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 xl:px-12"
  >
    <!-- Logo -->
    <div>
      <img
        src="/logo.png"
        alt="Infragora"
        class="h-8 w-auto"
      />
    </div>

    <!-- Menu -->
    <nav class="hidden lg:flex items-center gap-10">
      <a class="text-[11px] font-medium uppercase tracking-[0.08em]">
        Home
      </a>

      <a class="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.08em]">
        About
        <span class="text-[10px]">▼</span>
      </a>

      <a class="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.08em]">
        Capabilities
        <span class="text-[10px]">▼</span>
      </a>

      <a class="text-[11px] font-medium uppercase tracking-[0.08em]">
        Portfolio
      </a>

      <a class="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.08em]">
        Knowledge Hub
        <span class="text-[10px]">▼</span>
      </a>

      <a class="text-[11px] font-medium uppercase tracking-[0.08em]">
        Contact Us
      </a>
    </nav>

    <!-- Login -->
    <button
      class="hidden h-[40px] border border-[#d6dfdf] px-5 text-[11px] font-medium uppercase tracking-[0.08em] lg:block"
    >
      LP Login
    </button>

    <!-- Mobile -->
    <button class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</header>
</template>