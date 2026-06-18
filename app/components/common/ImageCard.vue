<template>
  <section :class="['w-full bg-white text-[#063f4d]', sectionClass]">
    <div
      :class="[
        'grid min-h-[520px] lg:grid-cols-2 xl:min-h-[640px]',
        gridClass,
      ]"
    >
      <div
        :class="[
          'relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-full',
          imageWrapperClass,
        ]"
      >
        <img
          :src="image"
          :alt="imageAlt"
          :class="['absolute inset-0 h-full w-full object-cover', imageClass]"
        />

        <div :class="['absolute inset-0 bg-[#003948]/30', overlayClass]" />
        <div
          :class="[
            'absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent',
            gradientClass,
          ]"
        />
      </div>

      <div
        :class="[
          'flex items-center px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20 xl:px-24',
          contentWrapperClass,
        ]"
      >
        <div :class="['max-w-[650px]', contentClass]">
          <h2
            :class="[
              'text-[28px] font-semibold leading-none tracking-[-0.045em] sm:text-[32px] lg:text-[40px]',
              titleClass,
            ]"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </h2>

          <div
            :class="[
              'mt-8 max-w-[620px] space-y-1 text-[14px] leading-[1.55] text-[#064455] sm:text-[15px] lg:mt-10 lg:text-[16px]',
              bodyClass,
            ]"
          >
            <slot>
              <p v-for="(paragraph, index) in paragraphs" :key="index">
                {{ paragraph }}
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  paragraphs?: string[]
  image: string
  imageAlt?: string
  sectionClass?: string
  gridClass?: string
  imageWrapperClass?: string
  imageClass?: string
  overlayClass?: string
  gradientClass?: string
  contentWrapperClass?: string
  contentClass?: string
  titleClass?: string
  bodyClass?: string
}>(), {
  title: '',
  paragraphs: () => [],
  imageAlt: '',
  sectionClass: '',
  gridClass: '',
  imageWrapperClass: '',
  imageClass: '',
  overlayClass: '',
  gradientClass: '',
  contentWrapperClass: '',
  contentClass: '',
  titleClass: '',
  bodyClass: '',
})
</script>
