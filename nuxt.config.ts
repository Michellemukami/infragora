// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      cmsApiBase: 'http://127.0.0.1:8000/api',
      emailjsServiceId: '',
      emailjsTemplateId: '',
      emailjsPublicKey: '',
    },
  },
})
