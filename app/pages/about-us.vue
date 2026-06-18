<script setup lang="ts">
import NavBar from '~/components/common/NavBar.vue';

import Footer from '~/components/common/Footer.vue';

useHead({
  title:
    'About INFRAGORA Global Capital | African-Led Infrastructure Investment Platform',
  meta: [
    {
      name: 'description',
      content:
        'Learn about INFRAGORA Global Capital, an African-led platform focused on structured exits, capital recycling and secondary market solutions for African infrastructure.',
    },
    {
      name: 'keywords',
      content:
        'about INFRAGORA, African infrastructure platform, infrastructure fund management Africa, African-led investment platform',
    },
    
  ],
})
</script>

<template>
<NavBar />
    <AboutUs />
<Footer />  
</template>
