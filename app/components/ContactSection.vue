<template>
  <section
    ref="contactSectionRef"
    class="contact-section bg-[#eeeeee] py-16 lg:py-24"
    :class="{ 'is-visible': isContactSectionVisible }"
  >
    <div
      class="mx-auto px-6 lg:px-20 xl:px-16"
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
            <!-- Linkedin -->
            <a
              href="#"
              class="text-[#8d8d8d] transition hover:text-[#0c5668]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.19h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.81c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V24H8V8z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="text-[#8d8d8d] transition hover:text-[#0c5668]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="text-[#8d8d8d] transition hover:text-[#0c5668]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.53 1.49-3.93 3.78-3.93 1.09 0 2.23.2 2.23.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.58v1.9h2.77l-.44 2.9h-2.33V22c4.78-.76 8.43-4.91 8.43-9.93z"
                />
              </svg>
            </a>
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

  const serviceId = config.public.emailjsServiceId
  const templateId = config.public.emailjsTemplateId
  const publicKey = config.public.emailjsPublicKey

  if (!serviceId || !templateId || !publicKey) {
    setStatus('error', 'Email service is not configured yet. Please try again later.')
    return
  }

  isSubmitting.value = true

  try {
    const fullName = `${form.firstName} ${form.lastName}`.trim()

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          enquiry_type: form.enquiryType,
          from_name: fullName,
          first_name: form.firstName,
          last_name: form.lastName,
          from_email: form.email,
          reply_to: form.email,
          phone: form.phone,
          organisation: form.organisation,
          job_title: form.jobTitle,
          message: form.message,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(await response.text())
    }

    resetForm()
    setStatus('success', 'Thank you. Your message has been sent successfully.')
  } catch (error) {
    console.error('EmailJS contact form error:', error)
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
