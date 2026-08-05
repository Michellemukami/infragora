<template>
  <main class="bg-white text-[#003f50]">
    <SideHeader title="Governance" description="" />

    <section class="bg-white px-6 py-16 sm:px-10 md:px-14 md:py-24 lg:px-20 lg:py-[118px]">
      <div class="mx-auto ">
        <div
          class="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-start md:justify-between lg:mb-16"
          data-governance-reveal
        >
          <h2 class="text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#003f50] md:text-[32px] lg:text-[38px]">
            INFRAGORA Team
          </h2>

          <p class="max-w-[610px] text-[13px] font-medium leading-[1.45] tracking-[-0.025em] text-[#003f50] md:text-[15px] lg:text-[16px]">
            Founded by Africans with institutional success in building
            institutions from the ground up and leading them into established
            organizations.
          </p>
        </div>

        <div class="grid grid-cols-1 justify-items-start gap-x-10 gap-y-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-14">
          <button
            v-for="(member, index) in teamMembers"
            :key="member.name"
            type="button"
            class="group w-full max-w-[320px] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#003f50] focus-visible:ring-offset-8"
            data-governance-reveal
            :style="{ transitionDelay: `${index * 75}ms` }"
            @click="openMember(member)"
          >
            <div class="aspect-square w-full overflow-hidden rounded-full bg-[#dcebe8] transition-colors duration-300 group-hover:bg-[#cfe3df]">
              <img
                v-if="member.image"
                :src="member.image"
                :alt="member.name"
                class="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              >
            </div>

            <div class="mt-7">
              <h3 class="text-[21px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#003f50] md:text-[23px] lg:text-[25px]">
                {{ member.name }}
              </h3>
              <p class="mt-4 text-[15px] font-medium leading-[1.25] tracking-[-0.025em] text-[#003f50] md:text-[16px] lg:text-[17px]">
                {{ member.role }}
              </p>
            </div>
          </button>
        </div>

        <div class="mt-20 md:mt-[112px] lg:mt-[128px]">
          <div
            class="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-start md:justify-between lg:mb-16"
            data-governance-reveal
          >
            <h2 class="text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#003f50] md:text-[32px] lg:text-[38px]">
              Global Board
            </h2>

            <p class="max-w-[610px] text-[13px] font-medium leading-[1.45] tracking-[-0.025em] text-[#003f50] md:text-[15px] lg:text-[16px]">
              With a world class global board, with deep rooted expertise in
              African and global markets and over 160 years of experience.
            </p>
          </div>

          <div class="grid grid-cols-1 justify-items-start gap-x-10 gap-y-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-14">
            <button
              v-for="(member, index) in boardMembers"
              :key="member.name"
              type="button"
              class="group w-full max-w-[320px] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#003f50] focus-visible:ring-offset-8"
              data-governance-reveal
              :style="{ transitionDelay: `${index * 75}ms` }"
              @click="openMember(member)"
            >
              <div class="aspect-square w-full overflow-hidden rounded-full bg-[#dcebe8] transition-colors duration-300 group-hover:bg-[#cfe3df]">
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.name"
                  class="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                >
              </div>

              <div class="mt-7">
                <h3 class="text-[21px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#003f50] md:text-[23px] lg:text-[25px]">
                  {{ member.name }}
                </h3>
                <p class="mt-4 text-[15px] font-medium leading-[1.25] tracking-[-0.025em] text-[#003f50] md:text-[16px] lg:text-[17px]">
                  {{ member.displayRole ?? member.role }}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedMember"
          class="fixed inset-0 z-[2147483000] flex items-start justify-center overflow-y-auto bg-[#dcebe8]/95 px-5 py-20 text-[#003f50] backdrop-blur-sm sm:px-8 sm:py-24 md:py-28"
          role="dialog"
          aria-modal="true"
          :aria-label="`${selectedMember.name} profile`"
          @click.self="closeMember"
        >
          <button
            type="button"
            class="group fixed right-5 top-24 z-[2147483647] grid size-12 place-items-center text-[#003f50] transition duration-200 hover:text-[#0f5b69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003f50] sm:right-8 md:top-28 md:size-14"
            aria-label="Close profile"
            @click="closeMember"
          >
            <span class="grid size-full origin-center place-items-center text-[44px] font-light leading-none transition-transform duration-200 group-hover:rotate-90 md:text-[50px]">
              &times;
            </span>
          </button>

          <Transition
            appear
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="translate-y-6 scale-[0.98] opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 scale-100 opacity-100"
            leave-to-class="translate-y-4 scale-[0.98] opacity-0"
          >
            <div class="relative grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-[42%_minmax(0,1fr)] md:items-start md:gap-12 lg:gap-16">
              <div class="aspect-[1.04/1] w-full max-w-[320px] overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,63,80,0.10)] sm:max-w-[420px] md:max-w-none">
                <img
                  v-if="selectedMember.image"
                  :src="selectedMember.image"
                  :alt="selectedMember.name"
                  class="size-full object-cover"
                >
              </div>

              <div class="min-w-0 max-w-[680px]">
                <h2 class="text-[22px] font-semibold leading-none tracking-[-0.04em] text-[#003f50] md:text-[28px] lg:text-[32px]">
                  {{ selectedMember.name }}
                </h2>
                <p class="mt-2 max-w-[520px] text-[10px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#003f50] md:text-[12px]">
                  {{ selectedMember.role }}
                </p>

                <a
                  v-if="selectedMember.linkedin"
                  :href="selectedMember.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-grid size-7 place-items-center bg-[#0077b5] text-[13px] font-bold leading-none text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#005f93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003f50] focus-visible:ring-offset-4"
                  aria-label="Open LinkedIn profile"
                >
                  in
                </a>

                <div class="mt-5 space-y-4 text-[12px] font-medium leading-[1.65] tracking-[-0.02em] text-[#003f50] sm:text-[13px] md:text-[14px]">
                  <p v-for="paragraph in selectedMember.bio" :key="paragraph">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import SideHeader from '~/components/common/SideHeader.vue'
import andrewImage from '~/assets/images/team/andrew.png'
import farisaniImage from '~/assets/images/team/farisani.png'
import ngoziImage from '~/assets/images/team/ngozi.png'
import odiogoImage from '~/assets/images/team/odigio.png'
import tshokoloImage from '~/assets/images/team/tshokolo.png'
import veraImage from '~/assets/images/team/vera.png'
import danieleImage from '~/assets/images/team/daniela.png'
import BritishImage from '~/assets/images/team/british.png'
import placeholderImage from '~/assets/images/team/placeholder.png'

type Member = {
  name: string
  role: string
  displayRole?: string
  image?: string
  linkedin?: string
  bio: string[]
}

useHead({
  title:
    'Governance | INFRAGORA Global Capital',
  meta: [
    {
      name: 'description',
      content:
        'Learn about INFRAGORA’s governance framework, leadership structure and commitment to disciplined investment oversight, accountability and transparency.',
    },
    {
      name: 'keywords',
      content:
        'INFRAGORA governance, infrastructure investment governance, fund governance Africa, investment management governance',
    },
    
  ],
})
const profileBio = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien, vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
]

const tshokoloBio = [
  'BCom, University of the North, MBL at UNISA, and an MSc - LSE. AMP, Harvard, USA.',
  'Over 25+ years of experience. Former CEO of the IDC1 with approximately US$10bn AUM; previously CEO of the Land and Agricultural Bank of South Africa (Land Bank) and board member of Land Bank Insurance Company.',
  'Former Group Executive for Infrastructure Finance at the Development Bank of Southern Africa (DBSA), covering public sector and corporate mandates.',
  'Advisory Board and Investment Committee roles for multiple private equity funds, including New Africa Mining Fund, Shanduka Value Partners, Africa Agriculture Fund, and Old Mutual Housing Fund; founding director of the SA Energy Council (2022).',
  'Current non-executive Board Chairman of the SA National Ports Authority (Transnet Group subsidiary); non-executive director at Sedibelo Resources Ltd (platinum mining company in South Africa) and Eskom Holdings.',
]

const ezekielBio = [
  'BEng, MSc LSE. Sloan Fellow, MBA MIT, USA.',
  'Ezekiel Odiogo has over 24 years of global investment banking and industry experience. He has held several leadership positions at the African Development Bank, including Head Private Sector Investment Operations, managing US$150 billion+ portfolios across various industries and infrastructure asset classes.',
  'He has hands-on transaction advisory and execution experience, and experience in the setup and management of several investment funds.',
  'He spearheaded from concept and led the establishment of the Africa Investment Forum - Africa\'s premier multi-billion and fully transactional marketplace, with back-to-back successes and record levels in mobilizing multi-billion-dollar private capital and closing deals.',
  'Ezekiel spent over half a decade at the Islamic Development Bank, where he led several fund investments and was part of the pioneering team that set up the Bank\'s structured finance and public private partnership operations.',
]

const edozienBio = [
  'BA Harvard University, USA. MBA Harvard, USA.',
  'Ms Edozien was Managing Director of Actis LLP\'s West Africa, a leading emerging markets private equity firm.',
  'She draws on over 35 years of experience in finance, consulting, operational management, and board governance in corporates globally to bring value to investee companies and clients.',
  'She currently sits on several boards and advises several African start-up businesses in various sectors, including healthcare, FMCG, financial services, and technology.',
  'She started her career in corporate finance first at Salomon Brothers and then at JP Morgan, both in New York City.',
  'She was with McKinsey & Co. in London and Paris, where she became an Associate Principal. In 1999, she joined Pfizer, Inc. in New York City as Vice President of Strategic Planning and Business Development, Regional Director of Pfizer Pharmaceuticals Group for Anglophone East, West, and Central Africa.',
  'She has been an Aspen Leadership Institute Fellow and a member of the Young President\'s Organization.',
]

const lindelwaBio = [
  'Dual BA - USA. Sloan Fellow, MBA MIT, USA.',
  'Lindelwa Farisani recently worked as an Engagement Manager at McKinsey & Company, where she led high-impact projects for major South African financial institutions, delivering data-driven strategies that identified significant revenue opportunities and cost savings.',
  'She also works as an independent consultant focused on company transformation strategies, AI model training, and developing training scenarios for AI systems in investment banking applications.',
  'Prior to consulting, Lindi spent over a decade at UBS Investment Bank as Head of Equity Advisory Sales, advising global institutional investors on African and Eastern European markets.',
  'She played key roles in major transactions, including a US$3.5 billion divestiture, Vodafone\'s US$1.1 billion stake sale in Vodacom, and Barclays\'s divestiture from Absa Group.',
  'She is Chairperson of Raith Foundation and member of Eisenhower Fellowships\' Global Network Committee.',
]

const andrewBio = [
  'CA, BEng Kings College. MBA, INSEAD.',
  'Andrew Alli was, most recently, the President and CEO of the Africa Finance Corporation (AFC), a multilateral financial institution focused on improving Africa\'s critical infrastructure.',
  'A financial professional with over 30 years\' experience in both developed and developing countries, he is currently a Non-Executive Director for the Development Bank of Nigeria, where he chairs the Audit Committee.',
  'Andrew is also currently a Non-Executive Director for MTN Nigeria and British International Investment (BII).',
  'Andrew was also a Partner at Travant Capital Partners, a West Africa-focused private equity fund.',
  'He spent over a decade with the International Finance Corporation (IFC), where he held senior positions including Country Manager for Nigeria and South Africa.',
]

const veraBio = [
  'Chair, Liquidity and Sustainability Facility; Former Under Secretary, UNECA; Former Director IFC, World Bank.',
]

const britishBio = [
  'Chair, Africa, Milken Institute International; Former Deputy Assistant Administrator & Coordinator, Prosper Africa.',
]

const edBio = [
  'BA Manchester University, MBA Cranfield UK, PGDip Law Northumbria University. Graduate, US and UK Army.',
  'Ed Marlow was Former MD Africa, Deutsche Bank; MD Africa, Credit Suisse; Senior Advisor, Renaissance Capital; MD, Emerging Markets Principal Investments, HSBC; and MD Fixed Income, Credit Suisse.',
  'Ed brings over 23 years of experience working and traveling in Africa, with 22+ years focused on debt, investment, and advisory in Africa.',
  'His career includes roles at Insinger De Beaufort, UBS, and Citigroup; he previously served as a British Infantry Officer.',
  'He holds an MBA from Cranfield University, a PGDip Law from the University of Northumbria, and a BA from Manchester University; he is a graduate of the US Army Command and General Staff College and RMA Sandhurst.',
]

const danieleBio = [
  'JD, Harvard Law School, MA in IPS and BA in IR, Stanford University.',
  'Daniele Jean-Pierre is a corporate finance attorney and senior executive with over two decades of experience in private equity, corporate finance, international trade, and development finance.',
  'As Managing Director for Trade at Prosper Africa, she managed a $50 million catalytic capital facility supporting agribusiness, textiles and apparel, and critical minerals, mobilizing financing from the private sector and DFIs.',
  'Over the course of her career at USAID, she has advanced African economic development, secured global supply chains, and advanced $5 billion of U.S. foreign assistance across Africa, Asia, and the Caribbean through senior legal leadership roles, including Acting Deputy General Counsel, Assistant General Counsel, and Chief Legal Officer in Senegal and Haiti.',
  'She has advised on public-private partnerships, infrastructure and energy projects, and compliance frameworks in fragile and frontier markets.',
  'In the private sector, Daniele served as Associate General Counsel at American Capital, a global asset manager with $100 billion AUM, structuring leveraged buyouts, debt, and equity investments and advising portfolio company boards.',
  'She began her career at Latham & Watkins LLP, representing major investment banks, including Goldman Sachs, and private equity sponsors, including the Carlyle Group, in leveraged finance transactions across Washington, New York, and Paris.',
  'She holds a JD from Harvard Law School and an MA in International Policy Studies and BA in International Relations from Stanford University, and is fluent in French with professional proficiency in Portuguese.',
]

const teamMembers: Member[] = [
  {
    name: 'Tshokolo Nchocho',
    role: 'Senior MD',
    image: tshokoloImage,
    linkedin: '#',
    bio: tshokoloBio,
  },
  {
    name: 'Ezekiel Odiogo',
    role: 'Senior MD',
    image: odiogoImage,
    linkedin: '#',
    bio: ezekielBio,
  },
  {
    name: 'Edozien Ngozi',
    role: 'Senior MD',
    image: ngoziImage,
    linkedin: '#',
    bio: edozienBio,
  },
  {
    name: 'Lindelwa Farisani',
    role: 'MD, Public Investments',
    image: farisaniImage,
    linkedin: '#',
    bio: lindelwaBio,
  },
  {
    name: 'Ed Marlow',
    role: 'MD, Private Investments',
    image: placeholderImage,
    linkedin: '#',
    bio: edBio,
  },
  {
    name: 'Andrew Alli',
    role: 'Strategic Investor',
    image: andrewImage,
    linkedin: '#',
    bio: andrewBio,
  },
  {
    name: 'Daniele Jean-Pierre',
    role: 'General Counsel',
    image: danieleImage,
    linkedin: '#',
    bio: danieleBio,
  },
]

const boardMembers: Member[] = [
  {
    name: 'Vera Songwe',
    role: 'Chair, Liquidity and Sustainability Facility; Former Under Secretary, UNECA; Former Director IFC, World Bank',
    displayRole: 'Chair, Liquidity and Sustainability Facility',
    image: veraImage,
    linkedin: '#',
    bio: veraBio,
  },
  {
    name: 'British Robinson',
    role: 'Chair, Africa, Milken Institute International; Former Deputy Assistant Administrator & Coordinator, Prosper Africa',
    displayRole: 'Chair, Africa, Milken Institute International',
    linkedin: '#',
    image: BritishImage,
    bio: britishBio,
  },
  {
    name: 'Tshokolo Nchocho',
    role: 'Executive Director',
    image: tshokoloImage,
    linkedin: '#',
    bio: tshokoloBio,
  },
  {
    name: 'Ezekiel Odiogo',
    role: 'Executive Director',
    image: odiogoImage,
    linkedin: '#',
    bio: ezekielBio,
  },
]

const selectedMember = ref<Member | null>(null)
let governanceRevealObserver: IntersectionObserver | undefined

const revealGovernanceElement = (element: Element) => {
  element.classList.add('is-visible')
}

const openMember = (member: Member) => {
  selectedMember.value = member
}

const closeMember = () => {
  selectedMember.value = null
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMember()
  }
}

watch(selectedMember, (member) => {
  if (import.meta.client) {
    document.body.style.overflow = member ? 'hidden' : ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  const revealItems = Array.from(document.querySelectorAll('[data-governance-reveal]'))

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach(revealGovernanceElement)
    return
  }

  governanceRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        revealGovernanceElement(entry.target)
        governanceRevealObserver?.unobserve(entry.target)
      })
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  revealItems.forEach((item) => governanceRevealObserver?.observe(item))
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  governanceRevealObserver?.disconnect()

  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
[data-governance-reveal] {
  opacity: 0;
  transform: translate3d(0, 34px, 0) scale(0.985);
  filter: blur(8px);
  transition:
    opacity 760ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1),
    filter 760ms ease;
  will-change: opacity, transform, filter;
}

[data-governance-reveal].is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-governance-reveal] {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
