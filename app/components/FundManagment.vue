

<template>
 <WhatWeDoIntro
    title="Fund Management"
    :paragraphs="aboutIntroParagraphs"
    :media-src="aboutHeroVideo"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

<section>
     <!-- Benefits section -->
    <div
      class="mx-auto px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <!-- Desktop composition -->
      <div class="hidden grid-cols-3 gap-7 md:grid">
        <!-- Main title occupies the first two cells -->
        <div
          class="col-span-2 flex min-h-[220px] items-start pt-12 lg:min-h-[260px] lg:pt-16"
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
          class="flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
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
          v-for="item in remainingMarketBenefits"
          :key="item.number"
          class="flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
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
          class="max-w-[520px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[34px]"
        >
          A New Exit Window for African Infrastructure
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in marketBenefits"
            :key="item.number"
            class="flex min-h-[190px] flex-col justify-between bg-[#d9e8e3] p-6"
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

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import aboutHeroVideo from '~/assets/images/capabilities/skyline.jpg'
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
