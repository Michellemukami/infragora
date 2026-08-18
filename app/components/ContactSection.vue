<template>
  <section
    ref="contactSectionRef"
    class="contact-section bg-[#eeeeee] py-16 lg:py-24"
    :class="{ 'is-visible': isContactSectionVisible }"
  >
    <div
      class="mx-auto px-6 lg:px-20 xl:px-20"
    >
      <div
        class="grid grid-cols-1 gap-16 lg:grid-cols-[420px_1fr]"
      >
        <!-- LEFT SIDE -->
        <div class="contact-copy pt-4">
          <h2
            class="contact-title text-[#0c5668] text-[48px] font-semibold leading-none tracking-[-0.03em]"
          >
            Contact Us
          </h2>

          <div class="contact-intro mt-12 max-w-[340px] space-y-6">
            <p
              class="text-[15px] leading-[1.7] text-[#245665]"
            >
              Let's build Africa's infrastructure investment market together.
            </p>

            <p
              class="text-[15px] leading-[1.7] text-[#245665]"
            >
              Whether you are an asset owner, developer,
              institutional investor, development finance
              institution, strategic partner, policymaker
              or infrastructure company, INFRAGORA
              welcomes conversations that support Africa's
              infrastructure growth.
            </p>
          </div>

          <!-- Social -->
          <div class="contact-social mt-10 flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="flex h-10 w-10 items-center justify-center transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
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
              class="flex h-10 w-10 items-center justify-center transition duration-200 hover:-translate-y-0.5 hover:opacity-55"
            >
              <img
                :src="linkedinIcon"
                alt=""
                class="h-6 w-6 object-contain"
                aria-hidden="true"
              />
            </a>
          </div>

          <div class="contact-office mt-9 max-w-[360px] text-[#0c5668]">
            <h3 class="text-[28px] font-semibold leading-none tracking-[-0.02em]">
              Office
            </h3>
            <p class="mt-5 text-[15px] leading-[1.65]">
              4th Floor, West Tower,<br>
              Nelson Mandela Square<br>
              Sandton<br>
              Johannesburg, Gauteng, South Africa
            </p>
          </div>
        </div>

        <!-- RIGHT SIDE FORM -->
        <div class="contact-form-panel">
          <form
            class="space-y-5"
            @submit.prevent="submitForm"
          >
            <div
              v-if="formStatus.message"
              :class="[
                'rounded border px-4 py-3 text-sm leading-[1.6]',
                formStatus.type === 'success'
                  ? 'border-[#b9d9c4] bg-[#eef8f1] text-[#1f6b3a]'
                  : 'border-[#efc4c4] bg-[#fff1f1] text-[#9f2f2f]',
              ]"
              role="status"
              aria-live="polite"
            >
              {{ formStatus.message }}
            </div>

            <!-- Enquiry -->
            <select
              v-model="form.enquiryType"
              class="h-[56px] w-full border border-[#d9d9d9] bg-white px-4 text-sm text-gray-700 outline-none focus:border-[#0c5668]"
              required
            >
              <option
                value=""
                disabled
              >
                Enquiry Type
              </option>
              <option>Investment Enquiry</option>
              <option>Advisory Services</option>
              <option>Fund Management</option>
              <option>Investor Relations</option>
              <option>Partnership</option>
              <option>Portfolio / Project Opportunity</option>
              <option>Media Enquiry</option>
              <option>General Enquiry</option>
            </select>

            <!-- Names -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                v-model.trim="form.firstName"
                type="text"
                placeholder="First Name"
                class="h-[56px] border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
                required
              />

              <input
                v-model.trim="form.lastName"
                type="text"
                placeholder="Last Name"
                class="h-[56px] border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
                required
              />
            </div>

            <input
              v-model.trim="form.email"
              type="email"
              placeholder="Email"
              class="h-[56px] w-full border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
              required
            />

            <input
              v-model.trim="form.phone"
              type="tel"
              placeholder="Phone Number"
              class="h-[56px] w-full border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
            />

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                v-model.trim="form.organisation"
                type="text"
                placeholder="Organisation"
                class="h-[56px] border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
              />

              <input
                v-model.trim="form.jobTitle"
                type="text"
                placeholder="Job Title"
                class="h-[56px] border border-[#d9d9d9] px-4 text-sm outline-none focus:border-[#0c5668]"
              />
            </div>

            <textarea
              v-model.trim="form.message"
              rows="4"
              placeholder="Message"
              class="w-full resize-none border border-[#d9d9d9] px-4 py-4 text-sm outline-none focus:border-[#0c5668]"
              required
            ></textarea>

            <input type="hidden" name="source" value="Infragora" />

            <button
              type="submit"
              :disabled="isSubmitting"
              class="h-[58px] w-full bg-[#0c5668] text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import facebookIcon from "~/assets/images/socials/facebook.png"
import linkedinIcon from "~/assets/images/socials/linkedin.png"

const config = useRuntimeConfig()

useHead({
  title: 'Contact INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        "Meta Description Contact INFRAGORA Global Capital for infrastructure investment, advisory, fund management, partnerships, investor relations and media enquiries.",
    },
    {
      name: 'keywords',
      content:
        'contact INFRAGORA, infrastructure investment enquiry, investor relations Africa, advisory enquiry, fund management contact',
    },
  ],
})

const defaultForm = {
  enquiryType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organisation: '',
  jobTitle: '',
  message: '',
}

const form = reactive({ ...defaultForm })
const isSubmitting = ref(false)
const isContactSectionVisible = ref(false)
const contactSectionRef = ref<HTMLElement | null>(null)
const formStatus = reactive<{
  type: 'success' | 'error' | ''
  message: string
}>({
  type: '',
  message: '',
})
let statusTimer: ReturnType<typeof setTimeout> | undefined
let contactSectionObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!('IntersectionObserver' in window) || !contactSectionRef.value) {
    isContactSectionVisible.value = true
    return
  }

  contactSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isContactSectionVisible.value = true
      contactSectionObserver?.disconnect()
      contactSectionObserver = null
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -12% 0px',
    },
  )

  contactSectionObserver.observe(contactSectionRef.value)
})

onBeforeUnmount(() => {
  contactSectionObserver?.disconnect()

  if (statusTimer) {
    clearTimeout(statusTimer)
  }
})

const resetStatus = () => {
  if (statusTimer) {
    clearTimeout(statusTimer)
    statusTimer = undefined
  }

  formStatus.type = ''
  formStatus.message = ''
}

const setStatus = (type: 'success' | 'error', message: string) => {
  resetStatus()

  formStatus.type = type
  formStatus.message = message

  statusTimer = setTimeout(() => {
    resetStatus()
  }, 6000)
}

const resetForm = () => {
  Object.assign(form, defaultForm)
}

const submitForm = async () => {
  resetStatus()

  if (!form.enquiryType || !form.firstName || !form.lastName || !form.email || !form.message) {
    setStatus('error', 'Please complete the enquiry type, name, email and message fields.')
    return
  }

  isSubmitting.value = true

  try {
    const fullName = `${form.firstName} ${form.lastName}`.trim()
    const cmsApiBase = config.public.cmsApiBase.replace(/\/$/, '')

    const response = await fetch(`${cmsApiBase}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        source: 'Infragora',
        enquiry_type: form.enquiryType,
        first_name: form.firstName,
        last_name: form.lastName,
        full_name: fullName,
        from_email: form.email,
        phone: form.phone,
        organisation: form.organisation,
        job_title: form.jobTitle,
        message: form.message,
      }),
    })

    if (!response.ok) {
      if (response.status === 422) {
        setStatus('error', 'Please check the form fields and try again.')
        return
      }

      throw new Error(await response.text())
    }

    resetForm()
    setStatus('success', 'Thank you. Your message has been sent successfully.')
  } catch (error) {
    console.error('CMS enquiry form error:', error)
    setStatus('error', 'We could not send your message right now. Please try again in a moment.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  overflow: hidden;
}

.contact-title,
.contact-intro,
.contact-social,
.contact-office,
.contact-form-panel :deep(select),
.contact-form-panel :deep(input),
.contact-form-panel :deep(textarea),
.contact-form-panel :deep(button) {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  filter: blur(10px);
  transition:
    opacity 760ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 760ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 760ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, filter;
}

.contact-title {
  transform: translate3d(0, 34px, 0);
  transition-duration: 880ms;
}

.contact-intro {
  transition-delay: 110ms;
}

.contact-social {
  transition-delay: 210ms;
}

.contact-office {
  transition-delay: 290ms;
}

.contact-form-panel :deep(select) {
  transition-delay: 140ms;
}

.contact-form-panel :deep(.grid:nth-of-type(1) input:nth-child(1)) {
  transition-delay: 210ms;
}

.contact-form-panel :deep(.grid:nth-of-type(1) input:nth-child(2)) {
  transition-delay: 270ms;
}

.contact-form-panel :deep(input:nth-of-type(1)) {
  transition-delay: 330ms;
}

.contact-form-panel :deep(input:nth-of-type(2)) {
  transition-delay: 390ms;
}

.contact-form-panel :deep(.grid:nth-of-type(2) input:nth-child(1)) {
  transition-delay: 450ms;
}

.contact-form-panel :deep(.grid:nth-of-type(2) input:nth-child(2)) {
  transition-delay: 510ms;
}

.contact-form-panel :deep(textarea) {
  transition-delay: 570ms;
}

.contact-form-panel :deep(button) {
  transition-delay: 650ms;
}

.contact-section.is-visible .contact-title,
.contact-section.is-visible .contact-intro,
.contact-section.is-visible .contact-social,
.contact-section.is-visible .contact-office,
.contact-section.is-visible .contact-form-panel :deep(select),
.contact-section.is-visible .contact-form-panel :deep(input),
.contact-section.is-visible .contact-form-panel :deep(textarea),
.contact-section.is-visible .contact-form-panel :deep(button) {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .contact-title,
  .contact-intro,
  .contact-social,
  .contact-office,
  .contact-form-panel :deep(select),
  .contact-form-panel :deep(input),
  .contact-form-panel :deep(textarea),
  .contact-form-panel :deep(button) {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
