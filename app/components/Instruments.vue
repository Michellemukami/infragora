

<template>
 <WhatWeDoIntro
    title="Instruments"
    :paragraphs="aboutIntroParagraphs"
    :media-src="InstrumentHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

  <NumberCard
    title="Instrument Categories"
    :items="supportItems0"
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
import InstrumentHeroImage from '~/assets/images/capabilities/instrument-hero.jpg'
useHead({
  title: 'Investment Instruments | Equity, Quasi-Equity & Private Credit',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA structures flexible equity, quasi-equity and private credit solutions for African infrastructure assets and investment platforms.',
    },
    {
      name: 'keywords',
      content:
        'infrastructure investment instruments, equity Africa, quasi equity infrastructure, private credit infrastructure, structured finance Africa',
    },
  ],
})
const aboutIntroParagraphs = [
  "Infrastructure requires flexible capital. INFRAGORA structures investment instruments that align with project needs, investor expectations and long-term asset quality and performance objectives.",
"Our instruments are designed to support different stages of asset maturity, capital requirements and risk-return profiles."
 
]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Equity for long-term ownership, platform creation and growth.' },
  { number: '02', label: 'Quasi-equity for flexible capital between debt and ordinary equity.' },
  { number: '03', label: 'Private credit for tailored debt, refinancing, expansion and asset-backed lending.' },

 
 
]

</script>
