<template>
      <section class="relative min-h-[760px] overflow-hidden md:min-h-screen">
  <!-- VIDEO -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/assets/video/road.mp4" />
  </video>

  <!-- Overlay -->
  <div
    class="absolute inset-0 bg-black/35"
  />

  <div
    class="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/15"
  />

  <!-- CONTENT -->
  <div   
    class="relative z-10 mx-auto px-4 sm:px-10 lg:px-20 xl:px-20"
  >
    <div
      class="grid min-h-[760px] min-w-0 items-end gap-6 pb-7 pt-24 sm:gap-8 sm:pb-8 sm:pt-28 md:min-h-screen md:pb-12 lg:grid-cols-[minmax(260px,1fr)_minmax(680px,760px)] lg:gap-12"
    >
      <!-- LEFT -->
      <div
        class="order-2 max-w-[360px] pb-3 text-white sm:pb-6 lg:order-1 lg:pb-8"
      >
        <div class="mb-5 flex gap-3 sm:mb-6">
          <img
            :src="starIcon"
            alt=""
            class="mt-[6px] h-4 w-4 shrink-0 object-contain sm:mt-[8px] sm:h-5 sm:w-5"
          />

          <h2
            class="text-[20px] font-semibold leading-[1.12] sm:text-[22px] lg:text-[24px]"
          >
            Africa's Infrastructure Secondary Market Platform
          </h2>
        </div>

        <button
          class="flex h-11 items-center gap-5 bg-[#edf4f2] px-5 text-[9px] font-bold uppercase tracking-[0.04em] text-black transition hover:bg-white sm:h-12 sm:gap-6 sm:px-6 sm:text-[10px]"
        >
          Explore Our Platform
          <img
            :src="arrowOutwardIcon"
            alt=""
            class="h-3 w-3 object-contain"
          />
        </button>
      </div>

      <!-- RIGHT PANEL -->
      <div
        class="relative order-1 min-w-0 max-w-full overflow-hidden bg-[rgba(16,82,87,.86)] px-5 py-6 text-white backdrop-blur-[1px] sm:px-8 sm:py-9 md:px-10 lg:order-2 lg:px-9 lg:py-10"
      >
        <h1
          class="max-w-[680px] break-words text-[23px] font-semibold leading-[1.04] tracking-[-0.02em] text-white min-[390px]:text-[28px] sm:text-[40px] lg:text-[38px] xl:text-[40px]"
        >
          Unlocking liquidity. Mobilising capital.
          Accelerating African infrastructure.
        </h1>

        <p
          class="mt-4 max-w-[650px] break-words text-[12px] leading-[1.5] text-white/90 sm:mt-5 sm:text-[13px] lg:max-w-[620px]"
        >
          We are an African-led investment and fund management platform
          focused on creating structured exit and secondary market solutions
          for Africa's infrastructure market. We help unlock capital trapped
          in operating infrastructure assets and support the growth of
          infrastructure as a mainstream asset class across Africa.
        </p>

        <button
          class="mt-6 flex h-11 items-center gap-6 bg-[#18e6c0] px-5 text-[9px] font-bold uppercase tracking-[0.04em] text-black transition hover:bg-[#35ffd8] sm:mt-7 sm:gap-7 sm:px-6 sm:text-[10px]"
        >
          Partner With Us
          <img
            :src="arrowOutwardIcon"
            alt=""
            class="h-3 w-3 object-contain"
          />
        </button>

        <!-- Slider -->
        <div
          class="mt-6 flex gap-3 sm:absolute sm:right-8 sm:top-[210px] sm:mt-0 sm:gap-4 lg:right-9"
        >
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-[18px] leading-none text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#105257] sm:h-8 sm:w-8 sm:text-[17px]"
            aria-label="Previous platform card"
            @click="showPreviousHeroCard"
          >
            &lsaquo;
          </button>

          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-[18px] leading-none text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#105257] sm:h-8 sm:w-8 sm:text-[17px]"
            aria-label="Next platform card"
            @click="showNextHeroCard"
          >
            &rsaquo;
          </button>
        </div>

        <!-- Cards -->
        <div
          class="relative -mr-5 mt-6 overflow-hidden [--hero-card-gap:1rem] [--hero-card-width:min(58vw,200px)] sm:-mr-8 sm:mt-8 sm:[--hero-card-gap:1.5rem] sm:[--hero-card-width:min(42vw,244px)] md:-mr-10 lg:-mr-9"
        >
          <div
            class="flex gap-4 pr-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] sm:gap-6"
            :style="{ transform: `translateX(calc(-${heroCarouselIndex} * (var(--hero-card-width) + var(--hero-card-gap))))` }"
          >
            <article
              v-for="card in heroCarouselCards"
              :key="card.id"
              class="h-[118px] w-[var(--hero-card-width)] shrink-0 bg-white shadow-[0_22px_45px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-1 sm:h-[170px] lg:h-[210px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
const heroCarouselCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]
const heroCarouselIndex = ref(0)

const showNextHeroCard = () => {
  heroCarouselIndex.value =
    heroCarouselIndex.value >= heroCarouselCards.length - 3
      ? 0
      : heroCarouselIndex.value + 1
}

const showPreviousHeroCard = () => {
  heroCarouselIndex.value =
    heroCarouselIndex.value <= 0
      ? heroCarouselCards.length - 3
      : heroCarouselIndex.value - 1
}
</script>