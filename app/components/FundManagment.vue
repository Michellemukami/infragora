

<template>
 <WhatWeDoIntro
    title="Fund Management"
    :paragraphs="aboutIntroParagraphs"
    :media-src="fundManagementHeroImage"
    media-type="image"
    section-class="min-h-[560px] md:min-h-[620px] lg:min-h-[640px]"
    media-container-class="min-h-[560px] items-start !pt-36 !pb-20 md:min-h-[620px] md:!pt-36 md:!pb-20 lg:min-h-[640px] lg:!pt-36 lg:!pb-20"
    title-class="text-[42px] sm:text-[52px] lg:text-[58px]"
    content-class="mt-28 md:mt-[230px] md:translate-x-12 lg:mt-[240px] lg:translate-x-24 xl:translate-x-32 text-[20px]"
  />
  

<section
  ref="benefitsSectionRef"
  class="fund-benefits-section overflow-hidden"
  :class="{ 'is-visible': isBenefitsSectionVisible }"
>
     <!-- Benefits section -->
    <div
      class="mx-auto px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <!-- Desktop composition -->
      <div class="hidden grid-cols-3 gap-7 md:grid">
        <!-- Main title occupies the first two cells -->
        <div
          class="fund-benefits-heading col-span-2 flex min-h-[220px] items-start pt-12 lg:min-h-[260px] lg:pt-16"
        >
          <h3
            class="max-w-[560px] text-[24px] font-medium leading-[1.08] tracking-[-0.045em] lg:text-[40px]"
          >
            Fund Management <br />
Capabilities
           
       
          </h3>
        </div>

        <!-- Card 01 -->
        <article
          v-if="firstMarketBenefit"
          class="fund-benefit-card flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
          style="--benefit-delay: 120ms"
        >
          <span
            class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
          >
            {{ firstMarketBenefit.number }}
          </span>

          <p
            class="max-w-[300px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ firstMarketBenefit.text }}
          </p>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="(item, itemIndex) in remainingMarketBenefits"
          :key="item.number"
          class="fund-benefit-card flex min-h-[220px] flex-col justify-between bg-[#d9e8e3] p-7 lg:min-h-[260px] lg:p-8"
          :style="{ '--benefit-delay': `${200 + itemIndex * 80}ms` }"
        >
          <span
            class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
          >
            {{ item.number }}
          </span>

          <p
            class="max-w-[310px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ item.text }}
          </p>
        </article>
      </div>

      <!-- Mobile and tablet composition -->
      <div class="md:hidden">
        <h3
          class="fund-benefits-heading max-w-[520px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[34px]"
        >
          A New Exit Window for African Infrastructure
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <article
            v-for="(item, itemIndex) in marketBenefits"
            :key="item.number"
            class="fund-benefit-card flex min-h-[190px] flex-col justify-between bg-[#d9e8e3] p-6"
            :style="{ '--benefit-delay': `${120 + itemIndex * 75}ms` }"
          >
            <span
              class="text-[20px] font-semibold leading-none tracking-[-0.05em] text-[#114c5a] lg:text-[30px]"
            >
              {{ item.number }}
            </span>

            <p class="max-w-[290px] text-[12px] leading-[1.4]">
              {{ item.text }}
            </p>
          </article>
        </div>
      </div>
    </div>
</section>
 <!-- here1 -->
  <section
    ref="investmentVehicleRef"
    class="investment-vehicle-section w-full bg-white"
    :class="{ 'is-visible': isInvestmentVehicleVisible }"
  >
    <div class="mx-auto ">
      <div class="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">

        <!-- LEFT -->
        <div
          class="investment-vehicle-panel investment-vehicle-panel--left flex items-center bg-[#E8F1EE] px-[28px] py-[48px] sm:px-[40px] lg:px-[42px]"
        >
          <div class="max-w-[520px]">

            <h2
              class="investment-vehicle-heading text-[#123654]
                     text-[34px]
                     font-medium
                     leading-[1.1]
                     tracking-[-0.03em]
                     lg:text-[56px]"
            >
              Profiling INFRAGORA
        
            </h2>
            <h2
              class="investment-vehicle-heading text-[#123654]
                     text-[34px]
                     font-normal
                     leading-[1.1]
                     tracking-[-0.03em]
                     lg:text-[56px]"
            >
            
              Investment Vehicle 1
            </h2>

            <p
              class="investment-vehicle-copy mt-[32px]
                     text-[#173851]
                     text-[15px]
                     leading-[1.75]
                     lg:text-[17px]"
            >
              INFRAGORA has launched the INFRAGORA Investment Vehicle 1
              ("IV1" or the "Investment Vehicle") – a US$1–2 billion listed
              investment holding vehicle. IV1 would be listed in key African
              and global markets, with initial listing at London Stock
              Exchange (LSE) and the Johannesburg Stock Exchange (JSE) and
              further listings at the Nigeria Stock Exchange (NGX), Nairobi
              Stock Exchange (NSE), and the US (NYSE or NASDAQ), in a phased
              timeline.
            </p>

          </div>
        </div>

        <!-- RIGHT -->
        <div
          class="investment-vehicle-panel investment-vehicle-panel--right flex items-center bg-[#113854] px-[28px] py-[48px] sm:px-[40px] lg:px-[52px]"
        >
          <div class="w-full">

            <!-- Currency -->
            <div class="investment-vehicle-currency flex items-center gap-4">

              <div class="relative h-[18px] w-[26px]">
                <span
                  class="absolute left-0 top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#2F6785]"
                ></span>

                <span
                  class="absolute right-0 top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#487C99]"
                ></span>
              </div>

              <span
                class="text-[15px]
                       uppercase
                       tracking-[0.08em]
                       text-[#5F8BA6]"
              >
                USD
              </span>

            </div>

            <!-- Divider -->
            <div class="investment-vehicle-divider mt-[14px] h-px bg-[#4A6980]/70"></div>

            <!-- Value -->
            <div
              class="investment-vehicle-value mt-[42px]
                     text-[58px]
                     font-medium
                     leading-none
                     tracking-[-0.04em]
                     text-[#d9e8e3]
                     lg:text-[120px]"
            >
              $1b - $2b
            </div>

            <!-- Caption -->
            <p
              class="investment-vehicle-caption mt-[40px]
                     text-[15px]
                     leading-[1.5]
                     text-[#EAF3EF]"
            >
              Value of listed investment holding vehicle.
            </p>

          </div>
        </div>

      </div>
    </div>
  </section>
   <!-- here2 -->
  <section
    ref="phaseImplementationRef"
    class="phase-implementation bg-[#073a58] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-24"
    :class="{ 'is-visible': isPhaseImplementationVisible }"
  >
    <div class="mx-auto max-w-[1440px]">
      <h2 class="phase-heading max-w-[420px] text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[40px] lg:text-[48px]">
        Phase-wise
        <span class="block font-normal">Implementation</span>
      </h2>

      <div class="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-16 lg:mt-24 lg:gap-24 xl:gap-32">
        <article
          v-for="(phase, phaseIndex) in implementationPhases"
          :key="phase.title"
          class="phase-card"
          :style="{ '--phase-delay': `${160 + phaseIndex * 120}ms` }"
        >
          <p class="phase-eyebrow text-[10px] font-semibold uppercase leading-none tracking-[0.02em] text-[#d9e8e3] sm:text-[11px]">
            {{ phase.phase }}
          </p>

          <h3 class="phase-title mt-4 text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#d9e8e3] sm:text-[26px] lg:text-[30px]">
            {{ phase.title }}
          </h3>

          <div class="phase-metric-line mt-10 grid grid-cols-2 gap-8 border-b border-[#4d91aa]/70 pb-4 sm:mt-12 lg:gap-10">
            <div
              v-for="metric in phase.metrics"
              :key="metric.value"
              class="min-w-0"
              :class="phase.metrics.length === 1 ? 'col-span-2' : ''"
            >
              <div class="flex items-center gap-3">
                  <div class="relative h-[18px] w-[26px]">
                <span
                  class="absolute left-0 top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#2F6785]"
                ></span>

                <span
                  class="absolute right-0 top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[#487C99]"
                ></span>
              </div>

                <span class="text-[10px] font-medium uppercase leading-none tracking-[0.03em] text-[#5e9cb2] sm:text-[11px]">
                  USD
                </span>
              </div>
            </div>
          </div>

          <div class="phase-values mt-6 grid grid-cols-2 gap-8 lg:gap-10">
            <strong
              v-for="metric in phase.metrics"
              :key="`${phase.title}-${metric.value}`"
              class="text-[42px] font-semibold leading-none tracking-[-0.075em] text-[#d9e8e3] sm:text-[52px] lg:text-[62px] xl:text-[70px]"
              :class="phase.metrics.length === 1 ? 'col-span-2' : ''"
            >
              {{ metric.value }}
            </strong>
          </div>

          <p class="phase-description mt-8 max-w-[520px] text-[12px] font-medium leading-[1.55] tracking-[-0.015em] text-[#d9e8e3] sm:text-[13px] lg:text-[14px]">
            {{ phase.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
  <!-- here3 -->
    <section
      ref="investmentStrategyRef"
      class="investment-strategy-section bg-[#0D5963] py-20 lg:py-20"
      :class="{ 'is-visible': isInvestmentStrategyVisible }"
    >
    <div class="mx-auto px-6 sm:px-10 lg:px-20">

      <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">

        <!-- Left Column -->
        <div class="investment-strategy-column space-y-7" style="--strategy-column-delay: 80ms">

          <p class="investment-strategy-copy body-text" style="--strategy-copy-delay: 160ms">
            IIV1 will be structured as a listed investment holding vehicle
            with two distinct windows (equity and debt) with a pre-IPO and
            IPO / Post IPO segment that is designed to provide secondary
            market access to infrastructure related opportunities,
            securities, and instruments in its target geographies. These
            securities will be backed by three underlying project types.
          </p>

          <p class="investment-strategy-copy body-text" style="--strategy-copy-delay: 260ms">
            At launch, the equity window will be the primary focus.
          </p>

          <div class="investment-strategy-copy" style="--strategy-copy-delay: 360ms">
            <p class="body-text mb-5">
              The Investment Vehicle's strategy is to generate attractive
              risk-adjusted hybrid returns profile (growth and yields) by
              making equity investments in:
            </p>

            <ul class="space-y-3">
              <li
                v-for="item in leftList"
                :key="item"
                class="investment-strategy-list-item flex items-start gap-3"
              >
                <span class="mt-[10px] h-[5px] w-[5px] rounded-full bg-white/90" />
                <span class="body-text">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Right Column -->
        <div class="investment-strategy-column space-y-7" style="--strategy-column-delay: 180ms">

          <p class="investment-strategy-copy body-text" style="--strategy-copy-delay: 260ms">
            These investments will be primarily denominated in U.S. dollars
            and South African rand. IIV1 will target 10–15 investments,
            with ticket sizes ranging from US$50 million / US$100 million
            or more per deal, taking either majority or significant minority
            interests in the target assets.
          </p>

          <p class="investment-strategy-copy body-text" style="--strategy-copy-delay: 360ms">
            At full deployment, IIV1 aims to achieve a financial
            additionality of mobilizing an additional US$3–6 billion in
            ESG-aligned impact-based sustainable infrastructure investments
            across sectors such as transport, ICT, water, renewable energy
            or green energy including gas, and infrastructure financial
            services.
          </p>

          <p class="investment-strategy-copy body-text" style="--strategy-copy-delay: 460ms">
            INFRAGORA has a pipeline size of 61 deals worth over
            US$23.4 Billion, of which about 7–8 deals covering 4–5 countries
            worth over US$2.7 Billion have been curated, ready for
            investment, and targeting deployment of the Vehicle's first
            close – 2026.
          </p>

        </div>

      </div>

    </div>
  </section>
   <section class="w-full bg-white py-12 sm:py-14 lg:py-16">
    <div class="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
      <h2
        class="text-center text-[#12314B] text-[28px] font-normal leading-tight
               sm:text-[34px]
               lg:text-[44px]"
      >
        Pipeline Overview Summary
      </h2>
    </div>
  </section>
   <!-- bridge1 -->
    <section
      ref="bridgeOneRef"
      class="bridge-one-section w-full bg-white"
      :class="{ 'is-visible': isBridgeOneVisible }"
    >
    <div
      class="mx-auto overflow-hidden rounded-none shadow-sm lg:grid lg:grid-cols-[430px_1fr]"
    >
      <!-- LEFT IMAGE -->
      <div class="bridge-one-media relative h-[620px] lg:h-auto">
        <img
          src="/assets/images/bridge.jpg"
          alt=""
          class="bridge-one-image absolute inset-0 h-full w-full object-cover"
        />

        <!-- Overlay -->
        <div class="bridge-one-overlay absolute inset-0 bg-[#0f2433]/45"></div>

        <div
          class="relative z-10 flex h-full flex-col justify-between p-10 px-6 lg:px-20 text-white"
        >
          <div>
            <h2
              class="bridge-one-title max-w-[260px] text-[42px] font-light leading-[1.15] tracking-[-0.02em] lg:text-[46px]"
            >
              Mergers and Acquisition Assets
            </h2>
          </div>

          <div class="bridge-one-metric">
            <p
              class="mb-5 text-[12px] uppercase tracking-[2px] text-white/70"
            >
              Target Investment
            </p>

            <div class="flex items-end gap-1">
              <span class="text-[86px] font-semibold leading-none">$2.0</span>
              <span class="pb-4 text-[32px] font-medium">b</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT GRID -->
      <div class="grid md:grid-cols-2">
        <!-- Card -->
        <div
          class="bridge-one-card group bg-[#0f5967] p-10 transition hover:bg-[#126575]"
          style="--bridge-card-delay: 180ms"
        >
          <h3 class="mb-14 text-[32px] font-light text-white">
            Platinum Project
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-white/60 text-[12px] uppercase tracking-[1.5px]"
              >
                <span>Size (%)</span>
                <span class="text-[34px] font-medium text-white">25%</span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-white/60 text-[12px] uppercase tracking-[1.5px]"
              >
                <span>Target Investment</span>
                <span class="text-[34px] font-medium text-white">$2b</span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>
          </div>
        </div>

        <!-- Card -->
        <div
          class="bridge-one-card group bg-[#0c3955] p-10 transition hover:bg-[#15486a]"
          style="--bridge-card-delay: 280ms"
        >
          <h3 class="mb-14 text-[32px] font-light text-white">
            Diamond Project
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-white/60 text-[12px] uppercase tracking-[1.5px]"
              >
                <span>Size (%)</span>
                <span class="text-[34px] font-medium text-white">25%</span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-white/60 text-[12px] uppercase tracking-[1.5px]"
              >
                <span>Target Investment</span>
                <span class="text-[34px] font-medium text-white">$2b</span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>
          </div>
        </div>

        <!-- Card -->
        <div
          class="bridge-one-card group bg-[#edf5f2] p-10 transition hover:bg-[#e7efec]"
          style="--bridge-card-delay: 380ms"
        >
          <h3 class="mb-14 text-[32px] font-light text-[#052e52]">
            Gold Project
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-[12px] uppercase tracking-[1.5px] text-[#4f6c7a]"
              >
                <span>Size (%)</span>
                <span class="text-[34px] font-medium text-[#052e52]"
                  >60% - 70%</span
                >
              </div>

              <div class="h-px bg-[#b7c9cf]"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-[12px] uppercase tracking-[1.5px] text-[#4f6c7a]"
              >
                <span>Target Investment</span>
                <span class="text-[34px] font-medium text-[#052e52]">$2b</span>
              </div>

              <div class="h-px bg-[#b7c9cf]"></div>
            </div>
          </div>
        </div>

        <!-- Card -->
        <div
          class="bridge-one-card group bg-[#dbe8e4] p-10 transition hover:bg-[#d2e0dc]"
          style="--bridge-card-delay: 480ms"
        >
          <h3 class="mb-14 text-[32px] font-light text-[#052e52]">
            Silver Project
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-[12px] uppercase tracking-[1.5px] text-[#4f6c7a]"
              >
                <span>Size (%)</span>
                <span class="text-[34px] font-medium text-[#052e52]"
                  >30% - 40%</span
                >
              </div>

              <div class="h-px bg-[#b7c9cf]"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-[12px] uppercase tracking-[1.5px] text-[#4f6c7a]"
              >
                <span>Target Investment</span>
                <span class="text-[34px] font-medium text-[#052e52]">$2b</span>
              </div>

              <div class="h-px bg-[#b7c9cf]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <!-- bridge2 -->
   <section
    ref="bridgeTwoRef"
    class="bridge-two-section w-full bg-white"
    :class="{ 'is-visible': isBridgeTwoVisible }"
  >
    <div
      class="mx-auto grid overflow-hidden lg:grid-cols-[430px_1fr]"
    >
      <!-- Left Image -->
      <div class="bridge-two-media relative min-h-[620px]">
        <img
          src="/assets/images/bridge.jpg"
          alt="Bridge"
          class="bridge-two-image absolute inset-0 h-full w-full object-cover"
        />

        <div class="bridge-two-overlay absolute inset-0 bg-black/45"></div>

        <div
          class="relative z-10 flex h-full flex-col justify-between p-10 lg:px-20 text-white"
        >
          <!-- Heading -->
          <div>
            <h2
              class="bridge-two-title max-w-[250px] text-[44px] font-light leading-[1.12] tracking-[-0.03em]"
            >
              Greenfield
              <br />
              In-house Assets
            </h2>
          </div>

          <!-- Investment -->
          <div class="bridge-two-metric">
            <p
              class="mb-4 text-[11px] uppercase tracking-[2px] text-white/60"
            >
              Target Investment
            </p>

            <div class="flex items-end">
              <span class="text-[86px] font-semibold leading-none">$0.7</span>
              <span class="pb-4 text-[34px] font-medium">b</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="grid md:grid-cols-2">
        <!-- Card -->
        <div class="bridge-two-card bg-[#0f5a67] p-10" style="--bridge-card-delay: 180ms">
          <h3 class="mb-14 text-[30px] font-normal text-white">
            Afridata Nigeria
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-white/50"
              >
                <span>Size (%)</span>
                <span class="text-[32px] font-medium text-white">
                  60% - 70%
                </span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-white/50"
              >
                <span>Target Investment</span>
                <span class="text-[30px] font-medium text-white">
                  $0.12b - 0.14b
                </span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>
          </div>
        </div>

        <!-- Card -->
        <div class="bridge-two-card bg-[#0a3653] p-10" style="--bridge-card-delay: 300ms">
          <h3 class="mb-14 text-[30px] font-normal text-white">
            Afridata South Africa
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-white/50"
              >
                <span>Size (%)</span>
                <span class="text-[32px] font-medium text-white">
                  60% - 70%
                </span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-white/50"
              >
                <span>Target Investment</span>
                <span class="text-[30px] font-medium text-white">
                  $0.18b - $0.42b
                </span>
              </div>

              <div class="h-px bg-white/20"></div>
            </div>
          </div>
        </div>

        <!-- Bottom Card -->
        <div class="bridge-two-card bg-[#edf5f3] p-10 md:col-span-2" style="--bridge-card-delay: 420ms">
          <h3 class="mb-16 text-[30px] font-normal text-[#082c4f]">
            Afridata Angola
          </h3>

          <div class="space-y-10">
            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-[#6b8991]"
              >
                <span>Size (%)</span>

                <span class="text-[32px] font-medium text-[#082c4f]">
                  60% - 70%
                </span>
              </div>

              <div class="h-px bg-[#b9cbcb]"></div>
            </div>

            <div>
              <div
                class="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[1.5px] text-[#6b8991]"
              >
                <span>Target Investment</span>

                <span class="text-[30px] font-medium text-[#082c4f]">
                  $0.11b - $0.13b
                </span>
              </div>

              <div class="h-px bg-[#b9cbcb]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <!-- bridge3 -->
  <section
    ref="bridgeThreeRef"
    class="bridge-three-section w-full bg-white "
    :class="{ 'is-visible': isBridgeThreeVisible }"
  >
    <div
      class="mx-auto overflow-hidden lg:grid lg:grid-cols-[430px_1fr]"
    >
      <!-- Left Image -->
      <div class="bridge-three-media relative min-h-[260px] lg:min-h-[420px]">
        <img
          src="/assets/images/bridge.jpg"
          alt="Bridge"
          class="bridge-three-image absolute inset-0 h-full w-full object-cover"
        />

        <!-- Dark Overlay -->
        <div class="bridge-three-overlay absolute inset-0 bg-[#071822]/45"></div>

        <!-- Content -->
        <div class="relative flex h-full p-8 lg:px-20">
          <h2
            class="bridge-three-title max-w-[170px] text-white text-[34px] lg:text-[44px] font-light leading-[1.05] tracking-[-0.02em]"
          >
            New
            <br />
            Build
          </h2>
        </div>
      </div>

      <!-- Right Card -->
      <div
        class="bridge-three-card bg-[#0F5B69] px-8 py-8 lg:px-12 lg:py-10 flex flex-col justify-between"
        style="--bridge-card-delay: 220ms"
      >
        <h3
          class="text-white text-[22px] lg:text-[30px] font-normal mb-12"
        >
          Afridata Nigeria
        </h3>

        <!-- Size -->
        <div class="mb-10">
          <div
            class="flex justify-between items-end text-[10px] uppercase tracking-[1.8px] text-white/45"
          >
            <span>Size (%)</span>

            <span
              class="text-white text-[24px] lg:text-[34px] normal-case tracking-normal"
            >
              60% - 70%
            </span>
          </div>

          <div class="mt-3 h-px bg-white/20"></div>
        </div>

        <!-- Target -->
        <div>
          <div
            class="flex justify-between items-end text-[10px] uppercase tracking-[1.8px] text-white/45"
          >
            <span>Target Investment</span>

            <span
              class="text-white text-[22px] lg:text-[32px] normal-case tracking-normal"
            >
              $0.12b - 0.14b
            </span>
          </div>

          <div class="mt-3 h-px bg-white/20"></div>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup lang="ts">
import WhatWeDoIntro from './common/WhatWeDoIntro.vue';
import fundManagementHeroImage from '~/assets/images/capabilities/fund-hero.jpg'
const isInvestmentVehicleVisible = ref(false)
const isPhaseImplementationVisible = ref(false)
const isBenefitsSectionVisible = ref(false)
const isBridgeOneVisible = ref(false)
const isBridgeTwoVisible = ref(false)
const isBridgeThreeVisible = ref(false)
const isInvestmentStrategyVisible = ref(false)
const phaseImplementationRef = ref<HTMLElement | null>(null)
const benefitsSectionRef = ref<HTMLElement | null>(null)
const bridgeOneRef = ref<HTMLElement | null>(null)
const bridgeTwoRef = ref<HTMLElement | null>(null)
const bridgeThreeRef = ref<HTMLElement | null>(null)
const investmentVehicleRef = ref<HTMLElement | null>(null)
const investmentStrategyRef = ref<HTMLElement | null>(null)
let benefitsSectionObserver: IntersectionObserver | null = null
let phaseImplementationObserver: IntersectionObserver | null = null
let bridgeOneObserver: IntersectionObserver | null = null
let bridgeTwoObserver: IntersectionObserver | null = null
let bridgeThreeObserver: IntersectionObserver | null = null
let investmentVehicleObserver: IntersectionObserver | null = null
let investmentStrategyObserver: IntersectionObserver | null = null
const investmentVehicleCopy =
  'INFRAGORA has launched the INFRAGORA Investment Vehicle 1 ("IIV1" or the "Investment Vehicle") - a US$1-2 billion listed investment holding vehicle. IIV1 would be listed in key African and global markets, with initial listing at London Stock Exchange (LSE) and the Johannesburg Stock Exchange (JSE) and further listings at the Nigeria Stock Exchange (NGX), Nairobi Stock Exchange (NSE), and the US (NYSE or NASDAQ), in a phased timeline.'

const implementationPhases = [
  {
    phase: 'Phase I',
    title: 'Equity funding',
    metrics: [{ value: '$600M' }, { value: '$1.4b' }],
    description:
      'Initial capital raise of US$600 million by no later than end of H2 2026 and an additional US$1.4 billion by no later than end of H1 2027.',
  },
  {
    phase: 'Phase II',
    title: 'Debt funding',
    metrics: [{ value: '$3b - $5b' }],
    description:
      'Additional US$3-5 billion, through infrastructure backed debt securities, follow-on equity offerings, and infrastructure ETFs.',
  },
]
const leftList = [
  'Operating brownfield projects with stable cashflow profiles;',
  'Operating projects with low Capex or growth upside potential; and',
  'Greenfield growth projects under construction that are approaching their near-end COD.'
]
onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    isBenefitsSectionVisible.value = true
    isPhaseImplementationVisible.value = true
    isBridgeOneVisible.value = true
    isBridgeTwoVisible.value = true
    isBridgeThreeVisible.value = true
    isInvestmentVehicleVisible.value = true
    isInvestmentStrategyVisible.value = true
    return
  }
  if (!investmentVehicleRef.value) {
    isInvestmentVehicleVisible.value = true
  } else {
    investmentVehicleObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isInvestmentVehicleVisible.value = true
        investmentVehicleObserver?.disconnect()
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    investmentVehicleObserver.observe(investmentVehicleRef.value)
  }
  if (!investmentStrategyRef.value) {
    isInvestmentStrategyVisible.value = true
  } else {
    investmentStrategyObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isInvestmentStrategyVisible.value = true
        investmentStrategyObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    investmentStrategyObserver.observe(investmentStrategyRef.value)
  }
  if (!bridgeOneRef.value) {
    isBridgeOneVisible.value = true
  } else {
    bridgeOneObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isBridgeOneVisible.value = true
        bridgeOneObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    bridgeOneObserver.observe(bridgeOneRef.value)
  }
  if (!bridgeTwoRef.value) {
    isBridgeTwoVisible.value = true
  } else {
    bridgeTwoObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isBridgeTwoVisible.value = true
        bridgeTwoObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    bridgeTwoObserver.observe(bridgeTwoRef.value)
  }
  if (!bridgeThreeRef.value) {
    isBridgeThreeVisible.value = true
  } else {
    bridgeThreeObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isBridgeThreeVisible.value = true
        bridgeThreeObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    bridgeThreeObserver.observe(bridgeThreeRef.value)
  }
  if (!phaseImplementationRef.value) {
    isPhaseImplementationVisible.value = true
  } else {
    phaseImplementationObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isPhaseImplementationVisible.value = true
        phaseImplementationObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    phaseImplementationObserver.observe(phaseImplementationRef.value)
  }
  if (!benefitsSectionRef.value) {
    isBenefitsSectionVisible.value = true
    return
  }

  benefitsSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      isBenefitsSectionVisible.value = true
      benefitsSectionObserver?.disconnect()
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -12% 0px',
    }
  )

  benefitsSectionObserver.observe(benefitsSectionRef.value)
})

onBeforeUnmount(() => {
  benefitsSectionObserver?.disconnect()
  phaseImplementationObserver?.disconnect()
  bridgeOneObserver?.disconnect()
  bridgeTwoObserver?.disconnect()
  bridgeThreeObserver?.disconnect()
  investmentVehicleObserver?.disconnect()
  investmentStrategyObserver?.disconnect()
})

useHead({
  title: 'Fund Management | African Infrastructure Investment Portfolios',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA manages infrastructure-focused vehicles and portfolios with disciplined governance, risk management, ESG integration and investor reporting.'
    },
    {
      name: 'keywords',
      content:
        'fund management Africa, infrastructure portfolio management, ESG investment Africa, infrastructure funds, investor reporting',
    },
  ],
})
const aboutIntroParagraphs = [
  "INFRAGORA provides disciplined fund management for infrastructure investment vehicles and portfolios across Africa. Our fund management approach combines investment selection, risk management, governance, ESG integration, investor reporting and active value creation.",

]


const marketBenefits = [
  {
    number: 'Portfolio Construction',
    text: 'diversified infrastructure portfolios across sectors, geographies, asset stages and risk-return profiles.',
  },
  {
    number: 'Investment Management',
    text: 'sourcing, screening, due diligence, approval, execution and portfolio monitoring.',
  },
  {
    number: 'Risk Management',
    text: "assessment of financial, operational, regulatory, currency, ESG, market and execution risks across the investment lifecycle.",
  },
  {
    number: 'Governance',
    text: 'strong standards for investment decision-making, reporting, compliance and portfolio oversight.',
  },
  {
    number: 'ESG and Impact Management',
    text: 'environmental, social and governance considerations integrated into investment selection and portfolio monitoring.',
  },
  {
    number: 'Investor Reporting',
    text: 'structured reporting, portfolio performance updates and transparency to investors and stakeholders.',
  },
  {
    number: 'Value Creation',
    text: 'work with portfolio companies and asset owners to enhance operational performance, expansion readiness and long-term resilience.',
  },
]

const firstMarketBenefit = computed(() => marketBenefits[0])
const remainingMarketBenefits = computed(() => marketBenefits.slice(1))
</script>

<style scoped>

.body-text {
  @apply text-white/90 text-[15px] leading-[1.95] lg:text-[16px];
}
.fund-benefits-heading,
.fund-benefit-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.fund-benefits-heading {
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 860ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: 70ms;
}

.fund-benefit-card {
  filter: blur(10px);
  transform: translate3d(0, 52px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1020ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease,
    box-shadow 1020ms ease;
  transition-delay: var(--benefit-delay, 0ms);
  box-shadow: 0 24px 56px rgb(17 76 90 / 0);
}

.fund-benefit-card span,
.fund-benefit-card p {
  transform: translate3d(0, 18px, 0);
  transition: transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--benefit-delay, 0ms) + 110ms);
  will-change: transform;
}

.fund-benefits-section.is-visible .fund-benefits-heading,
.fund-benefits-section.is-visible .fund-benefit-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.fund-benefits-section.is-visible .fund-benefit-card {
  box-shadow: 0 24px 56px rgb(17 76 90 / 0.08);
}

.fund-benefits-section.is-visible .fund-benefit-card span,
.fund-benefits-section.is-visible .fund-benefit-card p {
  transform: translate3d(0, 0, 0);
}

.investment-vehicle-section {
  overflow: hidden;
}

.investment-vehicle-panel,
.investment-vehicle-heading,
.investment-vehicle-copy,
.investment-vehicle-currency,
.investment-vehicle-value,
.investment-vehicle-caption {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.investment-vehicle-panel {
  filter: blur(10px);
  transform: translate3d(0, 44px, 0) scale(.985);
  transform-origin: center bottom;
  transition:
    opacity 900ms ease,
    transform 1080ms cubic-bezier(.16, 1, .3, 1),
    filter 900ms ease;
}

.investment-vehicle-panel--left {
  transition-delay: 80ms;
}

.investment-vehicle-panel--right {
  transition-delay: 180ms;
}

.investment-vehicle-heading {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 780ms ease,
    transform 920ms cubic-bezier(.16, 1, .3, 1),
    filter 780ms ease;
  transition-delay: 240ms;
}

.investment-vehicle-heading + .investment-vehicle-heading {
  transition-delay: 320ms;
}

.investment-vehicle-copy {
  filter: blur(8px);
  transform: translate3d(0, 30px, 0);
  transition:
    opacity 820ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 420ms;
}

.investment-vehicle-currency,
.investment-vehicle-caption {
  transform: translate3d(0, 22px, 0);
  transition:
    opacity 740ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1);
}

.investment-vehicle-currency {
  transition-delay: 360ms;
}

.investment-vehicle-divider {
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 900ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 470ms;
  will-change: transform;
}

.investment-vehicle-value {
  filter: blur(10px);
  transform: translate3d(0, 38px, 0) scale(.98);
  transition:
    opacity 860ms ease,
    transform 1020ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: 560ms;
}

.investment-vehicle-caption {
  transition-delay: 700ms;
}

.investment-vehicle-section.is-visible .investment-vehicle-panel,
.investment-vehicle-section.is-visible .investment-vehicle-heading,
.investment-vehicle-section.is-visible .investment-vehicle-copy,
.investment-vehicle-section.is-visible .investment-vehicle-currency,
.investment-vehicle-section.is-visible .investment-vehicle-value,
.investment-vehicle-section.is-visible .investment-vehicle-caption {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.investment-vehicle-section.is-visible .investment-vehicle-divider {
  transform: scaleX(1);
}

.phase-implementation {
  overflow: hidden;
}

.phase-heading,
.phase-card,
.phase-eyebrow,
.phase-title,
.phase-metric-line,
.phase-values,
.phase-description {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.phase-heading {
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 840ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 840ms ease;
  transition-delay: 80ms;
}

.phase-card {
  filter: blur(10px);
  transform: translate3d(0, 54px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 880ms ease,
    transform 1040ms cubic-bezier(.16, 1, .3, 1),
    filter 880ms ease;
  transition-delay: var(--phase-delay, 0ms);
}

.phase-eyebrow,
.phase-title,
.phase-metric-line,
.phase-values,
.phase-description {
  transform: translate3d(0, 20px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1);
}

.phase-eyebrow {
  transition-delay: calc(var(--phase-delay, 0ms) + 130ms);
}

.phase-title {
  transition-delay: calc(var(--phase-delay, 0ms) + 190ms);
}

.phase-metric-line {
  transform-origin: left center;
  transition-delay: calc(var(--phase-delay, 0ms) + 270ms);
}

.phase-values {
  filter: blur(8px);
  transform: translate3d(0, 28px, 0) scale(.985);
  transition:
    opacity 820ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: calc(var(--phase-delay, 0ms) + 350ms);
}

.phase-description {
  transition-delay: calc(var(--phase-delay, 0ms) + 470ms);
}

.phase-implementation.is-visible .phase-heading,
.phase-implementation.is-visible .phase-card,
.phase-implementation.is-visible .phase-eyebrow,
.phase-implementation.is-visible .phase-title,
.phase-implementation.is-visible .phase-metric-line,
.phase-implementation.is-visible .phase-values,
.phase-implementation.is-visible .phase-description {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.investment-strategy-section {
  overflow: hidden;
}

.investment-strategy-column,
.investment-strategy-copy,
.investment-strategy-list-item {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.investment-strategy-column {
  filter: blur(8px);
  transform: translate3d(0, 44px, 0);
  transition:
    opacity 860ms ease,
    transform 1000ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: var(--strategy-column-delay, 0ms);
}

.investment-strategy-copy {
  filter: blur(7px);
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1),
    filter 760ms ease;
  transition-delay: var(--strategy-copy-delay, 0ms);
}

.investment-strategy-list-item {
  transform: translate3d(0, 16px, 0);
  transition:
    opacity 680ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1);
}

.investment-strategy-list-item:nth-child(1) {
  transition-delay: 500ms;
}

.investment-strategy-list-item:nth-child(2) {
  transition-delay: 590ms;
}

.investment-strategy-list-item:nth-child(3) {
  transition-delay: 680ms;
}

.investment-strategy-section.is-visible .investment-strategy-column,
.investment-strategy-section.is-visible .investment-strategy-copy,
.investment-strategy-section.is-visible .investment-strategy-list-item {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0);
}

.bridge-one-section,
.bridge-two-section,
.bridge-three-section {
  overflow: hidden;
}

.bridge-one-media,
.bridge-one-card,
.bridge-one-title,
.bridge-one-metric,
.bridge-two-media,
.bridge-two-card,
.bridge-two-title,
.bridge-two-metric,
.bridge-three-media,
.bridge-three-card,
.bridge-three-title {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.bridge-one-media,
.bridge-two-media,
.bridge-three-media {
  filter: blur(10px);
  transform: translate3d(-28px, 0, 0) scale(.985);
  transform-origin: center;
  transition:
    opacity 900ms ease,
    transform 1100ms cubic-bezier(.16, 1, .3, 1),
    filter 900ms ease;
}

.bridge-one-image,
.bridge-two-image,
.bridge-three-image {
  transform: scale(1.08);
  transition: transform 1500ms cubic-bezier(.16, 1, .3, 1);
  will-change: transform;
}

.bridge-one-overlay,
.bridge-two-overlay,
.bridge-three-overlay {
  opacity: .7;
  transition: opacity 1100ms ease;
}

.bridge-one-title,
.bridge-two-title,
.bridge-three-title {
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 180ms;
}

.bridge-one-metric,
.bridge-two-metric {
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 820ms ease,
    transform 960ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 300ms;
}

.bridge-one-card,
.bridge-two-card,
.bridge-three-card {
  filter: blur(10px);
  transform: translate3d(0, 44px, 0) scale(.985);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1020ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease,
    background-color 200ms ease;
  transition-delay: var(--bridge-card-delay, 0ms), var(--bridge-card-delay, 0ms), var(--bridge-card-delay, 0ms), 0ms;
}

.bridge-one-card h3,
.bridge-one-card .space-y-10,
.bridge-two-card h3,
.bridge-two-card .space-y-10,
.bridge-three-card h3,
.bridge-three-card > div {
  transform: translate3d(0, 18px, 0);
  transition: transform 900ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--bridge-card-delay, 0ms) + 110ms);
  will-change: transform;
}

.bridge-one-section.is-visible .bridge-one-media,
.bridge-one-section.is-visible .bridge-one-card,
.bridge-one-section.is-visible .bridge-one-title,
.bridge-one-section.is-visible .bridge-one-metric,
.bridge-two-section.is-visible .bridge-two-media,
.bridge-two-section.is-visible .bridge-two-card,
.bridge-two-section.is-visible .bridge-two-title,
.bridge-two-section.is-visible .bridge-two-metric,
.bridge-three-section.is-visible .bridge-three-media,
.bridge-three-section.is-visible .bridge-three-card,
.bridge-three-section.is-visible .bridge-three-title {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.bridge-one-section.is-visible .bridge-one-image,
.bridge-two-section.is-visible .bridge-two-image,
.bridge-three-section.is-visible .bridge-three-image {
  transform: scale(1);
}

.bridge-one-section.is-visible .bridge-one-overlay,
.bridge-two-section.is-visible .bridge-two-overlay,
.bridge-three-section.is-visible .bridge-three-overlay {
  opacity: 1;
}

.bridge-one-section.is-visible .bridge-one-card h3,
.bridge-one-section.is-visible .bridge-one-card .space-y-10,
.bridge-two-section.is-visible .bridge-two-card h3,
.bridge-two-section.is-visible .bridge-two-card .space-y-10,
.bridge-three-section.is-visible .bridge-three-card h3,
.bridge-three-section.is-visible .bridge-three-card > div {
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .fund-benefits-heading,
  .fund-benefit-card,
  .fund-benefit-card span,
  .fund-benefit-card p,
  .investment-vehicle-panel,
  .investment-vehicle-heading,
  .investment-vehicle-copy,
  .investment-vehicle-currency,
  .investment-vehicle-divider,
  .investment-vehicle-value,
  .investment-vehicle-caption,
  .phase-heading,
  .phase-card,
  .phase-eyebrow,
  .phase-title,
  .phase-metric-line,
  .phase-values,
  .phase-description,
  .investment-strategy-column,
  .investment-strategy-copy,
  .investment-strategy-list-item,
  .bridge-one-media,
  .bridge-one-card,
  .bridge-one-title,
  .bridge-one-metric,
  .bridge-one-image,
  .bridge-one-overlay,
  .bridge-one-card h3,
  .bridge-one-card .space-y-10,
  .bridge-two-media,
  .bridge-two-card,
  .bridge-two-title,
  .bridge-two-metric,
  .bridge-two-image,
  .bridge-two-overlay,
  .bridge-two-card h3,
  .bridge-two-card .space-y-10,
  .bridge-three-media,
  .bridge-three-card,
  .bridge-three-title,
  .bridge-three-image,
  .bridge-three-overlay,
  .bridge-three-card h3,
  .bridge-three-card > div {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: none;
  }
}
</style>
