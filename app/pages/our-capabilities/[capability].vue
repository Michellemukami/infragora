<script setup lang="ts">
import NavBar from '~/components/common/NavBar.vue'
import Footer from '~/components/common/Footer.vue'
import Advisory from '~/components/Advisory.vue'

const route = useRoute()
const capability = computed(() => {
  const value = route.params.capability
  return Array.isArray(value) ? value[0] : String(value || '')
})
</script>

<template>
  <NavBar />
  <Advisory v-if="capability === 'advisory'" />
  <Capabilities v-else />
  <Footer />
</template>
