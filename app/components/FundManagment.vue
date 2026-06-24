

<template>
 <WhatWeDoIntro
    title="Fund Management"
    :paragraphs="aboutIntroParagraphs"
    :media-src="fundManagementHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

<section
  ref="benefitsSectionRef"
  class="fund-benefits-section overflow-hidden"
  :class="{ 'is-visible': isBenefitsSectionVisible }"
>
     <!-- Benefits section -->
    <div
      class="mx-auto px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <!-- Desktop composition -->
      <div class="hidden grid-cols-3 gap-7 md:grid">
        <!-- Main title occupies the first two cells -->
        <div
          class="fund-benefits-heading col-span-2 flex min-h-[220px] items-start pt-12 lg:min-h-[260px] lg:pt-16"
        >
          <h3
            class="max-w-[560px] text-[24px] font-medium leading-[1.08] tracking-[-0.045em] lg:text-[40px]"
          >
            Fund Management <br />
Capabilities
           
       
          </h3>
        </div>

        <!-- Card 01 -->
        <article
          v-if="firstMarketBenefit"
          class="fund-benefit-card flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
          style="--benefit-delay: 120ms"
        >
          <span
            class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
          >
            {{ firstMarketBenefit.number }}
          </span>

          <p
            class="max-w-[300px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ firstMarketBenefit.text }}
          </p>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="(item, itemIndex) in remainingMarketBenefits"
          :key="item.number"
          class="fund-benefit-card flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
          :style="{ '--benefit-delay': `${200 + itemIndex * 80}ms` }"
        >
          <span
            class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
          >
            {{ item.number }}
          </span>

          <p
            class="max-w-[310px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ item.text }}
          </p>
        </article>
      </div>

      <!-- Mobile and tablet composition -->
      <div class="md:hidden">
        <h3
          class="fund-benefits-heading max-w-[520px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[34px]"
        >
          A New Exit Window for African Infrastructure
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <article
            v-for="(item, itemIndex) in marketBenefits"
            :key="item.number"
            class="fund-benefit-card flex min-h-[190px] flex-col justify-between bg-[#d9e8e3] p-6"
            :style="{ '--benefit-delay': `${120 + itemIndex * 75}ms` }"
          >
            <span
              class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
            >
              {{ item.number }}
            </span>

            <p class="max-w-[290px] text-[12px] leading-[1.4]">
              {{ item.text }}
            </p>
          </article>
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
import fundManagementHeroImage from '~/assets/images/capabilities/fund-hero.jpg'
import bridgeImage from '~/assets/images/bridge.jpg'
import ImageCard from './common/ImageCard.vue';

const isBenefitsSectionVisible = ref(false)
const benefitsSectionRef = ref<HTMLElement | null>(null)
let benefitsSectionObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isBenefitsSectionVisible.value = true
    return
  }

  if (!benefitsSectionRef.value) {
    isBenefitsSectionVisible.value = true
    return
  }

  benefitsSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isBenefitsSectionVisible.value = true
      benefitsSectionObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  benefitsSectionObserver.observe(benefitsSectionRef.value)
})

onBeforeUnmount(() => {
  benefitsSectionObserver?.disconnect()
})

useHead({
  title: 'Fund Management | African Infrastructure Investment Portfolios',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA manages infrastructure-focused vehicles and portfolios with disciplined governance, risk management, ESG integration and investor reporting.'
    },
    {
      name: 'keywords',
      content:
        'fund management Africa, infrastructure portfolio management, ESG investment Africa, infrastructure funds, investor reporting',
    },
  ],
})
const aboutIntroParagraphs = [
  "INFRAGORA provides disciplined fund management for infrastructure investment vehicles and portfolios across Africa. Our fund management approach combines investment selection, risk management, governance, ESG integration, investor reporting and active value creation.",

]


type NumberCardItem = {
  number: string
  label: string
}
const coverageText = [
  'INFRAGORA Investment Vehicle 1, or IIV1, is designed to invest in a diversified portfolio of African infrastructure assets. The vehicle targets operating and growth infrastructure opportunities, including brownfield assets with stable cash flows, assets with expansion potential and selected late-stage greenfield projects approaching commercial operation..',
]
const marketBenefits = [
  {
    number: 'Portfolio Construction',
    text: 'diversified infrastructure portfolios across sectors, geographies, asset stages and risk-return profiles.',
  },
  {
    number: 'Investment Management',
    text: 'sourcing, screening, due diligence, approval, execution and portfolio monitoring.',
  },
  {
    number: 'Risk Management',
    text: "assessment of financial, operational, regulatory, currency, ESG, market and execution risks across the investment lifecycle.",
  },
  {
    number: 'Governance',
    text: 'strong standards for investment decision-making, reporting, compliance and portfolio oversight.',
  },
  {
    number: 'ESG and Impact Management',
    text: 'environmental, social and governance considerations integrated into investment selection and portfolio monitoring.',
  },
  {
    number: 'Investor Reporting',
    text: 'structured reporting, portfolio performance updates and transparency to investors and stakeholders.',
  },
  {
    number: 'Value Creation',
    text: 'work with portfolio companies and asset owners to enhance operational performance, expansion readiness and long-term resilience.',
  },
]

const firstMarketBenefit = computed(() => marketBenefits[0])
const remainingMarketBenefits = computed(() => marketBenefits.slice(1))
</script>

<style scoped>
.fund-benefits-heading,
.fund-benefit-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.fund-benefits-heading {
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 860ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: 70ms;
}

.fund-benefit-card {
  filter: blur(10px);
  transform: translate3d(0, 52px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1020ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease,
    box-shadow 1020ms ease;
  transition-delay: var(--benefit-delay, 0ms);
  box-shadow: 0 24px 56px rgb(17 76 90 / 0);
}

.fund-benefit-card span,
.fund-benefit-card p {
  transform: translate3d(0, 18px, 0);
  transition: transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--benefit-delay, 0ms) + 110ms);
  will-change: transform;
}

.fund-benefits-section.is-visible .fund-benefits-heading,
.fund-benefits-section.is-visible .fund-benefit-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.fund-benefits-section.is-visible .fund-benefit-card {
  box-shadow: 0 24px 56px rgb(17 76 90 / 0.08);
}

.fund-benefits-section.is-visible .fund-benefit-card span,
.fund-benefits-section.is-visible .fund-benefit-card p {
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .fund-benefits-heading,
  .fund-benefit-card,
  .fund-benefit-card span,
  .fund-benefit-card p {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: none;
  }
}
</style>
