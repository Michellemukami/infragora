<!-- components/SiteFooter.vue -->
<template>
    <section v-if="showMailingList" class="w-full bg-black">
    <div class="bg-[#1c1b1f]">
      <div
        class="relative mx-auto flex flex-col gap-10 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-20 lg:py-12"
      >
        <!-- Left text -->
        <div>
          <p class="mb-4 text-sm font-light text-white/55">
            Join our mailing list
          </p>

          <h2
            class="max-w-[360px] text-[28px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[34px] lg:text-[40px]"
          >
            Get exclusive<br />
            insights and updates
          </h2>
        </div>

        <!-- Form -->
        <form
          class="flex w-full max-w-[620px] overflow-hidden bg-white md:mt-6"
          @submit.prevent="submitMailingList"
        >
          <input
            v-model.trim="mailingListEmail"
            type="email"
            placeholder="Enter email address to sign up"
            class="h-[56px] flex-1 bg-[#e3e3e3] px-5 text-[12px] text-black outline-none placeholder:text-black/45 sm:h-[62px]"
            required
          />

          <button
            type="submit"
            :disabled="isSubscribing"
            class="footer-subscribe-button flex h-[56px] w-[150px] items-center justify-center gap-5 bg-white text-[11px] font-semibold uppercase text-black transition sm:h-[62px] sm:w-[170px]"
          >
            {{ isSubscribing ? 'Sending...' : 'Subscribe' }}
            <img
          :src="arrowOutwardIcon"
          alt=""
          class="footer-subscribe-icon h-5 w-5 object-contain"
        />
          </button>
        </form>

        <p
          v-if="mailingListStatus.message"
          :class="[
            'text-[12px] leading-[1.5] md:absolute md:bottom-5 md:right-20 md:max-w-[620px]',
            mailingListStatus.type === 'success' ? 'text-[#10cfa3]' : 'text-[#ffb4b4]',
          ]"
          role="status"
          aria-live="polite"
        >
          {{ mailingListStatus.message }}
        </p>
      </div>
    </div>

  </section>
  <footer class="w-full border-t border-black/5 bg-[#eeeeee]">
    <div
      class="mx-auto flex flex-col items-center gap-8 px-6 py-9 text-center sm:px-10 md:min-h-[132px] md:flex-row md:items-center md:justify-between md:px-14 md:py-8 md:text-left lg:px-20"
    >
      <!-- Left side -->
      <div
        class="flex min-w-0 flex-col items-center gap-5 text-[12px] font-medium text-black sm:text-[13px] md:flex-row md:items-center md:gap-10 lg:gap-14"
      >
        <p class="whitespace-nowrap">
          &copy;{{ currentYear }} INFRAGORA
        </p>

        <nav
          aria-label="Footer navigation"
          class="flex max-w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 md:justify-start lg:gap-x-10"
        >
          <NuxtLink
            to="/privacy-policy"
            class="whitespace-nowrap transition-opacity duration-200 hover:opacity-55"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/cookie-policy"
            class="whitespace-nowrap transition-opacity duration-200 hover:opacity-55"
          >
            Cookie Policy
          </NuxtLink>

          <NuxtLink
            to="/terms-and-conditions"
            class="whitespace-nowrap transition-opacity duration-200 hover:opacity-55"
          >
            Terms &amp; Conditions
          </NuxtLink>
        </nav>
      </div>

      <!-- Social media -->
      <div class="flex shrink-0 items-center justify-center gap-3 sm:gap-4 md:gap-5">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="flex h-10 w-10 items-center justify-center text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
        >
          <img
            :src="facebookIcon"
            alt=""
            class="h-6 w-6 object-contain"
            aria-hidden="true"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/infragora"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="flex h-10 w-10 items-center justify-center text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
        >
          <img
            :src="linkedinIcon"
            alt=""
            class="h-6 w-6 object-contain"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import arrowOutwardIcon from "~/assets/images/icon/arrow_outward.png"
import facebookIcon from "~/assets/images/socials/facebook.png"
import linkedinIcon from "~/assets/images/socials/linkedin.png"

const route = useRoute()
const currentYear = new Date().getFullYear()
const showMailingList = computed(() => route.path.replace(/\/$/, "") !== "/contact-us")
const mailingListEmail = ref('')
const isSubscribing = ref(false)
const mailingListStatus = reactive({
  type: '',
  message: '',
})
let mailingListStatusTimer

const resetMailingListStatus = () => {
  if (mailingListStatusTimer) {
    clearTimeout(mailingListStatusTimer)
    mailingListStatusTimer = undefined
  }

  mailingListStatus.type = ''
  mailingListStatus.message = ''
}

const setMailingListStatus = (type, message) => {
  resetMailingListStatus()

  mailingListStatus.type = type
  mailingListStatus.message = message

  mailingListStatusTimer = setTimeout(() => {
    resetMailingListStatus()
  }, 6000)
}

const submitMailingList = async () => {
  resetMailingListStatus()

  if (!mailingListEmail.value) {
    setMailingListStatus('error', 'Please enter a valid email address.')
    return
  }

  isSubscribing.value = true

  try {
    await $fetch('/api/mailing-list', {
      method: 'POST',
      body: {
        email: mailingListEmail.value,
      },
    })

    mailingListEmail.value = ''
    setMailingListStatus('success', 'Thank you. You are on our mailing list.')
  } catch (error) {
    if (error?.statusCode === 422 || error?.status === 422) {
      setMailingListStatus('error', 'Please enter a valid email address.')
      return
    }

    setMailingListStatus('error', 'We could not subscribe you right now. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}

onBeforeUnmount(() => {
  if (mailingListStatusTimer) {
    clearTimeout(mailingListStatusTimer)
  }
})
</script>

<style scoped>
.footer-subscribe-button {
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 260ms cubic-bezier(.16, 1, .3, 1),
    box-shadow 260ms ease;
}

.footer-subscribe-icon {
  transition: transform 260ms cubic-bezier(.16, 1, .3, 1);
  will-change: transform;
}

.footer-subscribe-button:hover {
  background-color: #10cfa3;
  transform: translate3d(0, -2px, 0);
  box-shadow: 0 14px 30px rgb(16 207 163 / 0.22);
}

.footer-subscribe-button:hover .footer-subscribe-icon {
  transform: translate3d(4px, -4px, 0);
}

.footer-subscribe-button:active {
  transform: translate3d(0, 0, 0);
  box-shadow: 0 8px 18px rgb(16 207 163 / 0.18);
}

@media (prefers-reduced-motion: reduce) {
  .footer-subscribe-button,
  .footer-subscribe-icon {
    transition: none;
  }

  .footer-subscribe-button:hover,
  .footer-subscribe-button:hover .footer-subscribe-icon,
  .footer-subscribe-button:active {
    transform: none;
  }
}
</style>
