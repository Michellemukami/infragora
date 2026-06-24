

<template>
 <WhatWeDoIntro
    title="Advisory"
    :paragraphs="aboutIntroParagraphs"
    :media-src="AdvisoryHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32"
  />
  <!-- ADVISORY SERVICES -->
   <section
    ref="advisoryServicesRef"
    class="advisory-services-section overflow-hidden bg-[#fbfbfb]"
    :class="{ 'is-visible': isAdvisoryServicesVisible }"
  >
    <div
      class="mx-auto w-full px-5 md:py-14 sm:px-8 sm:py-16 lg:px-16  xl:px-[80px]"
    >
      <header class="advisory-services-heading mb-9 sm:mb-10 lg:mb-12">
        <h2
          class="max-w-[220px] text-[28px] font-medium leading-[1.08] tracking-[-0.04em] text-[#202020] sm:text-[34px] lg:text-[40px]"
        >
          <span class="block">Advisory</span>
          <span class="block font-normal">Services</span>
          
        </h2>
      </header>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
        <article
          v-for="(service, serviceIndex) in services"
          :key="service.title"
          class="advisory-service-card flex min-h-[230px] flex-col bg-[#d9e8e3] px-5 py-5 sm:min-h-[245px] sm:px-6 sm:py-6 lg:min-h-[270px] lg:px-7 lg:py-7 xl:min-h-[285px]"
          :style="{ '--service-delay': `${120 + serviceIndex * 75}ms` }"
        >
          <h3
            class="max-w-[280px] text-[18px] font-semibold leading-[1.22] tracking-[-0.035em] text-[#005263] sm:text-[19px] lg:text-[20px]"
          >
            {{ service.title }}
          </h3>

          <p
            class="mt-auto max-w-[320px] pt-10 text-[12px] font-normal leading-[1.45] tracking-[-0.015em] text-[#202020] sm:text-[12.5px] lg:text-[13px]"
          >
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <NumberCard
    title="What We Support"
    :items="supportItems"
    section-class="bg-[#fbfbfb]"
    title-class="text-[#0a5264]"
    item-class="border-[#bdd3d1]"
    number-class="text-[#f6b800]"
    label-class="text-[#253035]"
  />

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import NumberCard from './common/NumberCard.vue'
import AdvisoryHeroImage from '~/assets/images/capabilities/advisory.jpg'

const isAdvisoryServicesVisible = ref(false)
const advisoryServicesRef = ref<HTMLElement | null>(null)
let advisoryServicesObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isAdvisoryServicesVisible.value = true
    return
  }

  if (!advisoryServicesRef.value) {
    isAdvisoryServicesVisible.value = true
    return
  }

  advisoryServicesObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isAdvisoryServicesVisible.value = true
      advisoryServicesObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  advisoryServicesObserver.observe(advisoryServicesRef.value)
})

onBeforeUnmount(() => {
  advisoryServicesObserver?.disconnect()
})

useHead({
  title: 'Infrastructure Advisory | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA provides advisory services for project development, transaction structuring, ESG alignment, valuation, investor readiness and capital mobilisation.',
    },
    {
      name: 'keywords',
      content:
        'infrastructure advisory, project development advisory, transaction structuring Africa, capital mobilisation, ESG advisory',
    },
  ],
})
const aboutIntroParagraphs = [
  'INFRAGORA Advisory our sister entity provides an end to end curated deal development, structuring, and capital raising services which ensures the bankability of infrastructure assets, and supports developers, investors and portfolio companies across the project and investment lifecycle. We help transform infrastructure opportunities into bankable, investable and scalable assets by combining market insight, transaction advisory expertise, deal structuring and capital access to ensure financial close. INFRAGORA Advisory helps accelerate the pipeline of bankable greenfield and near end or semi greenfield growth opportunities for the INFRAGORA Secondary Market Platform.',
 
]
type AdvisoryService = {
  title: string
  description: string
}

type NumberCardItem = {
  number: string
  label: string
}

const services: AdvisoryService[] = [
  {
    title: 'Project Development Advisory',
    description:
      'Carry out and coordinate the detailed project preparation process of early-stage and growth-stage opportunities. This include conducting pre-feasibility and bankable feasibility studies - market assessment, technical studies, legal and regulatory, financial analysis and business plan, environmental and social impact studies, etc. as part of a robust deal curation process.',
  },
  {
    title: 'Transaction Structuring',
    description:
      'Deal structuring, industry and investor matching and positioning, investment derisking, capital stack structuring and optimisation including the use of innovative financial engineering or instruments and blended finance.',
  },
  {
    title: 'Capital Rasing or Mobilisation ',
    description:
      'Fundraising readiness, investor engagement, optimised investor mix and strategic capital partnerships and participation.',
  },
  {
    title: 'Valuation',
    description:
      'Asset valuation, price discovery, residual growth assessment, acquisition assessment',
  },
  {
    title: 'ESG and Impact Advisory',
    description:
      'ESG assessment and index referencing, sustainability, climate resilience, social impact and governance principles embedded into infrastructure investment planning and execution.',
  },
  {
    title: 'Secondary Market Readiness',
    description:
      'Financial close and preparation for private and public investment and structured exits, listing pathways, asset-backed securities and institutional participation.',
  },
]

const supportItems: NumberCardItem[] = [
  { number: '01', label: 'Asset developers' },
  { number: '02', label: 'Infrastructure companies' },
  { number: '03', label: 'Portfolio companies' },
  { number: '04', label: 'DFIs and investment funds' },
  { number: '05', label: 'Public sector and PPP stakeholders' },
  { number: '06', label: 'Institutional investors' },
  { number: '07', label: 'Strategic partners' },
  { number: '08', label: 'Fund managers and asset owners' },
]
</script>

<style scoped>
.advisory-services-heading,
.advisory-service-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.advisory-services-heading {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 70ms;
}

.advisory-service-card {
  filter: blur(10px);
  transform: translate3d(0, 48px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 840ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 840ms ease,
    box-shadow 980ms ease;
  transition-delay: var(--service-delay, 0ms);
  box-shadow: 0 24px 55px rgb(0 82 99 / 0);
}

.advisory-service-card h3,
.advisory-service-card p {
  transform: translate3d(0, 16px, 0);
  transition: transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--service-delay, 0ms) + 120ms);
}

.advisory-services-section.is-visible .advisory-services-heading,
.advisory-services-section.is-visible .advisory-service-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.advisory-services-section.is-visible .advisory-service-card {
  box-shadow: 0 24px 55px rgb(0 82 99 / 0.08);
}

.advisory-services-section.is-visible .advisory-service-card h3,
.advisory-services-section.is-visible .advisory-service-card p {
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .advisory-services-heading,
  .advisory-service-card,
  .advisory-service-card h3,
  .advisory-service-card p {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: none;
  }
}
</style>
