<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-3 opacity-0"
  >
    <aside
      v-if="isVisible"
      class="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 text-[#082C44] sm:px-6 sm:pb-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div
        class="mx-auto max-w-[1080px] overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(6,56,84,0.24)]"
      >
        <div class="grid gap-0 lg:grid-cols-[1fr_auto]">
          <div class="border-b border-black/10 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r lg:py-6">
            <div class="flex items-start gap-4">
              <span
                class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dcebe8] text-[#0f5b69]"
                aria-hidden="true"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3.5c-.5 2.6 1.1 4.7 3.8 4.7.5 2.4 2.2 3.8 4.7 3.8A8.5 8.5 0 1 1 12 3.5Z"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.7 10.2h.01M11.3 15.3h.01M15.8 13.1h.01"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  />
                </svg>
              </span>

              <div class="min-w-0">
                <p
                  id="cookie-consent-title"
                  class="text-[15px] font-semibold leading-tight text-[#082C44] sm:text-[16px]"
                >
                  Cookie preferences
                </p>
                <p
                  id="cookie-consent-description"
                  class="mt-2 max-w-[700px] text-[13px] leading-[1.65] text-[#29455B] sm:text-[14px]"
                >
                  We use essential cookies to keep the site working and optional analytics cookies to understand traffic. Google Analytics only loads if you allow analytics.
                </p>

                <button
                  type="button"
                  class="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f5b69] transition hover:text-[#063854] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5b69]/35"
                  :aria-expanded="showDetails"
                  aria-controls="cookie-preference-details"
                  @click="showDetails = !showDetails"
                >
                  <span>{{ showDetails ? 'Hide details' : 'View details' }}</span>
                  <svg
                    class="h-3 w-3 transition-transform"
                    :class="showDetails ? 'rotate-180' : 'rotate-0'"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4L5 7L8 4"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <Transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="-translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="-translate-y-1 opacity-0"
                >
                  <div
                    v-if="showDetails"
                    id="cookie-preference-details"
                    class="mt-4 grid gap-3 text-[13px] leading-[1.55] text-[#29455B] sm:grid-cols-2"
                  >
                    <div class="rounded-[8px] bg-[#f1f6f5] p-4">
                      <div class="flex items-center justify-between gap-3">
                        <p class="font-semibold text-[#082C44]">Essential</p>
                        <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#66777f]">Always on</span>
                      </div>
                      <p class="mt-2">
                        Required for page navigation, security and core website functionality.
                      </p>
                    </div>

                    <div class="rounded-[8px] bg-[#f1f6f5] p-4">
                      <div class="flex items-center justify-between gap-3">
                        <p class="font-semibold text-[#082C44]">Analytics</p>
                        <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f5b69]">Optional</span>
                      </div>
                      <p class="mt-2">
                        Helps us understand aggregate website usage so we can improve the experience.
                      </p>
                    </div>
                  </div>
                </Transition>

                <p class="mt-3 text-[12px] leading-[1.6] text-[#66777f]">
                  You can read more in our
                  <NuxtLink
                    to="/cookie-policy"
                    class="font-semibold text-[#0f5b69] underline-offset-4 hover:underline"
                  >
                    Cookie Policy
                  </NuxtLink>.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:px-6 lg:w-[330px] lg:flex-col lg:justify-center">
            <button
              type="button"
              class="inline-flex h-11 items-center justify-center rounded-full bg-[#0f5b69] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#063854] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5b69]/35 focus-visible:ring-offset-2"
              @click="acceptAnalytics"
            >
              Accept analytics
            </button>
            <button
              type="button"
              class="inline-flex h-11 items-center justify-center rounded-full border border-[#b9cbcb] px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#082C44] transition hover:border-[#0f5b69] hover:bg-[#f1f6f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5b69]/30 focus-visible:ring-offset-2"
              @click="rejectAnalytics"
            >
              Use essential only
            </button>
          </div>
        </div>
      </div>
    </aside>
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
const showDetails = ref(false)
const route = useRoute()

const getConsentChoice = (): ConsentChoice | null => {
  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return storedValue === 'accepted' || storedValue === 'rejected' ? storedValue : null
  } catch {
    return null
  }
}

const saveConsentChoice = (choice: ConsentChoice) => {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Browsers can block storage in private or hardened modes.
  }
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
