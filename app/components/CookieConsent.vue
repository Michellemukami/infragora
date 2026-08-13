<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0"
  >
    <section
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-[80] border-t border-black/10 bg-white px-5 py-5 text-[#102225] shadow-[0_-18px_45px_rgba(0,0,0,0.12)] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[520px] sm:border"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
    >
      <div class="space-y-4">
        <div>
          <h2 class="text-[16px] font-semibold leading-tight">
            Cookie preferences
          </h2>
          <p class="mt-2 text-[13px] leading-6 text-[#4a5d61]">
            We use analytics cookies to understand site performance and improve
            the experience. You can accept or reject analytics cookies.
          </p>
        </div>

        <NuxtLink
          to="/cookie-policy"
          class="inline-flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1296ad] transition-opacity hover:opacity-70"
        >
          Cookie Policy
        </NuxtLink>

        <div class="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            class="h-11 border border-[#d6dfdf] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] transition hover:border-[#102225]"
            @click="rejectAnalytics"
          >
            Reject
          </button>
          <button
            type="button"
            class="h-11 bg-[#1296ad] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#102225]"
            @click="acceptAnalytics"
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
type ConsentChoice = 'accepted' | 'rejected'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-4HN0Y79L1Q'
const CONSENT_STORAGE_KEY = 'infragora-cookie-consent'
const isVisible = ref(false)
const route = useRoute()

const getConsentChoice = (): ConsentChoice | null => {
  const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  return storedValue === 'accepted' || storedValue === 'rejected' ? storedValue : null
}

const saveConsentChoice = (choice: ConsentChoice) => {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
}

const trackPageView = () => {
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: route.fullPath,
    page_title: document.title,
  })
}

const loadGoogleAnalytics = () => {
  if (document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
    trackPageView()
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  })
  trackPageView()

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

const acceptAnalytics = () => {
  saveConsentChoice('accepted')
  isVisible.value = false
  loadGoogleAnalytics()
}

const rejectAnalytics = () => {
  saveConsentChoice('rejected')
  isVisible.value = false
  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
  })
  clearGoogleAnalyticsCookies()
}

const clearGoogleAnalyticsCookies = () => {
  const hostnameParts = window.location.hostname.split('.')
  const cookieDomains = [
    window.location.hostname,
    hostnameParts.length > 1 ? `.${hostnameParts.slice(-2).join('.')}` : '',
  ].filter(Boolean)

  document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0]?.trim())
    .filter((name) => name === '_ga' || name?.startsWith('_ga_'))
    .forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; path=/`
      cookieDomains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`
      })
    })
}

const openCookiePreferences = () => {
  isVisible.value = true
}

onMounted(() => {
  window.addEventListener('infragora:open-cookie-preferences', openCookiePreferences)

  const consentChoice = getConsentChoice()

  if (consentChoice === 'accepted') {
    loadGoogleAnalytics()
    return
  }

  isVisible.value = consentChoice !== 'rejected'
})

onBeforeUnmount(() => {
  window.removeEventListener('infragora:open-cookie-preferences', openCookiePreferences)
})

watch(
  () => route.fullPath,
  () => {
    if (getConsentChoice() === 'accepted') {
      trackPageView()
    }
  },
)
</script>
