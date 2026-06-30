

<template>
 <WhatWeDoIntro
    title="Portfolio"
    :paragraphs="aboutIntroParagraphs"
    :media-src="portfolioImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
   />
   <!-- Portfolio Focus Areas -->
<section
  ref="portfolioFocusRef"
  class="portfolio-focus-section overflow-hidden bg-[#f5f5f5]"
  :class="{ 'is-visible': isPortfolioFocusVisible }"
>
  <div class="mx-auto pl-6 sm:pl-10 lg:pl-20 py-14 sm:py-20 lg:py-20    ">

    <!-- Header -->
    <div class="portfolio-focus-header mb-12 flex items-end justify-between pr-6 sm:pr-10 lg:pr-20">
      <h2
        class="text-[34px] leading-[0.95] font-medium tracking-[-0.04em] lg:text-[42px]"
      >
        Portfolio
 <br />
        Focus Areas
      </h2>

      <div class="portfolio-focus-controls flex gap-3">
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
          aria-label="Previous news item"
          @click="showPreviousNewsPost"
        >
          &lsaquo;
        </button>

        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
          aria-label="Next news item"
          @click="showNextNewsPost"
        >
          &rsaquo;
        </button>
      </div>
    </div>

    <!-- Cards -->
    <div class="portfolio-focus-viewport overflow-hidden pb-4">
      <div
        class="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        :style="{ transform: `translateX(calc(-${newsCarouselIndex} * (min(82vw, 380px) + 1.5rem)))` }"
      >
        <!-- Card -->
        <article
          v-for="(post, postIndex) in newsCarouselPosts"
          :key="post.carouselId"
          class="portfolio-focus-card group w-[min(82vw,380px)] flex-shrink-0"
          :style="{ '--portfolio-focus-delay': `${140 + (postIndex % posts.length) * 90}ms` }"
        >
          <div class="relative overflow-hidden bg-white">

            <!-- Image -->
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-[420px] w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 sm:h-[460px]"
              />
            </div>

            <!-- Bottom Fade -->
            <div
              class="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-white via-white/85 to-transparent"
            />

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <h3 class="max-w-[260px] text-[20px] font-medium leading-[1.05]">
                {{ post.title }}
              </h3>

              <div class="mt-5 flex items-center gap-4">
                <span class="text-[12px] tracking-wide">
                  Read More
                </span>

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>

  </div>
</section>
  <NumberCard
    title="Typical Use Cases"
    :items="supportItems0"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />
  <!-- Image cover -->
  <section
    ref="imageCoverRef"
    class="portfolio-image-cover-section w-full overflow-hidden pl-6 md:pl-10 xl:pl-20 py-12 md:py-16 lg:py-20"
    :class="{ 'is-visible': isImageCoverVisible }"
  >

      <div
             class="portfolio-image-cover-panel relative mr-6  min-h-[360px] overflow-hidden bg-[#002d49] bg-cover  sm:min-h-[340px]  md:mr-10  md:min-h-[390px] lg:min-h-[450px] xl:mr-20"
             :style="{ backgroundImage: `url(${tunnel})` }"
           >
             <div
               class="portfolio-image-cover-overlay absolute inset-0 bg-[linear-gradient(180deg,#002d49_0%,rgba(0,45,73,.92)_45%,rgba(0,45,73,.72)_100%)] sm:bg-[linear-gradient(90deg,#002d49_0%,#002d49_50%,rgba(0,45,73,.72)_72%,rgba(0,45,73,.1)_100%)] md:bg-[linear-gradient(90deg,#002d49_0%,#002d49_43%,rgba(0,45,73,.78)_57%,rgba(0,45,73,.08)_100%)]"
             />
     
             <div class="relative flex min-h-[360px] items-center px-5 py-10 sm:min-h-[340px] sm:px-8 sm:py-12 md:min-h-[390px] md:px-14 lg:min-h-[450px] lg:px-16">
               <div class="portfolio-image-cover-copy max-w-[440px]">
                 <h3 class="portfolio-image-cover-title mb-6 text-[24px] font-semibold leading-none text-white sm:mb-8 sm:text-[28px] lg:mb-9 lg:text-[34px]">
                   Pipeline Positioning 
                 </h3>
     
                 <p class="portfolio-image-cover-text max-w-[36rem] text-[12px] leading-[1.6] text-white sm:text-[13px] lg:text-[14px]">
                  INFRAGORA has identified a robust pipeline of infrastructure investment opportunities across Africa, with focus areas spanning power, ICT, transport and infrastructure finance services. The pipeline is designed to support the creation of a diversified, scalable and investable portfolio of African infrastructure assets.
                 </p>
               </div>
             </div>
           </div>
  </section>
  <!-- here -->
  <section
    ref="investmentVehicleRef"
    class="iiv-profile bg-white px-6 py-16 text-[#062f4a] sm:px-10 lg:px-20"
    :class="{ 'is-visible': isInvestmentVehicleVisible }"
  >
    <div class="mx-auto max-w-[1440px]">
      <h2 class="iiv-profile-heading mx-auto max-w-[760px] text-center text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[40px] lg:text-[48px]">
        Profiling INFRAGORA Investment
        <span class="block font-normal">Vehicle 1</span>
      </h2>

      <div class="mt-14 grid items-start gap-10 md:mt-16 md:grid-cols-[1fr_0.9fr] md:gap-16 lg:mt-20 lg:grid-cols-[0.96fr_1fr] lg:gap-24 xl:gap-32">
        <div class="iiv-profile-copy max-w-[620px] md:pt-10 lg:pt-14">
          <p class="text-[13px] font-normal leading-[1.48] tracking-[-0.02em] text-[#062f4a] sm:text-[14px] lg:text-[15px]">
            {{ investmentVehicleCopy }}
          </p>
        </div>

        <aside class="iiv-value-card w-full bg-[#073a58] px-7 py-7 text-white sm:px-9 sm:py-8 lg:px-10 lg:py-9">
          <div class="flex items-center gap-4 border-b border-white/25 pb-5">
            <span class="flex h-7 w-7 items-center justify-center rounded-full border border-[#4d91aa]">
              <span class="block h-3.5 w-3.5 rounded-full bg-[#4d91aa]" />
            </span>
            <span class="text-[14px] font-medium uppercase leading-none tracking-[0.03em] text-[#5e9cb2] sm:text-[15px]">
              USD
            </span>
          </div>

          <strong class="mt-8 block text-[70px] font-semibold leading-[0.9] tracking-[-0.075em] text-[#e3f0f0] sm:text-[92px] lg:text-[108px] xl:text-[120px]">
            $1.2b
          </strong>

          <p class="mt-5 text-[12px] font-medium leading-none text-white sm:text-[13px] lg:text-[14px]">
            Value of listed investment holding vehicle.
          </p>
        </aside>
      </div>
    </div>
  </section>
   <!-- here2 -->
  <section
    ref="phaseImplementationRef"
    class="phase-implementation bg-[#073a58] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-24"
    :class="{ 'is-visible': isPhaseImplementationVisible }"
  >
    <div class="mx-auto max-w-[1440px]">
      <h2 class="phase-heading max-w-[420px] text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[40px] lg:text-[48px]">
        Phase-wise
        <span class="block font-normal">Implementation</span>
      </h2>

      <div class="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-16 lg:mt-24 lg:gap-24 xl:gap-32">
        <article
          v-for="(phase, phaseIndex) in implementationPhases"
          :key="phase.title"
          class="phase-card"
          :style="{ '--phase-delay': `${160 + phaseIndex * 120}ms` }"
        >
          <p class="text-[10px] font-semibold uppercase leading-none tracking-[0.02em] text-white/90 sm:text-[11px]">
            {{ phase.phase }}
          </p>

          <h3 class="mt-4 text-[22px] font-semibold leading-none tracking-[-0.035em] text-white sm:text-[26px] lg:text-[30px]">
            {{ phase.title }}
          </h3>

          <div class="mt-10 grid grid-cols-2 gap-8 border-b border-[#4d91aa]/70 pb-4 sm:mt-12 lg:gap-10">
            <div
              v-for="metric in phase.metrics"
              :key="metric.value"
              class="min-w-0"
              :class="phase.metrics.length === 1 ? 'col-span-2' : ''"
            >
              <div class="flex items-center gap-3">
                <span class="flex h-4 w-4 items-center justify-center rounded-full border border-[#4d91aa]">
                  <span class="block h-2 w-2 rounded-full bg-[#4d91aa]" />
                </span>
                <span class="text-[10px] font-medium uppercase leading-none tracking-[0.03em] text-[#5e9cb2] sm:text-[11px]">
                  USD
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-8 lg:gap-10">
            <strong
              v-for="metric in phase.metrics"
              :key="`${phase.title}-${metric.value}`"
              class="text-[42px] font-semibold leading-none tracking-[-0.075em] text-[#e3f0f0] sm:text-[52px] lg:text-[62px] xl:text-[70px]"
              :class="phase.metrics.length === 1 ? 'col-span-2' : ''"
            >
              {{ metric.value }}
            </strong>
          </div>

          <p class="mt-8 max-w-[520px] text-[12px] font-medium leading-[1.55] tracking-[-0.015em] text-white sm:text-[13px] lg:text-[14px]">
            {{ phase.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import aboutHeroVideo from '~/assets/images/capabilities/skyline.jpg'
import green from "~/assets/images/portfolio/green.jpg"
import ict from "~/assets/images/portfolio/ict.jpg"
import train from "~/assets/images/portfolio/train.jpg"
import water from "~/assets/images/portfolio/water.jpg"
import tunnel from "~/assets/images/portfolio/tunnel.png"
import portfolioImage from "~/assets/images/portfolio/portfolio2.jpg"

const isPortfolioFocusVisible = ref(false)
const isImageCoverVisible = ref(false)
const isInvestmentVehicleVisible = ref(false)
const isPhaseImplementationVisible = ref(false)
const portfolioFocusRef = ref<HTMLElement | null>(null)
const imageCoverRef = ref<HTMLElement | null>(null)
const investmentVehicleRef = ref<HTMLElement | null>(null)
const phaseImplementationRef = ref<HTMLElement | null>(null)
let portfolioFocusObserver: IntersectionObserver | null = null
let imageCoverObserver: IntersectionObserver | null = null
let investmentVehicleObserver: IntersectionObserver | null = null
let phaseImplementationObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isPortfolioFocusVisible.value = true
    isImageCoverVisible.value = true
    isInvestmentVehicleVisible.value = true
    isPhaseImplementationVisible.value = true
    return
  }

  if (!portfolioFocusRef.value) {
    isPortfolioFocusVisible.value = true
  } else {
    portfolioFocusObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isPortfolioFocusVisible.value = true
        portfolioFocusObserver?.disconnect()
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    portfolioFocusObserver.observe(portfolioFocusRef.value)
  }

  if (!imageCoverRef.value) {
    isImageCoverVisible.value = true
  } else {
    imageCoverObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isImageCoverVisible.value = true
        imageCoverObserver?.disconnect()
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    imageCoverObserver.observe(imageCoverRef.value)
  }

  if (!investmentVehicleRef.value) {
    isInvestmentVehicleVisible.value = true
  } else {
    investmentVehicleObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isInvestmentVehicleVisible.value = true
        investmentVehicleObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    investmentVehicleObserver.observe(investmentVehicleRef.value)
  }

  if (!phaseImplementationRef.value) {
    isPhaseImplementationVisible.value = true
  } else {
    phaseImplementationObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isPhaseImplementationVisible.value = true
        phaseImplementationObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    phaseImplementationObserver.observe(phaseImplementationRef.value)
  }
})

onBeforeUnmount(() => {
  portfolioFocusObserver?.disconnect()
  imageCoverObserver?.disconnect()
  investmentVehicleObserver?.disconnect()
  phaseImplementationObserver?.disconnect()
})

useHead({
  title: 'Portfolio | INFRAGORA Infrastructure Investment Focus',
  meta: [
    {
      name: 'description',
      content:
        'Explore INFRAGORA portfolio focus across green energy, ICT infrastructure, sustainable transport, water and infrastructure finance services in Africa.',
    },
    {
      name: 'keywords',
      content:
        'infrastructure portfolio Africa, green energy investment, ICT infrastructure, sustainable transport, water infrastructure',
    },
  ],
})
const aboutIntroParagraphs = [
  "We were created to address one of Africa's most important infrastructure finance challenges: the lack of liquidity and structured exit pathways for investors, developers and asset owners. By enabling capital recycling, structured exits, asset-backed securities and institutional investor access, INFRAGORA helps unlock value from existing infrastructure assets while mobilising new capital for future development.",

]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Strong commercial fundamentals.' },
  { number: '02', label: 'Stable or visible cash flows.' },
  { number: '03', label: 'Clear expansion potential.' },
  { number: '04', label: 'ESG alignment.' },
  { number: '05', label: 'Developmental impact.' },
  { number: '06', label: 'Strong governance.' },
  { number: '07', label: 'Institutional investor relevance.' },
  { number: '08', label: 'Potential for liquidity, listing or structured exit.' },
]

const investmentVehicleCopy =
  'INFRAGORA has launched the INFRAGORA Investment Vehicle 1 ("IIV1" or the "Investment Vehicle") - a US$1-2 billion listed investment holding vehicle. IIV1 would be listed in key African and global markets, with initial listing at London Stock Exchange (LSE) and the Johannesburg Stock Exchange (JSE) and further listings at the Nigeria Stock Exchange (NGX), Nairobi Stock Exchange (NSE), and the US (NYSE or NASDAQ), in a phased timeline.'

const implementationPhases = [
  {
    phase: 'Phase I',
    title: 'Equity funding',
    metrics: [{ value: '$600M' }, { value: '$1.4b' }],
    description:
      'Initial capital raise of US$600 million by no later than end of H2 2026 and an additional US$1.4 billion by no later than end of H1 2027.',
  },
  {
    phase: 'Phase II',
    title: 'Debt funding',
    metrics: [{ value: '$3b - $5b' }],
    description:
      'Additional US$3-5 billion, through infrastructure backed debt securities, follow-on equity offerings, and infrastructure ETFs.',
  },
]

const posts = [
  {
    id: 1,
    title: "Green and Renewable Energy",
    image: green
  },
  {
    id: 2,
    title: "ICT and Digital Infrastructure",
    image: ict
  },
  {
    id: 3,
    title: "Sustainable Transport",
    image: train
  },
  {
    id: 4,
    title: "Water and Sanitation",
    image: water    
  }
]

const newsCarouselIndex = ref(0)

const newsCarouselPosts = computed(() =>
  [...posts, ...posts].map((post, index) => ({
    ...post,
    carouselId: `${post.id}-${index}`,
  }))
)

const showNextNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value >= posts.length - 1
      ? 0
      : newsCarouselIndex.value + 1
}

const showPreviousNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value <= 0
      ? posts.length - 1
      : newsCarouselIndex.value - 1
}

</script>

<style scoped>
.portfolio-focus-header,
.portfolio-focus-controls,
.portfolio-focus-viewport,
.portfolio-focus-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.portfolio-focus-header {
  filter: blur(8px);
  transform: translate3d(0, 36px, 0);
  transition:
    opacity 860ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: 70ms;
}

.portfolio-focus-controls {
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 760ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 170ms;
}

.portfolio-focus-viewport {
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 200ms;
}

.portfolio-focus-card {
  filter: blur(10px);
  transform: translate3d(0, 54px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1040ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: var(--portfolio-focus-delay, 0ms);
}

.portfolio-focus-card img {
  filter: saturate(.92) contrast(.98);
  transform: scale(1.045);
  transition:
    filter 1000ms ease,
    transform 1400ms cubic-bezier(.16, 1, .3, 1);
  will-change: filter, transform;
}

.portfolio-focus-card h3,
.portfolio-focus-card span,
.portfolio-focus-card svg {
  transform: translate3d(0, 16px, 0);
  transition: transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--portfolio-focus-delay, 0ms) + 130ms);
}

.portfolio-focus-section.is-visible .portfolio-focus-header,
.portfolio-focus-section.is-visible .portfolio-focus-controls,
.portfolio-focus-section.is-visible .portfolio-focus-viewport,
.portfolio-focus-section.is-visible .portfolio-focus-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.portfolio-focus-section.is-visible .portfolio-focus-card img {
  filter: saturate(1) contrast(1);
  transform: scale(1);
}

.portfolio-focus-section.is-visible .portfolio-focus-card h3,
.portfolio-focus-section.is-visible .portfolio-focus-card span,
.portfolio-focus-section.is-visible .portfolio-focus-card svg {
  transform: translate3d(0, 0, 0);
}

.portfolio-image-cover-panel,
.portfolio-image-cover-overlay,
.portfolio-image-cover-title,
.portfolio-image-cover-text {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.portfolio-image-cover-panel {
  filter: saturate(.9) contrast(.98);
  transform: translate3d(0, 54px, 0) scale(.985);
  transform-origin: center bottom;
  transition:
    opacity 900ms ease,
    transform 1100ms cubic-bezier(.16, 1, .3, 1),
    filter 1100ms ease;
}

.portfolio-image-cover-overlay {
  opacity: 0;
  transition: opacity 1000ms ease 160ms;
}

.portfolio-image-cover-title {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 220ms;
}

.portfolio-image-cover-text {
  filter: blur(8px);
  transform: translate3d(0, 26px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 330ms;
}

.portfolio-image-cover-section.is-visible .portfolio-image-cover-panel,
.portfolio-image-cover-section.is-visible .portfolio-image-cover-title,
.portfolio-image-cover-section.is-visible .portfolio-image-cover-text {
  opacity: 1;
  filter: blur(0) saturate(1) contrast(1);
  transform: translate3d(0, 0, 0) scale(1);
}

.portfolio-image-cover-section.is-visible .portfolio-image-cover-overlay {
  opacity: 1;
}

.iiv-profile-heading,
.iiv-profile-copy,
.iiv-value-card,
.phase-heading,
.phase-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.iiv-profile-heading,
.phase-heading {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 840ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1),
    filter 840ms ease;
  transition-delay: 80ms;
}

.iiv-profile-copy {
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 820ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 210ms;
}

.iiv-value-card {
  filter: blur(10px);
  transform: translate3d(0, 52px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1040ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease,
    box-shadow 1040ms ease;
  transition-delay: 280ms;
  box-shadow: 0 24px 56px rgb(7 58 88 / 0);
}

.iiv-value-card strong,
.iiv-value-card p,
.iiv-value-card > div {
  transform: translate3d(0, 18px, 0);
  transition: transform 880ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 420ms;
  will-change: transform;
}

.phase-card {
  filter: blur(10px);
  transform: translate3d(0, 54px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1040ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: var(--phase-delay, 0ms);
}

.phase-card > * {
  transform: translate3d(0, 18px, 0);
  transition: transform 880ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--phase-delay, 0ms) + 130ms);
  will-change: transform;
}

.iiv-profile.is-visible .iiv-profile-heading,
.iiv-profile.is-visible .iiv-profile-copy,
.iiv-profile.is-visible .iiv-value-card,
.phase-implementation.is-visible .phase-heading,
.phase-implementation.is-visible .phase-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.iiv-profile.is-visible .iiv-value-card {
  box-shadow: 0 24px 56px rgb(7 58 88 / 0.14);
}

.iiv-profile.is-visible .iiv-value-card strong,
.iiv-profile.is-visible .iiv-value-card p,
.iiv-profile.is-visible .iiv-value-card > div,
.phase-implementation.is-visible .phase-card > * {
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-focus-header,
  .portfolio-focus-controls,
  .portfolio-focus-viewport,
  .portfolio-focus-card,
  .portfolio-focus-card img,
  .portfolio-focus-card h3,
  .portfolio-focus-card span,
  .portfolio-focus-card svg,
  .portfolio-image-cover-panel,
  .portfolio-image-cover-overlay,
  .portfolio-image-cover-title,
  .portfolio-image-cover-text,
  .iiv-profile-heading,
  .iiv-profile-copy,
  .iiv-value-card,
  .iiv-value-card strong,
  .iiv-value-card p,
  .iiv-value-card > div,
  .phase-heading,
  .phase-card,
  .phase-card > * {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>
