<!-- components/WhatWeDoIntro.vue -->
<template>
  <section
    v-if="mediaSrc"
    :class="[
      'relative isolate flex min-h-[560px] w-full overflow-hidden bg-[#101719] text-white md:min-h-[640px] lg:min-h-[720px]',
      sectionClass,
    ]"
  >
    <video
      v-if="mediaType === 'video'"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      :class="[
        'absolute inset-0 z-0 h-full w-full object-cover object-center',
        mediaClass,
      ]"
    >
      <source :src="mediaSrc" :type="videoType" />
    </video>

    <img
      v-else
      :src="mediaSrc"
      :alt="mediaAlt"
      :class="[
        'absolute inset-0 z-0 h-full w-full object-cover object-center',
        mediaClass,
      ]"
    />

    <div
      :class="[
        'absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,14,15,0.48)_0%,rgba(7,13,14,0.2)_45%,rgba(7,13,14,0.42)_100%)]',
        overlayClass,
      ]"
    />

    <div
      :class="[
        'absolute inset-x-0 bottom-0 z-[2] h-[58%] bg-gradient-to-b from-transparent to-black/65',
        shadowClass,
      ]"
    />

    <div
      :class="[
        'relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-6 py-20 sm:px-10 md:grid-cols-[32%_1fr] md:px-14 lg:grid-cols-[39%_1fr] lg:gap-0 lg:px-[6vw] xl:px-[5.8vw]',
        mediaContainerClass,
      ]"
    >
      <div>
        <h2
          :class="[
            'font-sans text-[40px] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[48px] lg:text-[54px] xl:text-[58px]',
            titleClass,
          ]"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h2>
      </div>

      <div
        :class="[
          'max-w-[720px] self-end font-sans text-[12px] font-normal leading-[1.5] tracking-[-0.01em] text-white sm:text-[13px] lg:text-[14px]',
          contentClass,
        ]"
      >
        <slot>
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            :class="[index > 0 ? 'mt-4 lg:mt-[18px]' : '', paragraphClass]"
          >
            {{ paragraph }}
          </p>
        </slot>
      </div>
    </div>
  </section>

  <section v-else :class="['w-full bg-[#f1f1f1] text-[#003b4d]', sectionClass]">
    <div
      :class="[
        'mx-auto grid min-h-[260px] max-w-[1440px] gap-10 px-6 py-14 sm:px-10 md:min-h-[310px] md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:px-14 md:py-16 lg:min-h-[360px] lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:px-20 lg:py-20 xl:px-24',
        containerClass,
      ]"
    >
      <!-- Left title -->
      <div>
        <h2
          :class="[
            'text-[30px] font-semibold leading-none tracking-[-0.045em] text-[#003b4d] sm:text-[36px] lg:text-[42px]',
            titleClass,
          ]"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h2>
      </div>

      <!-- Right description -->
      <div :class="['max-w-[760px] md:justify-self-end', contentClass]">
        <slot>
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            :class="[
              'text-[13px] leading-[1.55] text-[#003b4d] sm:text-[14px] lg:text-[15px]',
              index > 0 ? 'mt-3' : '',
              paragraphClass,
            ]"
          >
            {{ paragraph }}
          </p>
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  paragraphs?: string[]
  mediaSrc?: string
  mediaType?: 'video' | 'image'
  mediaAlt?: string
  videoType?: string
  sectionClass?: string
  containerClass?: string
  mediaContainerClass?: string
  mediaClass?: string
  overlayClass?: string
  shadowClass?: string
  titleClass?: string
  contentClass?: string
  paragraphClass?: string
}>(), {
  title: 'What we do',
  paragraphs: () => [
    'INFRAGORA combines advisory, investment, capital structuring and fund management capabilities to support infrastructure markets across Africa.',
    'Our integrated platform is designed to help asset owners, developers and investors move from opportunity identification to value realisation, providing capital, structuring, execution and market access. We focus on creating investable, transparent and scalable infrastructure opportunities that support long-term capital.',
  ],
  mediaSrc: '',
  mediaType: 'image',
  mediaAlt: '',
  videoType: 'video/mp4',
  sectionClass: '',
  containerClass: '',
  mediaContainerClass: '',
  mediaClass: '',
  overlayClass: '',
  shadowClass: '',
  titleClass: '',
  contentClass: '',
  paragraphClass: '',
})
</script>
