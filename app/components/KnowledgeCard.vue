<template>
  <NuxtLink
    to="/"
    class="group relative block overflow-hidden bg-white"
    :class="height"
  >
    <!-- Image -->
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />

    <!-- Frost -->
    <div
      class="absolute inset-0 bg-white/10"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"
    />

    <!-- Content -->
    <div class="absolute inset-0 p-5 lg:p-7">
      <div class="flex items-start justify-between gap-5">
        <h3
          class="max-w-[220px]
                 text-[20px]
                 lg:text-[30px]
                 leading-[0.95]
                 font-medium
                 tracking-[-0.03em]"
        >
          {{ title }}
        </h3>

        <svg
          class="h-7 w-7 shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:h-8 lg:w-8"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="currentColor"
            stroke-width="1.65"
          />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: 'h-[500px]'
  }
})
</script>
