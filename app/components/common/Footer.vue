<!-- components/SiteFooter.vue -->
<template>
  <footer class="w-full border-t border-black/5 bg-[#eeeeee]">
    <div
      class="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 py-9 text-center sm:px-10 md:min-h-[132px] md:flex-row md:items-center md:justify-between md:px-14 md:py-8 md:text-left lg:px-20"
    >
      <!-- Left side -->
      <div
        class="flex min-w-0 flex-col items-center gap-5 text-[12px] font-medium text-black sm:text-[13px] md:flex-row md:items-center md:gap-10 lg:gap-14"
      >
        <p class="whitespace-nowrap">
          &copy;{{ currentYear }} Infragora
        </p>

        <nav
          aria-label="Footer navigation"
          class="flex max-w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 md:justify-start lg:gap-x-10"
        >
          <NuxtLink
            to="/privacy-policy"
            class="whitespace-nowrap transition-opacity duration-200 hover:opacity-55"
          >
            Privacy Policy
          </NuxtLink>

          <NuxtLink
            to="/terms-and-conditions"
            class="whitespace-nowrap transition-opacity duration-200 hover:opacity-55"
          >
            Terms &amp; Conditions
          </NuxtLink>
        </nav>
      </div>

      <!-- Social media -->
      <div class="flex shrink-0 items-center justify-center gap-3 sm:gap-4 md:gap-5">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="flex h-10 w-10 items-center justify-center text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-[18px] w-[18px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M13.5 8.5V6.8c0-.8.5-1 1-1h2V2.2C16.1 2.1 15 2 13.7 2 10.9 2 9 3.7 9 6.9v1.6H6v4h3V22h4.5v-9.5h3.1l.5-4h-3.6Z"
            />
          </svg>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="flex h-10 w-10 items-center justify-center text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-[20px] w-[20px]"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle
              cx="17.3"
              cy="6.8"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="flex h-10 w-10 items-center justify-center text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-[19px] w-[19px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M4.5 3A2.5 2.5 0 1 0 4.5 8a2.5 2.5 0 0 0 0-5ZM2.4 9.7h4.2V22H2.4V9.7ZM9.1 9.7h4v1.7h.1c.6-1.1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V22h-4.2v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V22H9.1V9.7Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
