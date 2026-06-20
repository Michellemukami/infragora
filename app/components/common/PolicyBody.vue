<template>
  <section class="bg-white py-12 md:py-20">
    <div class="mx-auto px-6 md:px-10 lg:px-20">
      <div
        v-for="(section, index) in sections"
        :key="section.title || index"
        :class="index === 0 ? '' : 'border-t border-[#D8DEE5]'"
      >
        <div
          class="grid gap-8 py-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12"
        >
          <!-- LEFT TITLE -->
          <div>
            <h3
              class="max-w-[180px] text-[20px] font-medium leading-[1.35] text-[#082C44]"
            >
              {{ section.title }}
            </h3>
          </div>

          <!-- RIGHT CONTENT -->
          <div>
            <template v-if="section.list">
              <div
                v-for="item in section.list"
                :key="item.heading"
                class="mb-8 last:mb-0"
              >
                <h4
                  class="mb-3 text-[14px] font-semibold text-[#082C44]"
                >
                  {{ item.heading }}
                </h4>

                <p
                  class="max-w-[760px] text-[14px] leading-[1.85] text-[#29455B]"
                >
                  {{ item.text }}
                </p>
              </div>
            </template>

            <template v-else-if="section.bullets">
              <ul
                class="max-w-[760px] list-disc space-y-3 pl-5 text-[14px] leading-[1.85] text-[#29455B]"
              >
                <li
                  v-for="item in section.bullets"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </template>

            <template v-else>
              <p
                class="max-w-[760px] text-[14px] leading-[1.85] text-[#29455B]"
              >
                {{ section.content }}
              </p>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
export type PolicyBodyListItem = {
  heading: string
  text: string
}

export type PolicyBodySection = {
  title: string
  content?: string
  list?: PolicyBodyListItem[]
  bullets?: string[]
}

defineProps<{
  sections: PolicyBodySection[]
}>()
</script>
