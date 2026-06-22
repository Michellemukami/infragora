<template>
  <section
    ref="numberCardRef"
    :class="[
      'number-card-section overflow-hidden',
      sectionClass || 'bg-[#fbfbfb]',
      { 'is-visible': isNumberCardVisible },
    ]"
  >
    <div
      :class="[
        'number-card-container mx-auto w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-16 xl:px-[80px]',
        containerClass,
      ]"
    >
      <h2
        :class="[
          'number-card-title md:mb-10 text-[26px] font-semibold leading-none tracking-[-0.035em] text-[#0a5264] sm:text-[30px] lg:mb-10 lg:text-[34px]',
          titleClass,
        ]"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </h2>

      <div
        :class="[
          'grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20',
          gridClass,
        ]"
      >
        <div v-for="(column, columnIndex) in columns" :key="columnIndex">
          <div
            v-for="(item, itemIndex) in column"
            :key="item.number"
            :class="[
              'number-card-item grid min-h-[82px] grid-cols-[48px_1fr] items-center border-b border-[#bdd3d1] sm:grid-cols-[62px_1fr] lg:min-h-[92px]',
              itemClass,
            ]"
            :style="{ '--item-delay': `${120 + (columnIndex * column.length + itemIndex) * 65}ms` }"
          >
            <span
              :class="[
                'number-card-number self-center text-[18px] font-medium leading-none tracking-[-0.03em] text-[#f6b800] sm:text-[20px] lg:text-[30px]',
                numberClass,
              ]"
            >
              {{ item.number }}
            </span>

            <p
              :class="[
                'number-card-label self-center pt-[2px] text-[12px] leading-none tracking-[-0.015em] text-[#253035] sm:text-[13px] lg:text-[18px]',
                labelClass,
              ]"
            >
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type NumberCardItem = {
  number: string
  label: string
}

const props = withDefaults(defineProps<{
  title?: string
  items?: NumberCardItem[]
  columnsCount?: number
  sectionClass?: string
  containerClass?: string
  gridClass?: string
  titleClass?: string
  itemClass?: string
  numberClass?: string
  labelClass?: string
}>(), {
  title: '',
  items: () => [],
  columnsCount: 2,
  sectionClass: '',
  containerClass: '',
  gridClass: '',
  titleClass: '',
  itemClass: '',
  numberClass: '',
  labelClass: '',
})

const isNumberCardVisible = ref(false)
const numberCardRef = ref<HTMLElement | null>(null)
let numberCardObserver: IntersectionObserver | null = null

const columns = computed(() => {
  const count = Math.max(1, props.columnsCount)
  const size = Math.ceil(props.items.length / count)

  return Array.from({ length: count }, (_, index) =>
    props.items.slice(index * size, index * size + size),
  )
})

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isNumberCardVisible.value = true
    return
  }

  if (!numberCardRef.value) {
    isNumberCardVisible.value = true
    return
  }

  numberCardObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isNumberCardVisible.value = true
      numberCardObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  numberCardObserver.observe(numberCardRef.value)
})

onBeforeUnmount(() => {
  numberCardObserver?.disconnect()
})
</script>

<style scoped>
.number-card-title,
.number-card-item {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.number-card-title {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 70ms;
}

.number-card-item {
  filter: blur(8px);
  transform: translate3d(0, 30px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1),
    filter 760ms ease,
    border-color 900ms ease;
  transition-delay: var(--item-delay, 0ms);
}

.number-card-number {
  transform: translate3d(-10px, 0, 0) scale(.96);
  transition:
    transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--item-delay, 0ms) + 80ms);
  will-change: transform;
}

.number-card-label {
  transform: translate3d(0, 14px, 0);
  transition:
    transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--item-delay, 0ms) + 110ms);
  will-change: transform;
}

.number-card-section.is-visible .number-card-title,
.number-card-section.is-visible .number-card-item {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0);
}

.number-card-section.is-visible .number-card-number,
.number-card-section.is-visible .number-card-label {
  transform: translate3d(0, 0, 0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .number-card-title,
  .number-card-item,
  .number-card-number,
  .number-card-label {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
</style>
