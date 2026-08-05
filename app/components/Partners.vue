<template>
  <main class="bg-white text-[#003f50]">
    <SideHeader />
<!--Execution Partners-->
    <section class="bg-white px-6  pt-14 sm:px-10 md:px-14 md:pb-24 md:pt-20 lg:px-16 lg:pb-[50px] lg:pt-[98px]">
      <div class="mx-auto">
        <h1
          class="mb-10 translate-y-6 text-center text-2xl font-semibold leading-none tracking-[-0.03em] text-[#003f50] opacity-0 transition-all duration-700 ease-out md:mb-16 md:text-[40px]"
          data-partner-reveal
        >
          Execution Partners
        </h1>

        <div>
          <article
            v-for="(partner, index) in executionPartners"
            :key="partner.name"
            class="grid translate-y-8 grid-cols-1 border-b border-[#d9e0df] py-8 opacity-0 transition-all duration-700 ease-out last:border-b-0 md:min-h-[205px] md:grid-cols-[minmax(220px,30%)_minmax(0,1fr)] md:items-center md:justify-between md:py-0 first:md:min-h-[190px] first:md:items-start first:md:pt-3"
            data-partner-reveal
            :style="{ transitionDelay: `${index * 90}ms` }"
          >
            <div
              class="flex min-h-0 items-center pb-5 md:min-h-[inherit] md:justify-start md:pb-0 md:pl-0 md:pr-12 lg:pr-16"
              :class="[partner.secondaryLogo ? 'flex-col items-start gap-4 md:gap-6' : '', partner.logoWrapClass]"
            >
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name"
                :class="partner.logoClass"
              />

              <img
                v-if="partner.secondaryLogo"
                :src="partner.secondaryLogo"
                :alt="partner.secondaryName"
                :class="partner.secondaryLogoClass"
              />

              <div
                v-else-if="partner.kind === 'sustainalytics'"
                class="flex items-center gap-3 whitespace-nowrap"
                aria-label="Morningstar Sustainalytics"
              >
                <span class="text-[15px] font-medium tracking-[-0.07em] text-[#ff0000] md:text-[19px]">
                  MORNINGSTAR
                </span>
                <span class="block h-9 w-px bg-[#e60000]" />
                <span class="text-xl font-extrabold tracking-[-0.06em] text-[#e60000] md:text-[27px]">
                  SUSTAINALYTICS
                </span>
              </div>

              <img
                v-else-if="partner.kind === 'miga'"
                :src="migaLogo"
                alt="MIGA Multilateral Investment Guarantee Agency"
                class="h-auto w-[180px] md:w-[230px]"
              />
            </div>

            <div class="py-0 text-[15px] font-medium leading-[1.5] text-[#003f50] md:flex md:justify-end md:py-7 md:text-[17px] md:leading-[1.42] lg:text-[18px]">
              <ul class="ml-0 max-w-none list-outside list-disc pl-4 md:max-w-[760px] lg:max-w-[820px]">
                <li v-for="item in partner.points" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 pb-20 pt-4 sm:px-10 md:px-14 md:pb-28 md:pt-8 lg:px-16">
      <div class="mx-auto max-w-[1060px]">
        <div>
          <h2
            class="translate-y-6 text-center text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#003f50] opacity-0 transition-all duration-700 ease-out md:text-[40px]"
            data-partner-reveal
          >
            Investor Partners
          </h2>

          <div class="mx-auto mt-9 grid max-w-[420px] grid-cols-2 items-center justify-items-center gap-x-7 gap-y-7 md:mt-16 md:max-w-[1040px] md:grid-cols-6 md:gap-x-9 md:gap-y-9 lg:gap-x-12">
            <div
              v-for="(partner, index) in investorPartners"
              :key="partner.id"
              class="flex h-[64px] w-full translate-y-6 items-center justify-center opacity-0 transition-all duration-700 ease-out md:h-[62px]"
              :class="partner.positionClass"
              data-partner-reveal
              :style="{ transitionDelay: `${index * 55}ms` }"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="block h-auto max-h-full max-w-full object-contain"
                :class="partner.logoClass"
              />
            </div>
          </div>
        </div>

        <div class="mt-10 md:mt-28 lg:mt-[125px]">
          <h2
            class="translate-y-6 text-center text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#003f50] opacity-0 transition-all duration-700 ease-out md:text-[40px]"
            data-partner-reveal
          >
            Institutional Allies
          </h2>

          <div class="mx-auto mt-10 grid max-w-[420px] grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 md:mt-16 md:max-w-[950px] md:grid-cols-6 md:gap-x-9 md:gap-y-8 lg:gap-x-[54px]">
            <div
              v-for="(partner, index) in institutionalAllies"
              :key="partner.id"
              class="flex h-[64px] w-full translate-y-6 items-center justify-center opacity-0 transition-all duration-700 ease-out md:h-14"
              :class="partner.positionClass"
              data-partner-reveal
              :style="{ transitionDelay: `${index * 50}ms` }"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="block h-auto max-h-full object-contain"
                :class="partner.logoClass"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import SideHeader from '~/components/common/SideHeader.vue'
import jpMorganLogo from '~/assets/images/home/partners/J_P_Morgan.png'
import bowmansLogo from '~/assets/images/home/partners/bowman.png'
import moodysLogo from '~/assets/images/home/partners/moody.png'
import riscuraLogo from '~/assets/images/home/partners/Riscura.png'
import actisLogo from '~/assets/images/home/partners/Actis.png'
import afcLogo from '~/assets/images/home/partners/afc.png'
import afrexiLogo from '~/assets/images/home/partners/afrexi.jpg'
import aiimLogo from '~/assets/images/home/partners/aiim.jpg'
import dfcLogo from '~/assets/images/home/partners/dfc.png'
import biiLogo from '~/assets/images/home/partners/bii.png'
import ebrdLogo from '~/assets/images/home/partners/ebrd.png'
import Development_Bank_Logo from '~/assets/images/home/partners/Development_Bank.png'
import tolaramLogo from '~/assets/images/home/partners/tolaram.png'
import elsewedyLogo from '~/assets/images/home/partners/elsewedy.png'
import evolutionLogo from '~/assets/images/home/partners/evolution.png'
import eximLogo from '~/assets/images/home/partners/exim.png'
import frontierEnergyLogo from '~/assets/images/home/partners/Frontier Energy 1.png'
import ifcLogo from '~/assets/images/home/partners/International_Finance_Corporation.png'
import migaLogo from '~/assets/images/home/partners/Multilateral_Investment_Guarantee_Agency_logo 1.png'
import ninetyOneLogo from '~/assets/images/home/partners/ninetyone.png'
import pembaniLogo from '~/assets/images/home/partners/pembani.png'
import sasolLogo from '~/assets/images/home/partners/sasol.png'
import seacomLogo from '~/assets/images/home/partners/path3213.png'
import serengetiLogo from '~/assets/images/home/partners/serengeti.png'
import ustdaLogo from '~/assets/images/home/partners/ustda.png'

let revealObserver: IntersectionObserver | undefined

const revealElement = (element: Element) => {
  element.classList.remove('translate-y-6', 'translate-y-8', 'opacity-0')
  element.classList.add('translate-y-0', 'opacity-100')
}
useHead({
  title:
    'Partners & Allies | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'Discover the strategic, investment and execution partners supporting INFRAGORA’s mission to deepen infrastructure investment and liquidity across Africa.',
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA partners, infrastructure investment partners Africa, infrastructure finance partners, strategic partners Africa',
    },
    
  ],
})
onMounted(() => {
  const revealItems = Array.from(document.querySelectorAll('[data-partner-reveal]'))

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach(revealElement)
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        revealElement(entry.target)
        revealObserver?.unobserve(entry.target)
      })
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  revealItems.forEach((item) => revealObserver?.observe(item))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})

type ExecutionPartner = {
  name: string
  logo?: string
  logoClass?: string
  logoWrapClass?: string
  secondaryLogo?: string
  secondaryName?: string
  secondaryLogoClass?: string
  kind?: 'sustainalytics' | 'miga'
  points: string[]
}

type LogoPartner = {
  id: string
  name: string
  logo: string
  logoClass: string
  positionClass?: string
}

const executionPartners: ExecutionPartner[] = [
  {
    name: 'J.P. Morgan and Bowmans',
    logo: jpMorganLogo,
    logoWrapClass: 'w-fit -ml-3 sm:-ml-5 md:ml-0 md:mt-8',
    logoClass: 'h-auto w-[132px] md:w-[178px]',
    secondaryLogo: bowmansLogo,
    secondaryName: 'Bowmans',
    secondaryLogoClass: 'h-auto w-[150px] md:w-[188px]',
    points: [
      'These institutions support the development and execution of the listing process for the Investment Vehicle on the concerned capital markets.',
      'JPMorgan is confirmed to sponsor the INFRAGORA fund formation and listing processes.',
      'The JSE, IPO, and Pre-IPO activities.',
      'Bowmans appointed as legal advisor for INFRAGORA.',
    ],
  },
  {
    name: "Moody's",
    logo: moodysLogo,
    logoClass: 'h-auto w-[160px] md:w-[212px]',
    points: [
      "This firm will support the de-risking of Africa's infrastructure market opportunities.",
      "Their contribution will include assessment of the credit quality of Africa's secondary opportunities at both the INFRAGORA and underlying portfolio levels.",
    ],
  },
  {
    name: 'Riscura',
    logo: riscuraLogo,
    logoClass: 'h-auto w-[170px] md:w-[225px]',
    points: [
      "This firm will support the de-risking of Africa's infrastructure market opportunities.",
      'Their contribution will include:',
      'Establishing global benchmarks, tools, and establish market standard for infrastructure valuation in Africa.',
      'Support the enhancement of price discovery and transparency for secondary market transactions.',
    ],
  },
  {
    name: 'Morningstar Sustainalytics',
    kind: 'sustainalytics',
    points: [
      'Support the development of impact and ESG aligned investment metrics, disclosures and management protocols.',
      'Infrastructure Index creation, aligned with global benchmarks to enhance the ESG visibility of African Infrastructure in the global market.',
    ],
  },
  {
    name: 'MIGA',
    kind: 'miga',
    points: [
      'Support the de-risking of the individual portfolio projects and the Vehicle both at Pre-IPO and IPO stages where applicable.',
      'Mitigates discounting and price discovery risk.',
    ],
  },
]

const investorPartners: LogoPartner[] = [
  { id: 'ustda', name: 'USTDA', logo: ustdaLogo, logoClass: 'w-[112px] md:w-[118px]' },
  { id: 'dfc-primary', name: 'U.S. International Development Finance Corporation', logo: dfcLogo, logoClass: 'w-[142px] md:w-[150px]' },
  { id: 'sasol', name: 'Sasol', logo: sasolLogo, logoClass: 'w-[88px] md:w-[94px]' },
  // { id: 'jpMorgan', name: 'jpMorgan', logo: jpMorganLogo, logoClass: 'w-[112px] md:w-[112px]' },
  { id: 'exim', name: 'EXIM Bank', logo: eximLogo, logoClass: 'w-[78px] md:w-[84px]' },
  { id: 'ifc', name: 'International Finance Corporation', logo: ifcLogo, logoClass: 'w-[172px] md:w-[178px]' },
  { id: 'afrexi', name: 'afrexi', logo: afrexiLogo, logoClass: 'w-[82px] md:w-[240px] lg:w-[270px]', positionClass: 'md:!h-[88px] lg:!h-[96px]' },
  { id: 'tolaram', name: 'Tolaram Group', logo: tolaramLogo, logoClass: 'w-[90px] md:w-[112px]', positionClass: 'md:col-start-2' },
  { id: 'development-bank', name: 'Development Bank of Southern Africa', logo: Development_Bank_Logo, logoClass: 'w-[90px] md:w-[112px]' },
  { id: 'ebrd', name: 'European Bank for Reconstruction and Development', logo: ebrdLogo, logoClass: 'w-[120px] md:w-[270px] lg:w-[300px]', positionClass: 'md:!h-[88px] lg:!h-[96px]' },
  // { id: 'bii', name: 'British International Investment', logo: biiLogo, logoClass: 'w-[90px] md:w-[112px]' },
  { id: 'afc', name: 'Africa Finance Corporation', logo: afcLogo, logoClass: 'w-[160px] md:w-[166px]' },
]

const institutionalAllies: LogoPartner[] = [
  { id: 'frontier-energy', name: 'Frontier Energy', logo: frontierEnergyLogo, logoClass: 'w-[92px] md:w-[122px]' },
  { id: 'aiim', name: 'AIIM', logo: aiimLogo, logoClass: 'w-[90px] md:w-[124px]' },
  { id: 'sasol', name: 'Sasol', logo: sasolLogo, logoClass: 'w-[88px] md:w-[118px]' },
  { id: 'seacom', name: 'SEACOM', logo: seacomLogo, logoClass: 'w-[98px] md:w-[132px]' },
  { id: 'serengeti', name: 'Serengeti Energy', logo: serengetiLogo, logoClass: 'w-[92px] md:w-[124px]' },
  { id: 'actis', name: 'Actis', logo: actisLogo, logoClass: 'w-[74px] md:w-[100px]' },
  { id: 'elsewedy', name: 'Elsewedy Electric', logo: elsewedyLogo, logoClass: 'w-[108px] md:w-[144px]', positionClass: 'md:col-start-2' },
  { id: 'ninety-one', name: 'Ninety One', logo: ninetyOneLogo, logoClass: 'w-[90px] md:w-[120px]' },
  { id: 'pembani', name: 'Pembani Remgro', logo: pembaniLogo, logoClass: 'w-[154px] md:w-[204px]' },
  { id: 'evolution', name: 'Inspired Evolution', logo: evolutionLogo, logoClass: 'w-[116px] md:w-[150px]' },
]
</script>
