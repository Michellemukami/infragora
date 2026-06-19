<template>
  <header class="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur-md">
    <div
      class="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 xl:px-12"
    >
      <NuxtLink to="/">
        <img src="/logo.png" alt="Infragora" class="h-8 w-auto" />
      </NuxtLink>

      <nav class="hidden items-center gap-10 lg:flex">
        <NuxtLink to="/" class="text-[11px] font-medium uppercase tracking-[0.08em]">
          Home
        </NuxtLink>

        <NuxtLink
          to="/about-us"
          class="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.08em]"
        >
          About
        </NuxtLink>

        <div class="relative">
          <button
            type="button"
            class="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.08em] transition-opacity duration-200 hover:opacity-65"
            aria-haspopup="true"
            :aria-expanded="isCapabilitiesOpen"
            @click="isCapabilitiesOpen = !isCapabilitiesOpen"
          >
            Capabilities
            <svg
              class="h-3 w-3 transition-transform duration-300"
              :class="{ 'rotate-180': isCapabilitiesOpen }"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-0"
          >
            <div
              v-if="isCapabilitiesOpen"
              class="absolute left-0 top-full mt-6 w-[270px] border border-black/10 bg-white p-6 text-[#102225] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <NuxtLink
                to="/our-capabilities"
                class="block text-[13px] font-semibold leading-none tracking-[-0.01em] text-[#003f50] transition-opacity hover:opacity-60"
                @click="isCapabilitiesOpen = false"
              >
                Our Capabilities
              </NuxtLink>

              <div class="mt-5 space-y-4 text-[12px] leading-none text-[#102225]">
                <NuxtLink
                  to="/our-capabilities/advisory"
                  class="block font-medium transition-opacity hover:opacity-60"
                  @click="isCapabilitiesOpen = false"
                >
                  Advisory
                </NuxtLink>

                <div>
                  <NuxtLink
                    to="/our-capabilities/investment"
                    class="block font-medium transition-opacity hover:opacity-60"
                    @click="isCapabilitiesOpen = false"
                  >
                    Investment
                  </NuxtLink>

                  <div class="mt-3 space-y-3 border-l border-[#d6dfdf] pl-4 text-[#4a5d61]">
                    <NuxtLink
                      to="/our-capabilities/investment/public-investment"
                      class="block transition-opacity hover:opacity-60"
                      @click="isCapabilitiesOpen = false"
                    >
                      Public Investment
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/investment/private-investment"
                      class="block transition-opacity hover:opacity-60"
                      @click="isCapabilitiesOpen = false"
                    >
                      Private Investment
                    </NuxtLink>
                  </div>
                </div>

                <div>
                  <NuxtLink
                    to="/our-capabilities/instruments"
                    class="block font-medium transition-opacity hover:opacity-60"
                    @click="isCapabilitiesOpen = false"
                  >
                    Instruments
                  </NuxtLink>

                  <div class="mt-3 space-y-3 border-l border-[#d6dfdf] pl-4 text-[#4a5d61]">
                    <NuxtLink
                      to="/our-capabilities/instruments/equity"
                      class="block transition-opacity hover:opacity-60"
                      @click="isCapabilitiesOpen = false"
                    >
                      Equity
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/instruments/quasi-equity"
                      class="block transition-opacity hover:opacity-60"
                      @click="isCapabilitiesOpen = false"
                    >
                      Quasi Equity
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/instruments/private-credit"
                      class="block transition-opacity hover:opacity-60"
                      @click="isCapabilitiesOpen = false"
                    >
                      Private Credit
                    </NuxtLink>
                  </div>
                </div>

                <NuxtLink
                  to="/fund-management"
                  class="block font-medium transition-opacity hover:opacity-60"
                  @click="isCapabilitiesOpen = false"
                >
                  Fund Management
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <NuxtLink
          to="/portfolio"
          class="text-[11px] font-medium uppercase tracking-[0.08em]"
        >
          Portfolio
        </NuxtLink>

        <NuxtLink
          to="/knowledge-hub"
          class="text-[11px] font-medium uppercase tracking-[0.08em]"
            >
          Knowledge Hub
        </NuxtLink>
        <NuxtLink
          to="/news"
          class="text-[11px] font-medium uppercase tracking-[0.08em]"
            >
          News
        </NuxtLink>

        <NuxtLink
          to="/contact-us"
          class="text-[11px] font-medium uppercase tracking-[0.08em]"
        >
          Contact Us
        </NuxtLink>
      </nav>

      <button
        class="hidden h-[40px] border border-[#d6dfdf] px-5 text-[11px] font-medium uppercase tracking-[0.08em] lg:block"
      >
        LP Login
      </button>

      <button
        type="button"
        class="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition duration-300 hover:border-black/30 hover:bg-black hover:text-white lg:hidden"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileMenuOpen"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="relative block h-4 w-5">
          <span
            class="absolute left-0 top-0 h-px w-5 bg-current transition duration-300"
            :class="isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
          />
          <span
            class="absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300"
            :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300"
            :class="isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''"
          />
        </span>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-[55] bg-black/35 backdrop-blur-sm lg:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="isMobileMenuOpen"
        class="fixed right-0 top-0 z-[60] flex h-dvh w-[min(92vw,420px)] flex-col overflow-y-auto bg-[#f7f8f6] px-6 pb-8 pt-[96px] text-[#102225] shadow-[-24px_0_60px_rgba(0,0,0,0.18)] lg:hidden"
      >
        <nav class="flex flex-col" aria-label="Mobile navigation">
          <NuxtLink
            v-for="link in primaryMobileLinks"
            :key="link.to"
            :to="link.to"
            class="border-b border-black/10 py-5 text-[24px] font-medium leading-none tracking-[-0.035em] transition duration-200 hover:pl-2 hover:text-[#0a5264]"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>

          <div class="border-b border-black/10 py-5">
            <button
              type="button"
              class="flex w-full items-center justify-between text-left text-[24px] font-medium leading-none tracking-[-0.035em] transition duration-200 hover:text-[#0a5264]"
              :aria-expanded="isMobileCapabilitiesOpen"
              @click="isMobileCapabilitiesOpen = !isMobileCapabilitiesOpen"
            >
              <span>Capabilities</span>
              <span
                class="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[18px] transition duration-300"
                :class="isMobileCapabilitiesOpen ? 'rotate-45 bg-[#0a5264] text-white' : ''"
              >
                +
              </span>
            </button>

            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="-translate-y-2 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-2 opacity-0"
            >
              <div
                v-if="isMobileCapabilitiesOpen"
                class="mt-5 space-y-4 rounded-[6px] border border-black/10 bg-white p-5 text-[14px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <NuxtLink
                  to="/our-capabilities"
                  class="block font-semibold text-[#0a5264]"
                  @click="closeMobileMenu"
                >
                  Our Capabilities
                </NuxtLink>

                <NuxtLink
                  to="/our-capabilities/advisory"
                  class="block transition hover:text-[#0a5264]"
                  @click="closeMobileMenu"
                >
                  Advisory
                </NuxtLink>

                <div class="space-y-3">
                  <NuxtLink
                    to="/our-capabilities/investment"
                    class="block font-medium transition hover:text-[#0a5264]"
                    @click="closeMobileMenu"
                  >
                    Investment
                  </NuxtLink>

                  <div class="space-y-3 border-l border-[#d6dfdf] pl-4 text-[#4a5d61]">
                    <NuxtLink
                      to="/our-capabilities/investment/public-investment"
                      class="block transition hover:text-[#0a5264]"
                      @click="closeMobileMenu"
                    >
                      Public Investment
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/investment/private-investment"
                      class="block transition hover:text-[#0a5264]"
                      @click="closeMobileMenu"
                    >
                      Private Investment
                    </NuxtLink>
                  </div>
                </div>

                <div class="space-y-3">
                  <NuxtLink
                    to="/our-capabilities/instruments"
                    class="block font-medium transition hover:text-[#0a5264]"
                    @click="closeMobileMenu"
                  >
                    Instruments
                  </NuxtLink>

                  <div class="space-y-3 border-l border-[#d6dfdf] pl-4 text-[#4a5d61]">
                    <NuxtLink
                      to="/our-capabilities/instruments/equity"
                      class="block transition hover:text-[#0a5264]"
                      @click="closeMobileMenu"
                    >
                      Equity
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/instruments/quasi-equity"
                      class="block transition hover:text-[#0a5264]"
                      @click="closeMobileMenu"
                    >
                      Quasi Equity
                    </NuxtLink>
                    <NuxtLink
                      to="/our-capabilities/instruments/private-credit"
                      class="block transition hover:text-[#0a5264]"
                      @click="closeMobileMenu"
                    >
                      Private Credit
                    </NuxtLink>
                  </div>
                </div>

                <NuxtLink
                  to="/fund-management"
                  class="block transition hover:text-[#0a5264]"
                  @click="closeMobileMenu"
                >
                  Fund Management
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink
            v-for="link in secondaryMobileLinks"
            :key="link.label"
            :to="link.to"
            class="border-b border-black/10 py-5 text-[24px] font-medium leading-none tracking-[-0.035em] transition duration-200 hover:pl-2 hover:text-[#0a5264]"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <button
          class="mt-8 flex h-12 w-full items-center justify-center border border-[#0a5264] bg-[#0a5264] text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-transparent hover:text-[#0a5264]"
        >
          LP Login
        </button>
      </aside>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isCapabilitiesOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileCapabilitiesOpen = ref(false)
const route = useRoute()

const primaryMobileLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
]

const secondaryMobileLinks = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Knowledge Hub', to: '/knowledge-hub' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'News', to: '/news' }
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileCapabilitiesOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    isCapabilitiesOpen.value = false
    closeMobileMenu()
  },
)

watch(isMobileMenuOpen, (isOpen) => {
  if (import.meta.server) return
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})
</script>
