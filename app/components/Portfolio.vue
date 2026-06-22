

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
  <ImageCard
    title="INFRAGORA Investment 
Vehicle 1"
    :paragraphs="coverageText"
    :image="bridgeImage"
    image-alt="African infrastructure development"
  />
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
import bridgeImage from '~/assets/images/bridge.jpg'
import ImageCard from './common/ImageCard.vue';

const isPortfolioFocusVisible = ref(false)
const isImageCoverVisible = ref(false)
const portfolioFocusRef = ref<HTMLElement | null>(null)
const imageCoverRef = ref<HTMLElement | null>(null)
let portfolioFocusObserver: IntersectionObserver | null = null
let imageCoverObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isPortfolioFocusVisible.value = true
    isImageCoverVisible.value = true
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
})

onBeforeUnmount(() => {
  portfolioFocusObserver?.disconnect()
  imageCoverObserver?.disconnect()
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
const coverageText = [
  'INFRAGORA Investment Vehicle 1, or IIV1, is designed to invest in a diversified portfolio of African infrastructure assets. The vehicle targets operating and growth infrastructure opportunities, including brownfield assets with stable cash flows, assets with expansion potential and selected late-stage greenfield projects approaching commercial operation..',
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
  .portfolio-image-cover-text {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>
