<template>
  <section
    ref="smallHeaderRef"
    :class="[
      'small-header w-full bg-[#dbe9e7] font-sans text-[#082d45]',
      sectionClass,
      { 'is-visible': isSmallHeaderVisible },
    ]"
  >
    <div
      :class="[
        'small-header-inner mx-auto grid min-h-[250px] w-full max-w-[1600px] grid-cols-1 gap-8 px-6 pb-14 pt-28 sm:px-10 md:min-h-[270px] md:grid-cols-[34%_1fr] md:items-center md:gap-12 md:px-14 md:pb-16 md:pt-32 lg:min-h-[280px] lg:grid-cols-[40%_1fr] lg:px-[5.8vw] lg:pb-[72px] lg:pt-36',
        containerClass,
      ]"
    >
      <h2
        :class="[
          'small-header-title text-left text-[34px] font-semibold leading-none tracking-[-0.045em] sm:text-[38px] lg:text-[42px]',
          titleClass,
        ]"
      >
        {{ title }}
      </h2>

      <div
        :class="[
          'small-header-description max-w-[760px] space-y-3 text-left text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-[#082d45] sm:text-[15px] lg:text-[16px]',
          descriptionClass,
        ]"
      >
        <p v-for="paragraph in descriptionList" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const props = withDefaults(defineProps<{
  title?: string
  description?: string | string[]
  sectionClass?: string
  containerClass?: string
  titleClass?: string
  descriptionClass?: string
}>(), {
  title: '',
  description: () => [],
  sectionClass: '',
  containerClass: '',
  titleClass: '',
  descriptionClass: '',
})

const descriptionList = computed(() =>
  Array.isArray(props.description)
    ? props.description
    : [props.description].filter(Boolean),
)

const isSmallHeaderVisible = ref(false)
const smallHeaderRef = ref<HTMLElement | null>(null)
let smallHeaderObserver: IntersectionObserver | null = null
let smallHeaderAnimationFrame = 0

const disconnectSmallHeaderObserver = () => {
  smallHeaderObserver?.disconnect()
  smallHeaderObserver = null
}

const revealSmallHeader = () => {
  isSmallHeaderVisible.value = true
  disconnectSmallHeaderObserver()
}

const playSmallHeaderAnimation = async () => {
  isSmallHeaderVisible.value = false
  disconnectSmallHeaderObserver()

  if (smallHeaderAnimationFrame) {
    cancelAnimationFrame(smallHeaderAnimationFrame)
    smallHeaderAnimationFrame = 0
  }

  await nextTick()

  if (!smallHeaderRef.value || !('IntersectionObserver' in window)) {
    smallHeaderAnimationFrame = requestAnimationFrame(revealSmallHeader)
    return
  }

  smallHeaderObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        revealSmallHeader()
      }
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  smallHeaderObserver.observe(smallHeaderRef.value)
}

onMounted(playSmallHeaderAnimation)

watch(
  () => route.fullPath,
  playSmallHeaderAnimation,
  { flush: 'post' },
)

onBeforeUnmount(() => {
  disconnectSmallHeaderObserver()

  if (smallHeaderAnimationFrame) {
    cancelAnimationFrame(smallHeaderAnimationFrame)
  }
})
</script>

<style scoped>
.small-header {
  overflow: hidden;
}

.small-header-title,
.small-header-description {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  filter: blur(10px);
  transition:
    opacity 820ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 820ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 820ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, filter;
}

.small-header-title {
  transform: translate3d(0, 38px, 0);
}

.small-header-description {
  transition-delay: 140ms;
}

.small-header.is-visible .small-header-title,
.small-header.is-visible .small-header-description {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .small-header-title,
  .small-header-description {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
