<template>
  <section :class="['w-full bg-[#dbe9e7] font-sans text-[#082d45]', sectionClass]">
    <div
      :class="[
        'mx-auto grid min-h-[250px] w-full max-w-[1600px] grid-cols-1 gap-8 px-6 pb-14 pt-28 sm:px-10 md:min-h-[270px] md:grid-cols-[34%_1fr] md:items-center md:gap-12 md:px-14 md:pb-16 md:pt-32 lg:min-h-[280px] lg:grid-cols-[40%_1fr] lg:px-[5.8vw] lg:pb-[72px] lg:pt-36',
        containerClass,
      ]"
    >
      <h2
        :class="[
          'text-left text-[34px] font-semibold leading-none tracking-[-0.045em] sm:text-[38px] lg:text-[42px]',
          titleClass,
        ]"
      >
        {{ title }}
      </h2>

      <div
        :class="[
          'max-w-[760px] space-y-3 text-left text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-[#082d45] sm:text-[15px] lg:text-[16px]',
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
</script>
