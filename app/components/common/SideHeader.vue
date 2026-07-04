<template>
  <section class="w-full bg-[#0F5B69]">
    <div
      class=" mx-auto grid min-h-[250px] w-full max-w-[1600px] grid-cols-1 gap-8 px-6 pb-14 pt-28 sm:px-10 md:min-h-[270px] md:grid-cols-[34%_1fr] md:items-center md:gap-12 md:px-14 md:pb-16 md:pt-32 lg:min-h-[350px] lg:grid-cols-[40%_1fr] lg:px-[5.8vw] lg:pb-[72px] lg:pt-36"
      :class="description ? '' : 'md:grid-cols-1 md:items-center'"
    >
      <!-- Left -->
      <h2
        class="text-left text-[34px] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[38px] lg:text-[60px]"
        :class="description ? '' : 'text-left'"
      >
        <span v-html="formattedTitle" />
      </h2>

      <!-- Right -->
      <div
        v-if="description"
        class="max-w-[760px] space-y-3 text-left text-[14px] font-normal leading-[1.55] tracking-[-0.015em] text-white/90 sm:text-[15px] lg:text-[16px]"
      >
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'Partners &\nAllies',
    description:
      'INFRAGORA is strategically partnered with leading global institutions, investors, infrastructure specialists, financial advisors, and technology providers to accelerate sustainable infrastructure development across Africa.',
  },
)

const formattedTitle = computed(() => props.title.replace(/\n/g, '<br>'))
</script>
