

<template>
 <WhatWeDoIntro
    title="Equity"
    :paragraphs="aboutIntroParagraphs"
    :media-src="aboutHeroVideo"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

  <NumberCard
    title="Typical Use Cases"
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
import aboutHeroVideo from '~/assets/images/capabilities/skyline.jpg'
useHead({
  title: 'Equity Investment | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA uses equity investment to support long-term ownership, platform creation, acquisitions, expansion and capital recycling in African infrastructure.',
    },
    {
      name: 'keywords',
      content:
        'equity investment Africa, infrastructure equity, platform capital, growth capital, African infrastructure equity',
    },
  ],
})
const aboutIntroParagraphs = [
  "Equity investment supports long-term infrastructure ownership, strategic alignment and growth. INFRAGORA uses equity to invest in infrastructure assets and platforms with strong fundamentals, expansion potential and attractive long-term value creation opportunities.",

]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Platform creation.' },
  { number: '02', label: 'Growth capital.' },
  { number: '03', label: 'Strategic acquisitions.' },
  { number: '04', label: 'Expansion funding.' },
  { number: '05', label: 'Long-term asset ownership.' },
  { number: '06', label: 'Capital recycling transactions.' },
  { number: '07', label: 'Public market transition strategies.' },


]

</script>
