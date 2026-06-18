

<template>
 <WhatWeDoIntro
    title="Quasi Equity"
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
  title: 'Quasi-Equity Solutions | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA structures quasi-equity solutions for infrastructure assets requiring flexible capital between traditional debt and ordinary equity.',
    },
    {
      name: 'keywords',
      content:
        'quasi equity Africa, preferred equity, convertible instruments, mezzanine infrastructure, structured growth capital',
    },
  ],
})
const aboutIntroParagraphs = [
  "Quasi-equity provides flexible capital between traditional debt and ordinary equity. These instruments can help infrastructure assets access growth capital while balancing ownership, downside protection, cash flow flexibility and investor return requirements.",

]


type NumberCardItem = {
  number: string
  label: string
}



const supportItems0: NumberCardItem[] = [
  { number: '01', label: 'Preferred equity.' },
  { number: '02', label: 'Convertible instruments.' },
  { number: '03', label: 'Structured growth capital.' },
  { number: '04', label: 'Mezzanine-style investment.' },
  { number: '05', label: 'Downside protection mechanisms.' },
  { number: '06', label: 'Capital solutions for expansion-stage assets.' },
 


]

</script>
