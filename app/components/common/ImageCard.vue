<template>
  <section
    ref="imageCardRef"
    :class="[
      'image-card-section w-full overflow-hidden bg-white text-[#063f4d]',
      { 'is-visible': isImageCardVisible },
      sectionClass,
    ]"
  >
    <div
      :class="[
        'grid min-h-[520px] lg:grid-cols-2 xl:min-h-[640px]',
        gridClass,
      ]"
    >
      <div
        :class="[
          'image-card-media relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-full',
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
          'image-card-content flex items-center px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20 xl:px-24',
          contentWrapperClass,
        ]"
      >
        <div :class="['image-card-copy max-w-[650px]', contentClass]">
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

const isImageCardVisible = ref(false)
const imageCardRef = ref<HTMLElement | null>(null)
let imageCardObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isImageCardVisible.value = true
    return
  }

  if (!imageCardRef.value) {
    isImageCardVisible.value = true
    return
  }

  imageCardObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isImageCardVisible.value = true
      imageCardObserver?.disconnect()
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -14% 0px',
    }
  )

  imageCardObserver.observe(imageCardRef.value)
})

onBeforeUnmount(() => {
  imageCardObserver?.disconnect()
})
</script>

<style scoped>
.image-card-media,
.image-card-content,
.image-card-copy {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.image-card-media {
  transform: translate3d(0, 46px, 0) scale(.985);
  transition:
    opacity 900ms ease,
    transform 1050ms cubic-bezier(.16, 1, .3, 1);
}

.image-card-media :deep(img) {
  transform: scale(1.045);
  transition: transform 1400ms cubic-bezier(.16, 1, .3, 1);
  will-change: transform;
}

.image-card-content {
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 820ms ease,
    transform 920ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 120ms;
}

.image-card-copy {
  filter: blur(8px);
  transform: translate3d(0, 20px, 0);
  transition:
    opacity 760ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1),
    filter 760ms ease;
  transition-delay: 220ms;
}

.image-card-section.is-visible .image-card-media,
.image-card-section.is-visible .image-card-content,
.image-card-section.is-visible .image-card-copy {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.image-card-section.is-visible .image-card-media :deep(img) {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .image-card-media,
  .image-card-content,
  .image-card-copy,
  .image-card-media :deep(img) {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>
