

<template>
 <WhatWeDoIntro
    title="What we do"
    :paragraphs="aboutIntroParagraphs"
    :media-src="capabilitiesHeroVideo"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32"
  />
   <!-- FEATURED CARD -->
   <section
    ref="featuredCardSectionRef"
    class="capabilities-featured-section overflow-hidden bg-white"
    :class="{ 'is-visible': isFeaturedCardSectionVisible }"
  >
    <div class="mx-auto ">
      <div class="grid lg:grid-cols-2">
          
        <article class="capabilities-featured-card group relative min-h-[500px] overflow-hidden lg:min-h-[660px]">
          <img
            src="/assets/images/capabilities/cap-main.jpg"
            alt=""
            class="capabilities-featured-image absolute inset-0 h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />

          <div
            class="capabilities-featured-overlay absolute inset-0 bg-gradient-to-b from-[#005eaa]/80 via-[#003f73]/65 to-black/50 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:from-[#005eaa]/85 group-hover:via-[#003f73]/70 group-hover:to-black/55"
          />

          <div
            class="relative flex h-full flex-col justify-between p-8 md:p-12 lg:p-14"
          >
            <div class="flex items-start justify-between">
              <h2
                class="capabilities-featured-title text-[38px] font-medium leading-none text-white md:text-[48px] lg:text-[58px] pt-[80px] left-[103px]"
              >
                Capabilities
                <br />
                    Overview
              </h2>

            
            </div>

           
          </div>
        </article>
        <!-- LEFT SIDE -->
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <!-- Advisory -->
          <article
            class="capabilities-tile bg-[#0d5563] px-8 py-8 md:px-10 lg:px-20 md:py-10 lg:h-[330px]"
            style="--tile-delay: 180ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-white"
            >
              Advisory
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-white/90"
            >
              Project development, transaction structuring,
              market access, valuation, ESG alignment and
              investor readiness.
            </p>
          </article>

          <!-- Investment -->
          <article
            class="capabilities-tile bg-[#072f4a] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
            style="--tile-delay: 260ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-white"
            >
              Investment
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-white/90"
            >
              Operating, brownfield, growth and selected
              late-stage greenfield infrastructure assets
              across Africa.
            </p>
          </article>

          <!-- Instruments -->
          <article
            class="capabilities-tile bg-[#dce8e5] px-8 py-8 md:px-10 lg:px-20  md:py-10 lg:h-[330px]"
            style="--tile-delay: 340ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-[#08243a]"
            >
              Instruments
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-[#16354b]"
            >
              Flexible investment instruments including
              equity, quasi-equity and private credit.
            </p>
          </article>

          <!-- Fund Management -->
          <article
            class="capabilities-tile bg-[#c6ddda] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
            style="--tile-delay: 420ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-[#08243a]"
            >
              Fund Management
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-[#16354b]"
            >
              Infrastructure-focused vehicles and
              portfolios with disciplined governance,
              risk management and long-term value creation.
            </p>
          </article>
        </div>

     
      </div>
    </div>
  </section>

</template>
<script setup>
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import capabilitiesHeroVideo from '~/assets/images/capabilities/skyline.jpg'

const isFeaturedCardSectionVisible = ref(false)
const featuredCardSectionRef = ref(null)
let featuredCardSectionObserver = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isFeaturedCardSectionVisible.value = true
    return
  }

  if (!featuredCardSectionRef.value) {
    isFeaturedCardSectionVisible.value = true
    return
  }

  featuredCardSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isFeaturedCardSectionVisible.value = true
      featuredCardSectionObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  featuredCardSectionObserver.observe(featuredCardSectionRef.value)
})

onBeforeUnmount(() => {
  featuredCardSectionObserver?.disconnect()
})

useHead({
  title: 'Our Capabilities | INFRAGORA Advisory, Investment & Fund Management',
  meta: [
    {
      name: 'description',
      content:
        'Explore INFRAGORA capabilities in infrastructure advisory, public and private investment, equity, quasi-equity, private credit and fund management.',
    },
       {
      name: 'keywords',
      content:
        'infrastructure advisory Africa, infrastructure investment Africa, fund management Africa, equity quasi equity private credit',
    },
  ],
})
const aboutIntroParagraphs = [
  'INFRAGORA combines advisory, investment, capital structuring and fund management capabilities to support infrastructure investment across Africa.',
  "Our integrated platform is designed to help asset owners, developers and investors move from opportunity identification to bankability, investment, portfolio growth, listing readiness and structured exit. We focus on creating investable, transparent and scalable infrastructure opportunities that can attract long-term capital."
]

</script>

<style scoped>
.capabilities-featured-card,
.capabilities-tile,
.capabilities-featured-title {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.capabilities-featured-card {
  transform: translate3d(0, 54px, 0) scale(.985);
  transform-origin: center bottom;
  transition:
    opacity 900ms ease,
    transform 1100ms cubic-bezier(.16, 1, .3, 1);
}

.capabilities-featured-image {
  filter: saturate(.92) contrast(.98);
  transform: scale(1.06);
  transition:
    filter 1000ms ease,
    transform 1500ms cubic-bezier(.16, 1, .3, 1);
  will-change: filter, transform;
}

.capabilities-featured-overlay {
  opacity: .82;
  transition: opacity 1000ms ease;
}

.capabilities-featured-title {
  filter: blur(8px);
  transform: translate3d(0, 32px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 180ms;
}

.capabilities-tile {
  transform: translate3d(0, 48px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 820ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: var(--tile-delay, 0ms);
}

.capabilities-tile h3,
.capabilities-tile p {
  transform: translate3d(0, 18px, 0);
  transition:
    transform 820ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--tile-delay, 0ms) + 100ms);
}

.capabilities-featured-section.is-visible .capabilities-featured-card,
.capabilities-featured-section.is-visible .capabilities-tile,
.capabilities-featured-section.is-visible .capabilities-featured-title {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.capabilities-featured-section.is-visible .capabilities-featured-image {
  filter: saturate(1) contrast(1);
  transform: scale(1);
}

.capabilities-featured-section.is-visible .capabilities-featured-overlay {
  opacity: 1;
}

.capabilities-featured-section.is-visible .capabilities-tile h3,
.capabilities-featured-section.is-visible .capabilities-tile p {
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .capabilities-featured-card,
  .capabilities-tile,
  .capabilities-featured-title,
  .capabilities-featured-image,
  .capabilities-featured-overlay,
  .capabilities-tile h3,
  .capabilities-tile p {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>
