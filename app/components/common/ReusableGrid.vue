<script setup lang="ts">
type GridItem = {
  id: number | string
  title: string
  category: string
  date?: string
  image: string
  layout: 'standard' | 'wide'
  href?: string
  ctaLabel?: string
}

const props = withDefaults(defineProps<{
  items?: GridItem[]
  categories?: string[]
  orderOptions?: string[]
  sectionClass?: string
  containerClass?: string
}>(), {
  items: () => [],
  categories: () => [],
  orderOptions: () => ['Newest', 'Oldest'],
  sectionClass: '',
  containerClass: '',
})

const selectedCategory = ref('All')
const selectedDateOrder = ref('Newest')
const selectedOrder = ref('Newest')

const categoryOptions = computed(() => {
  if (props.categories.length > 0) return props.categories

  return [
    'All',
    ...Array.from(new Set(props.items.map((item) => item.category))),
  ]
})

const filteredItems = computed(() => {
  const items =
    selectedCategory.value === 'All'
      ? [...props.items]
      : props.items.filter(
          (item) => item.category === selectedCategory.value,
        )

  return selectedOrder.value === 'Oldest' ? items.reverse() : items
})
</script>

<template>
  <section :class="['w-full bg-white font-sans text-black', sectionClass]">
    <div
      :class="[
        'mx-auto w-full max-w-[1600px] px-5 py-8 sm:px-8 md:px-10 lg:px-[5.8vw] lg:py-10',
        containerClass,
      ]"
    >
      <!-- Filters -->
      <div
        class="mb-8 flex flex-col gap-5 border-b border-black/10 pb-6 lg:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
      >
        <div
          class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 lg:flex lg:w-auto lg:flex-wrap lg:items-center lg:gap-x-8"
        >
          <!-- Sort label -->
          <div class="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <span
              class="text-[12px] font-semibold leading-none tracking-[-0.02em] text-black"
            >
              Sort By
            </span>
          </div>

          <!-- Category -->
          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span
              class="text-[11px] font-medium leading-none tracking-[-0.02em]"
            >
              Category
            </span>

            <div class="relative">
              <select
                v-model="selectedCategory"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[92px]"
              >
                <option
                  v-for="category in categoryOptions"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>

          <!-- Date -->
          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span
              class="text-[11px] font-medium leading-none tracking-[-0.02em]"
            >
              Date
            </span>

            <div class="relative">
              <select
                v-model="selectedDateOrder"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[108px]"
              >
                <option
                  v-for="option in orderOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>

          <!-- Order -->
          <label class="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[76px_1fr] lg:flex">
            <span
              class="text-[11px] font-medium leading-none tracking-[-0.02em]"
            >
              Order
            </span>

            <div class="relative">
              <select
                v-model="selectedOrder"
                class="h-9 w-full min-w-0 appearance-none border border-black/35 bg-white pl-3 pr-8 text-[11px] outline-none transition focus:border-black lg:h-8 lg:min-w-[108px]"
              >
                <option
                  v-for="option in orderOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <svg
                class="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>
        </div>

        <!-- View buttons -->
        <div class="flex w-full items-center justify-end gap-4 sm:w-auto sm:self-end lg:self-auto">
          <button
            type="button"
            aria-label="Previous"
            class="grid h-7 w-7 place-items-center rounded-full border border-[#0d5561] text-[#0d5561] transition hover:bg-[#0d5561] hover:text-white"
          >
            <svg
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12.5 4.5L7 10L12.5 15.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            class="grid h-7 w-7 place-items-center rounded-full border border-[#0d5561] text-[#0d5561] transition hover:bg-[#0d5561] hover:text-white"
          >
            <svg
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 4.5L13 10L7.5 15.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- News grid -->
      <div
        class="grid auto-rows-[250px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[270px] lg:grid-cols-3 lg:gap-6 xl:auto-rows-[300px]"
      >
        <article
          v-for="item in filteredItems"
          :key="item.id"
          :class="[
            'group relative isolate overflow-hidden bg-[#e7e7e7]',
            item.layout === 'wide'
              ? 'sm:col-span-2 lg:col-span-2'
              : 'col-span-1',
          ]"
        >
          <img
              :src="item.image"
            :alt="item.title"
            class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
            loading="lazy"
          />

          <!-- White lower fade -->
          <div
            class="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_34%,rgba(255,255,255,0.16)_48%,rgba(255,255,255,0.92)_78%,rgba(255,255,255,1)_100%)]"
          ></div>

          <!-- Content -->
          <div
            class="flex h-full flex-col justify-end px-4 pb-4 pt-6 sm:px-5 sm:pb-5 lg:px-5"
          >
            <h3
              class="max-w-[95%] text-[18px] font-medium leading-[0.98] tracking-[-0.055em] text-black sm:text-[19px] lg:text-[20px] xl:text-[22px]"
            >
              {{ item.title }}
            </h3>

            <NuxtLink
              :to="item.href || '#'"
              class="mt-4 inline-flex w-fit items-center gap-5 text-[10px] font-normal tracking-[-0.02em] text-black"
            >
              {{ item.ctaLabel || item.date || 'Read More' }}

              <svg
                class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 14L14 6M8 6H14V12"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
