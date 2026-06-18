<template>
  <section :class="sectionClass || 'bg-[#fbfbfb]'">
    <div
      :class="[
        'mx-auto w-full  px-5 py-14 sm:px-8 sm:py-16 lg:px-16 xl:px-[80px]',
        containerClass,
      ]"
    >
      <h2
        :class="[
          'mb-10 text-[26px] font-semibold leading-none tracking-[-0.035em] text-[#0a5264] sm:text-[30px] lg:mb-14 lg:text-[34px]',
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
            v-for="item in column"
            :key="item.number"
            :class="[
              'grid min-h-[82px] grid-cols-[48px_1fr] items-center border-b border-[#bdd3d1] sm:grid-cols-[62px_1fr] lg:min-h-[92px]',
              itemClass,
            ]"
          >
            <span
              :class="[
                'self-center text-[18px] font-medium leading-none tracking-[-0.03em] text-[#f6b800] sm:text-[20px] lg:text-[30px]',
                numberClass,
              ]"
            >
              {{ item.number }}
            </span>

            <p
              :class="[
                'self-center pt-[2px] text-[12px] leading-none tracking-[-0.015em] text-[#253035] sm:text-[13px] lg:text-[18px]',
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

const columns = computed(() => {
  const count = Math.max(1, props.columnsCount)
  const size = Math.ceil(props.items.length / count)

  return Array.from({ length: count }, (_, index) =>
    props.items.slice(index * size, index * size + size),
  )
})
</script>
