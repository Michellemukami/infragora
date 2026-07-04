<script setup lang="ts">
import NavBar from '~/components/common/NavBar.vue'
import Footer from '~/components/common/Footer.vue'
import Governance from '~/components/Governance.vue'

useHead({
  title: 'Governance | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content: 'Governance at INFRAGORA Global Capital.',
    },
  ],
})
</script>

<template>
  <NavBar />
  <Governance />
  <Footer />
</template>
