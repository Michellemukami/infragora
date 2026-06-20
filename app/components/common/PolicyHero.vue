<template>
  <section
    class="mt-[76px] flex min-h-[250px] items-center justify-center bg-[#063854] px-6 md:min-h-[270px] lg:min-h-[280px]"
  >
    <div
      class="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center text-center"
    >
      <!-- Title -->
      <h1
        class="text-[42px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[56px] lg:text-[60px]"
      >
        {{ title }}
      </h1>

      <!-- Company -->
      <p
        class="mt-5 text-[11px] font-semibold uppercase tracking-[0.03em] text-white"
      >
        {{ companyName }}
      </p>

      <!-- Last Updated -->
      <p
        class="mt-1 text-[10px] font-semibold text-[#E4D51C]"
      >
        Last Updated: {{ lastUpdated }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  companyName?: string
  lastUpdated?: string
}>(), {
  companyName: 'INFRAGORA Global Capital',
  lastUpdated: 'July 15th 2026',
})
</script>
