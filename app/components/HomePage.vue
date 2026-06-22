<template>
    <section
      ref="homeHeroRef"
      class="homepage-hero relative overflow-hidden bg-[radial-gradient(circle_at_50%_115%,rgba(20,129,160,0.92)_0%,rgba(12,92,123,0.94)_33%,rgba(5,50,75,1)_78%)] pt-[124px] text-white sm:pt-[132px] lg:pt-[146px]"
      :class="{ 'is-visible': isHomeIntroVisible }"
    >
      <div class="mx-auto flex min-h-[540px] max-w-[1600px] flex-col items-center px-6 pb-0 sm:min-h-[650px] sm:px-10 lg:min-h-[820px] lg:px-20">
        <h1 class="hero-intro-title max-w-[720px] text-center text-[31px] font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
          Africa's Infrastructure
          <br />
          Secondary Market Platform
        </h1>

        <div class="hero-intro-actions mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3 lg:mt-10">
          <NuxtLink
            to="/our-capabilities"
            class="hero-intro-button inline-flex h-9 items-center gap-5 bg-[#18d8b7] px-6 text-[8px] font-bold uppercase tracking-[0.04em] text-[#032f45] transition hover:bg-[#35ffd8] sm:h-10 sm:px-7 sm:text-[9px] lg:h-11 lg:px-8 lg:text-[10px]"
            style="--hero-button-delay: 150ms"
          >
            Explore Our Platform
            <span class="hero-button-icon" aria-hidden="true">
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-base h-3 w-3 object-contain" />
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-hover h-3 w-3 object-contain" />
            </span>
          </NuxtLink>

          <NuxtLink
            to="/about-us"
            class="hero-intro-button inline-flex h-9 items-center gap-5 bg-[#0d4a70] px-6 text-[8px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#12577f] sm:h-10 sm:px-7 sm:text-[9px] lg:h-11 lg:px-8 lg:text-[10px]"
            style="--hero-button-delay: 235ms"
          >
            Discover Our Platform
            <span class="hero-button-icon" aria-hidden="true">
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-base hero-button-icon-light h-3 w-3 object-contain" />
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-hover hero-button-icon-light h-3 w-3 object-contain" />
            </span>
          </NuxtLink>
        </div>

       <div
  class="hero-intro-strip hero-image-strip-viewport mt-[54px] overflow-hidden sm:mt-16 lg:mt-[74px]"
>
  <div class="hero-image-strip pb-8 sm:pb-10 md:pb-12 lg:pb-14">
    <div
      v-for="trackIndex in 2"
      :key="trackIndex"
      class="hero-image-strip-set"
      :aria-hidden="trackIndex === 2"
    >
      <NuxtLink
        v-for="card in heroCarouselCards"
        :key="`${trackIndex}-${card.id}`"
        :to="card.to"
        class="group hero-image-card"
      >
        <span class="block overflow-hidden">
          <img
            :src="card.image"
            :alt="card.title"
            class="h-[220px] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] sm:h-[300px] md:h-[370px] lg:h-[410px] xl:h-[430px]"
          />
        </span>

        <div class="mt-3 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p class="text-[10px] font-medium leading-none text-[#15c8aa] sm:text-[11px] lg:text-[12px]">
              {{ card.category }}
            </p>

            <h2
              class="mt-2 text-[13px] font-medium leading-[1.22] tracking-[-0.025em] text-white sm:text-[15px] lg:text-[17px]"
            >
              {{ card.title }}
            </h2>
          </div>

          <img
            :src="arrowOutwardIcon"
            alt=""
            class="mt-[18px] h-2.5 w-2.5 shrink-0 object-contain brightness-0 invert transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:mt-6 lg:h-3 lg:w-3"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</div>
      </div>
    </section>
<section
  ref="secondSectionRef"
  class="homepage-second-section w-full bg-[#fafafa] text-[#111111]"
  :class="{ 'is-visible': isSecondSectionVisible }"
>
    <!-- Top introduction strip -->
    <div class="bg-[#dcebe7]">
      <div
        class="mx-auto grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:px-14 md:py-16 lg:gap-24 lg:px-20 xl:px-20"
      >
        <!-- Intro title -->
        <div class="second-section-intro-title">
          <h2
            class="max-w-[390px] text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[34px] lg:text-[40px]"
          >
            Building the Market
            <br />
            Infrastructure Africa Needs
          </h2>
        </div>

        <!-- Intro copy -->
        <div
          class="second-section-intro-copy max-w-[700px] text-[12px] leading-[1.45] text-[#151515] sm:text-[13px] lg:text-[14px]"
        >
          <p>
            Africa’s infrastructure opportunity is significant, but the market
            remains largely primary, illiquid and underdeveloped. Many
            high-quality infrastructure assets are privately held, difficult to
            value, hard to exit, and often inaccessible to long-term
            institutional investors.
          </p>

          <p class="mt-3">
            INFRAGORA Global Capital was created to address this market gap. We
            provide a structured platform for capital recycling, asset
            monetisation, secondary market transactions and long-term
            infrastructure investment across Africa. Our model is designed to
            deepen liquidity, improve transparency, support price discovery,
            mobilise institutional capital and accelerate sustainable
            infrastructure development.
          </p>
        </div>
      </div>
    </div>

    <!-- Benefits section -->
    <div
      ref="benefitsSectionRef"
      class="homepage-benefits-section mx-auto px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
      :class="{ 'is-visible': isBenefitsSectionVisible }"
    >
      <!-- Desktop composition -->
      <div class="hidden grid-cols-3 gap-7 md:grid">
        <!-- Main title occupies the first two cells -->
        <div
          class="second-section-benefit-heading col-span-2 flex min-h-[220px] items-start pt-12 lg:min-h-[260px] lg:pt-16"
        >
          <h3
            class="max-w-[560px] text-[24px] font-medium leading-[1.08] tracking-[-0.045em] lg:text-[40px]"
          >
            A New Exit Window for
            <br />
            African Infrastructure
          </h3>
        </div>

        <!-- Card 01 -->
        <article
          class="second-section-card flex min-h-[220px] flex-col justify-between bg-[#eeeeee] p-7 lg:min-h-[260px] lg:p-8"
          style="--second-section-delay: 260ms"
        >
          <span
            class="benefit-card-number text-[42px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6] lg:text-[54px]"
          >
            {{ marketBenefits[0].number }}
          </span>

          <p
            class="benefit-card-text max-w-[300px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ marketBenefits[0].text }}
          </p>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="item in marketBenefits.slice(1)"
          :key="item.number"
          class="second-section-card flex min-h-[220px] flex-col justify-between bg-[#eeeeee] p-7 lg:min-h-[260px] lg:p-8"
          :style="{ '--second-section-delay': `${320 + Number(item.number) * 70}ms` }"
        >
          <span
            class="benefit-card-number text-[42px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6] lg:text-[54px]"
          >
            {{ item.number }}
          </span>

          <p
            class="benefit-card-text max-w-[310px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ item.text }}
          </p>
        </article>
      </div>

      <!-- Mobile and tablet composition -->
      <div class="md:hidden">
        <h3
          class="second-section-benefit-heading max-w-[520px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[34px]"
        >
          A New Exit Window for African Infrastructure
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in marketBenefits"
            :key="item.number"
            class="second-section-card flex min-h-[190px] flex-col justify-between bg-[#eeeeee] p-6"
            :style="{ '--second-section-delay': `${180 + Number(item.number) * 70}ms` }"
          >
            <span
              class="benefit-card-number text-[40px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6]"
            >
              {{ item.number }}
            </span>

            <p class="benefit-card-text max-w-[290px] text-[12px] leading-[1.4]">
              {{ item.text }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
<!-- What We Do Section -->
  <section
    ref="whatWeDoSectionRef"
    class="homepage-what-we-do overflow-hidden bg-white"
    :class="{ 'is-visible': isWhatWeDoSectionVisible }"
  >
    <div class="mx-auto ">
      <div class="grid lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <!-- Advisory -->
          <article
            class="what-we-do-tile bg-[#0d5563] px-8 py-8 md:px-10 lg:px-20 md:py-10 lg:h-[330px]"
            style="--what-we-do-delay: 0ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-white"
            >
              Advisory
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-white/90"
            >
              Project development, transaction structuring,
              market access, valuation, ESG alignment and
              investor readiness.
            </p>
          </article>

          <!-- Investment -->
          <article
            class="what-we-do-tile bg-[#072f4a] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
            style="--what-we-do-delay: 90ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-white"
            >
              Investment
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-white/90"
            >
              Operating, brownfield, growth and selected
              late-stage greenfield infrastructure assets
              across Africa.
            </p>
          </article>

          <!-- Instruments -->
          <article
            class="what-we-do-tile bg-[#dce8e5] px-8 py-8 md:px-10 lg:px-20  md:py-10 lg:h-[330px]"
            style="--what-we-do-delay: 180ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-[#08243a]"
            >
              Instruments
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-[#16354b]"
            >
              Flexible investment instruments including
              equity, quasi-equity and private credit.
            </p>
          </article>

          <!-- Fund Management -->
          <article
            class="what-we-do-tile bg-[#c6ddda] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
            style="--what-we-do-delay: 270ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-[#08243a]"
            >
              Fund Management
            </h3>

            <p
              class="mt-16 max-w-[250px] text-[15px] leading-[1.7] text-[#16354b]"
            >
              Infrastructure-focused vehicles and
              portfolios with disciplined governance,
              risk management and long-term value creation.
            </p>
          </article>
        </div>

        <!-- FEATURED CARD -->
        <article
          class="what-we-do-feature group relative min-h-[500px] overflow-hidden lg:min-h-[660px]"
          style="--what-we-do-delay: 220ms"
        >
          <img
            src="/assets/images/bridge.jpg"
            alt=""
            class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-gradient-to-b from-[#005eaa]/80 via-[#003f73]/65 to-black/50 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:from-[#005eaa]/85 group-hover:via-[#003f73]/70 group-hover:to-black/55"
          />

          <div
            class="relative flex h-full flex-col justify-between p-8 md:p-12 lg:p-14"
          >
            <div class="flex items-start justify-between">
              <h2
                class="text-[38px] font-medium leading-none text-white md:text-[48px]"
              >
                What We Do
              </h2>

              <button
                class="flex h-20 w-20 items-center justify-center text-white"
              >
                <svg
                  class="h-7 w-7 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-3 group-hover:translate-x-3 group-hover:scale-110 lg:h-8 lg:w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    stroke-width="1.65"
                  />
                </svg>
              </button>
            </div>

            <div class="max-w-[380px]">
              <p
                class="text-[15px] leading-[1.8] text-white"
              >
                INFRAGORA brings together advisory,
                investment, fund management and capital
                markets capabilities to support
                infrastructure development and investment
                across the asset lifecycle.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
<!-- focus areas -->
  <section
    ref="focusAreasSectionRef"
    class="homepage-focus-areas overflow-hidden bg-[#f7f7f7] py-12 md:py-16 lg:py-20"
    :class="{ 'is-visible': isFocusAreasSectionVisible }"
  >
    <div class="w-full pl-6 md:pl-10 xl:pl-20">
      <div class="mb-9 flex items-center justify-between pr-6 md:pr-10 xl:pr-20">
        <h2
          class="focus-areas-heading text-[28px] font-semibold leading-none tracking-[-0.01em] text-black lg:text-[34px]"
        >
          Focus Areas
        </h2>

        <div class="focus-areas-controls flex gap-3">
          <button
            aria-label="Previous focus area"
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
            @click="showPreviousFocusArea"
          >
            ‹
          </button>

          <button
            aria-label="Next focus area"
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
            @click="showNextFocusArea"
          >
            ›
          </button>
        </div>
      </div>

      <div class="focus-areas-carousel overflow-hidden">
        <div
          class="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
          :style="{ transform: `translateX(calc(-${focusCarouselIndex} * (min(78vw, 354px) + 1.5rem)))` }"
        >
          <div
            v-for="area in focusCarouselAreas"
            :key="area.carouselId"
            class="flex h-[285px] w-[min(78vw,354px)] shrink-0 flex-col justify-between p-5 transition duration-500 hover:-translate-y-1 md:h-[330px] lg:h-[360px]"
            :style="{ background: area.background }"
          >
            <h3
              class="text-[20px] font-semibold leading-[1.08] lg:text-[23px]"
              :class="[area.titleClass, area.titleMaxWidth]"
            >
              {{ area.title }}
            </h3>

            <p class="text-[12px] leading-[1.4] text-[#001929] lg:text-[13px]">
              {{ area.text }}
            </p>
          </div>
        </div>
      </div>
      <div
        ref="focusAreasFeatureRef"
        class="focus-areas-feature relative mr-6 mt-14 min-h-[360px] overflow-hidden bg-[#002d49] bg-cover bg-[64%_center] sm:mt-20 sm:min-h-[340px] sm:bg-[72%_center] md:mr-10 md:mt-24 md:min-h-[390px] lg:min-h-[450px] lg:bg-[88%_47%] xl:mr-20"
        :class="{ 'is-visible': isFocusAreasFeatureVisible }"
        :style="{ backgroundImage: `url(${ribbonImage})` }"
      >
        <div
          class="absolute inset-0 bg-[linear-gradient(180deg,#002d49_0%,rgba(0,45,73,.92)_45%,rgba(0,45,73,.72)_100%)] sm:bg-[linear-gradient(90deg,#002d49_0%,#002d49_50%,rgba(0,45,73,.72)_72%,rgba(0,45,73,.1)_100%)] md:bg-[linear-gradient(90deg,#002d49_0%,#002d49_43%,rgba(0,45,73,.78)_57%,rgba(0,45,73,.08)_100%)]"
        />

        <div class="relative flex min-h-[360px] items-center px-5 py-10 sm:min-h-[340px] sm:px-8 sm:py-12 md:min-h-[390px] md:px-14 lg:min-h-[450px] lg:px-16">
          <div class="max-w-[440px]">
            <h3 class="mb-6 text-[24px] font-semibold leading-none text-white sm:mb-8 sm:text-[28px] lg:mb-9 lg:text-[34px]">
              Why INFRAGORA
            </h3>

            <p class="max-w-[36rem] text-[12px] leading-[1.6] text-white sm:text-[13px] lg:text-[14px]">
              Africa's infrastructure market faces limited exit pathways,
              insufficient equity capital, valuation uncertainty, weak price
              discovery, limited secondary market infrastructure and a narrow
              investor base. INFRAGORA addresses these challenges through a
              platform designed to combine deep African market access,
              investment discipline, global partnerships and structured
              financial solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- News -->
<section
  ref="newsSectionRef"
  class="homepage-news overflow-hidden bg-[#f5f5f5]"
  :class="{ 'is-visible': isNewsSectionVisible }"
>
  <div class="mx-auto pl-6 sm:pl-10 lg:pl-20">

    <!-- Header -->
    <div class="mb-12 flex items-end justify-between pr-6 sm:pr-10 lg:pr-20">
      <h2
        class="news-heading text-[34px] leading-[0.95] font-medium tracking-[-0.04em] lg:text-[42px]"
      >
        News <br />
        & Insights
      </h2>

      <div class="news-controls flex gap-3">
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
          aria-label="Previous news item"
          @click="showPreviousNewsPost"
        >
          &lsaquo;
        </button>

        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-[#9da8aa] text-[20px] leading-none text-[#24454c] transition duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
          aria-label="Next news item"
          @click="showNextNewsPost"
        >
          &rsaquo;
        </button>
      </div>
    </div>

    <!-- Cards -->
    <div class="news-cards-viewport overflow-hidden pb-4">
      <div
        class="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        :style="{ transform: `translateX(calc(-${newsCarouselIndex} * (min(82vw, 380px) + 1.5rem)))` }"
      >
        <!-- Card -->
        <article
          v-for="(post, postIndex) in newsCarouselPosts"
          :key="post.carouselId"
          class="news-card group w-[min(82vw,380px)] flex-shrink-0"
          :style="{ '--news-card-delay': `${160 + (postIndex % posts.length) * 85}ms` }"
        >
          <div class="relative overflow-hidden bg-white">

            <!-- Image -->
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-[420px] w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 sm:h-[460px]"
              />
            </div>

            <!-- Bottom Fade -->
            <div
              class="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-white via-white/85 to-transparent"
            />

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <h3 class="max-w-[260px] text-[20px] font-medium leading-[1.05]">
                {{ post.title }}
              </h3>

              <div class="mt-5 flex items-center gap-4">
                <span class="text-[12px] tracking-wide">
                  Read More
                </span>

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>

  </div>
</section>
<KnowledgeHub />
<!-- accordion -->
 <section
    ref="accordionSectionRef"
    class="homepage-accordion w-full overflow-hidden bg-[#f5f5f5] px-6 sm:px-10 lg:px-20"
    :class="{ 'is-visible': isAccordionSectionVisible }"
  >
    <div class="mx-auto">
      <!-- Small title -->
      <p class="accordion-kicker mb-6 text-[15px] font-medium leading-none text-black lg:text-[16px]">
        Our Global Reach
      </p>

      <!-- Main heading -->
      <h2
        class="accordion-heading max-w-[720px] text-[34px] font-semibold leading-[1.16] tracking-[-1.4px] text-black sm:text-[44px] lg:text-[52px]"
      >
        Innovating where it counts.<br />
        Scaling what matters.
      </h2>

      <!-- Accordion wrapper -->
      <div class="accordion-list mt-14 overflow-hidden border-t border-[#dedede] lg:mt-20">
        <div
          v-for="(region, regionIndex) in reachRegions"
          :key="region.name"
          class="accordion-item group border-b border-[#dedede] transition-colors duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-white/45"
          :class="isRegionOpen(region.name) ? 'pb-10 lg:pb-14' : ''"
          :style="{ '--accordion-item-index': regionIndex }"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between px-0 py-7 text-left transition-[padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:py-9"
            :class="isRegionOpen(region.name) ? 'pb-0' : ''"
            :aria-label="`${isRegionOpen(region.name) ? 'Collapse' : 'Expand'} ${region.name}`"
            :aria-expanded="isRegionOpen(region.name)"
            @click="toggleRegion(region.name)"
          >
            <h3
              class="pl-3 text-[18px] leading-none text-black transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] sm:pl-4 lg:text-[22px]"
              :class="isRegionOpen(region.name) ? 'font-semibold' : 'font-medium'"
            >
              {{ region.name }}
            </h3>

            <span
              class="mr-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#c7cccf] bg-[#f7f7f7] text-[#9da4a8] shadow-[0_1px_0_rgba(255,255,255,.85)] transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:border-[#8f979b] group-hover:bg-white group-hover:text-[#596266] sm:mr-4 lg:h-8 lg:w-8"
            >
              <span
                class="relative block h-[11px] w-[11px] transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:h-3 lg:w-3"
                :class="isRegionOpen(region.name) ? 'rotate-180' : 'rotate-0'"
                aria-hidden="true"
              >
                <span class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                <span
                  class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  :class="isRegionOpen(region.name) ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'"
                />
              </span>
            </span>
          </button>

          <div
            class="grid overflow-hidden transition-[grid-template-rows,opacity,transform,margin] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
            :class="isRegionOpen(region.name) ? 'mt-9 grid-rows-[1fr] translate-y-0 opacity-100 lg:mt-11' : 'mt-0 grid-rows-[0fr] -translate-y-2 opacity-0'"
          >
            <div class="overflow-hidden">
              <div
                v-if="region.countries.length"
                class="grid grid-cols-2 gap-x-8 gap-y-6 pl-3 pr-4 sm:pl-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-5"
              >
                <div
                  v-for="(country, countryIndex) in region.countries"
                  :key="country.name"
                  class="flex min-w-0 items-center gap-3 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:gap-4"
                  :class="isRegionOpen(region.name) ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
                  :style="{ transitionDelay: isRegionOpen(region.name) ? `${countryIndex * 55}ms` : '0ms' }"
                >
                  <img
                    :src="country.flag"
                    :alt="`${country.name} flag`"
                    class="h-[18px] w-[26px] shrink-0 object-cover shadow-[0_1px_2px_rgba(0,0,0,.12)] lg:h-[22px] lg:w-[32px]"
                  />
                  <span class="truncate text-[12px] font-medium leading-none text-black lg:text-[14px]">
                    {{ country.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- last -->
   <section
    ref="lastSectionRef"
    class="homepage-last-cta w-full overflow-hidden bg-[#f7f7f7]"
    :class="{ 'is-visible': isLastSectionVisible }"
  >
    <div
      class="mx-auto flex min-h-[420px] max-w-[1440px] flex-col items-center justify-center px-6 py-20 lg:py-28 text-center sm:px-10 lg:min-h-[520px]"
    >
      <h2
        class="last-cta-heading max-w-[760px] text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-black sm:text-[48px] md:text-[58px] lg:text-[64px]"
      >
        Partner with Africa's<br class="hidden sm:block" />
        infrastructure market builder
      </h2>

      <p
        class="last-cta-copy mt-8 max-w-[640px] text-[14px] leading-[1.65] text-[#00283f] sm:text-[15px] md:mt-10 md:text-[16px]"
      >
        Whether you are an asset developer, institutional investor, development
        finance institution, fund manager, infrastructure company or strategic
        partner, INFRAGORA provides a platform for unlocking value and mobilising
        capital across Africa’s infrastructure market.
      </p>

      <NuxtLink
        to="/contact-us"
        class="last-cta-action mt-10 inline-flex h-[54px] items-center justify-center gap-5 bg-[#12cfa3] px-8 text-[11px] font-bold uppercase tracking-[-0.2px] text-black transition duration-300 hover:bg-[#0fbf96] sm:h-[58px] sm:px-10"
      >
        Partner with us
        <img
          :src="arrowOutwardIcon"
          alt=""
          class="h-5 w-5 object-contain"
        />
      </NuxtLink>
    </div>
  </section>
  
</template>
<script setup>
import ribbonImage from "~/assets/images/home/ribbon.jpg"
import newsImage from "~/assets/images/news.jpg"
import arrowOutwardIcon from "~/assets/images/icon/arrow_outward.png"
import heroCardOne from "~/assets/images/home/corasel1.jpg"
import heroCardTwo from "~/assets/images/home/corasel2.jpg"
import heroCardThree from "~/assets/images/home/corasel3.jpg"
import heroCardFour from "~/assets/images/home/corasel4.jpg"
import heroCardFive from "~/assets/images/home/corasel5.jpg"
import KnowledgeHub from '~/components/KnowledgeHub.vue'
import mauritiusFlag from '~/assets/images/flags/african/mauritius.png'
import southAfricaFlag from '~/assets/images/flags/african/south-africa.png'
import kenyaFlag from '~/assets/images/flags/african/ke.png'
import nigeriaFlag from '~/assets/images/flags/african/nigeria.png'
import coteDivoireFlag from '~/assets/images/flags/african/cotr dlvoire.png'

useHead({
  title: 'INFRAGORA Global Capital | Africa Infrastructure Secondary Market Platform',
  meta: [
    {
      name: 'description',
      content:
        'INFRAGORA Global Capital is an African-led infrastructure investment platform creating structured exit, liquidity and secondary market solutions for African infrastructure assets.',
    },
       {
      name: 'keywords',
      content:
        'Africa infrastructure secondary market, infrastructure investment Africa, structured exits Africa, capital recycling, African infrastructure assets',
    },
  ],
})

const heroCarouselCards = [
  {
    id: 1,
    category: 'Private Credit',
    title: 'A New Exit Window for African Infrastructure',
    image: heroCardOne,
    to: '/our-capabilities/instruments/private-credit',
  },
  {
    id: 2,
    category: 'Private Credit',
    title: 'A New Exit Window for African Infrastructure',
    image: heroCardTwo,
    to: '/our-capabilities/instruments/private-credit',
  },
  {
    id: 3,
    category: 'Public Investment',
    title: 'A New Exit Window for African Infrastructure',
    image: heroCardThree,
    to: '/our-capabilities/investment/public-investment',
  },
  {
    id: 4,
    category: 'News',
    title: 'A New Exit Window for African Infrastructure',
    image: heroCardFour,
    to: '/news',
  },
  {
    id: 5,
    category: 'Fund Management',
    title: 'A New Exit Window for African Infrastructure',
    image: heroCardFive,
    to: '/fund-management',
  },
]

const openReachRegion = ref('Africa')

const reachRegions = [
  {
    name: 'Africa',
    countries: [
      { name: 'Mauritius', flag: mauritiusFlag },
      { name: 'South Africa', flag: southAfricaFlag },
      { name: 'Kenya', flag: kenyaFlag },
      { name: 'Nigeria', flag: nigeriaFlag },
      { name: "C\u00f4te d'Ivoire", flag: coteDivoireFlag },
    ],
  },
  {
    name: 'UK & USA',
    countries: [],
  },
]

const isRegionOpen = (name) => openReachRegion.value === name

const toggleRegion = (name) => {
  openReachRegion.value = isRegionOpen(name) ? '' : name
}

const marketBenefits = [
  {
    number: '01',
    text: 'Stimulate capital recycling for existing investors and developers',
  },
  {
    number: '02',
    text: 'Unlock capital tied up in operating infrastructure projects',
  },
  {
    number: '03',
    text: "Improve liquidity in Africa’s traditionally illiquid infrastructure market",
  },
  {
    number: '04',
    text: 'Attract regional and global institutional investors',
  },
  {
    number: '05',
    text: 'Support the development of diversified asset-backed securities',
  },
  {
    number: '06',
    text: 'Deepen capital formation across African markets',
  },
  {
    number: '07',
    text: 'Grow infrastructure into a more visible and investable asset class',
  },
]

const focusAreas = [
  {
    id: 1,
    title: 'Green and renewable energy',
    text:
      'independent power projects, renewable energy, green hydrogen, solar, wind, hydro, geothermal, biomass, energy storage, transmission and distribution infrastructure.',
    background:
      'linear-gradient(180deg, #1ec7a7 0%, #8adfd2 55%, #ffffff 100%)',
    titleMaxWidth: 'max-w-[230px]',
    titleClass: '',
  },
  {
    id: 2,
    title: 'Broadband and ICT infrastructure',
    text:
      'data centres, fibre networks, telecom infrastructure, mobile broadband, submarine cables, landing stations, spectrum-related infrastructure and green ICT solutions.',
    background:
      'linear-gradient(180deg, #f7ef00 0%, #fbf97b 55%, #ffffff 100%)',
    titleMaxWidth: 'max-w-[285px]',
    titleClass: '',
  },
  {
    id: 3,
    title: 'Sustainable transport',
    text:
      'urban mobility, logistics corridors, rail, ports, airports, toll roads, green transport and electric vehicle infrastructure.',
    background:
      'linear-gradient(180deg, #174f5f 0%, #8faeb4 60%, #ffffff 100%)',
    titleMaxWidth: 'max-w-[270px]',
    titleClass: 'text-white',
  },
  {
    id: 4,
    title: 'Sustainable water',
    text:
      'urban water supply, sanitation, wastewater treatment, irrigation systems and climate resilient infrastructure.',
    background:
      'linear-gradient(180deg, #8ec6d3 0%, #dff4f8 60%, #ffffff 100%)',
    titleMaxWidth: 'max-w-[270px]',
    titleClass: '',
  },
]

const focusCarouselIndex = ref(0)

const focusCarouselAreas = computed(() =>
  [...focusAreas, ...focusAreas].map((area, index) => ({
    ...area,
    carouselId: `${area.id}-${index}`,
  }))
)

const showNextFocusArea = () => {
  focusCarouselIndex.value =
    focusCarouselIndex.value >= focusAreas.length - 1
      ? 0
      : focusCarouselIndex.value + 1
}

const showPreviousFocusArea = () => {
  focusCarouselIndex.value =
    focusCarouselIndex.value <= 0
      ? focusAreas.length - 1
      : focusCarouselIndex.value - 1
}

const posts = [
  {
    id: 1,
    title: "Infragora Launches Afridata in Nigeria",
    image: newsImage
  },
  {
    id: 2,
    title: "Infragora Launches Afridata in Nigeria",
    image: newsImage
  },
  {
    id: 3,
    title: "Infragora Launches Afridata in Nigeria",
    image: newsImage
  },
  {
    id: 4,
    title: "Infragora Launches Afridata in Nigeria",
    image: newsImage    
  }
]

const newsCarouselIndex = ref(0)
const route = useRoute()
const homeHeroRef = ref(null)
const isHomeIntroVisible = ref(false)
const isSecondSectionVisible = ref(false)
const secondSectionRef = ref(null)
const isBenefitsSectionVisible = ref(false)
const benefitsSectionRef = ref(null)
const isWhatWeDoSectionVisible = ref(false)
const whatWeDoSectionRef = ref(null)
const isFocusAreasSectionVisible = ref(false)
const focusAreasSectionRef = ref(null)
const isFocusAreasFeatureVisible = ref(false)
const focusAreasFeatureRef = ref(null)
const isNewsSectionVisible = ref(false)
const newsSectionRef = ref(null)
const isAccordionSectionVisible = ref(false)
const accordionSectionRef = ref(null)
const isLastSectionVisible = ref(false)
const lastSectionRef = ref(null)

let secondSectionObserver = null
let benefitsSectionObserver = null
let whatWeDoSectionObserver = null
let focusAreasSectionObserver = null
let focusAreasFeatureObserver = null
let newsSectionObserver = null
let accordionSectionObserver = null
let lastSectionObserver = null
let homeIntroAnimationFrame = 0

const playHomeIntroAnimation = async () => {
  isHomeIntroVisible.value = false

  if (homeIntroAnimationFrame) {
    cancelAnimationFrame(homeIntroAnimationFrame)
    homeIntroAnimationFrame = 0
  }

  await nextTick()

  homeIntroAnimationFrame = requestAnimationFrame(() => {
    homeIntroAnimationFrame = requestAnimationFrame(() => {
      isHomeIntroVisible.value = true
      homeIntroAnimationFrame = 0
    })
  })
}

onMounted(() => {
  playHomeIntroAnimation()

  const supportsIntersectionObserver = 'IntersectionObserver' in window

  if (!supportsIntersectionObserver) {
    isSecondSectionVisible.value = true
    isBenefitsSectionVisible.value = true
    isWhatWeDoSectionVisible.value = true
    isFocusAreasSectionVisible.value = true
    isFocusAreasFeatureVisible.value = true
    isNewsSectionVisible.value = true
    isAccordionSectionVisible.value = true
    isLastSectionVisible.value = true
    return
  }

  if (secondSectionRef.value) {
    secondSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isSecondSectionVisible.value = true
        secondSectionObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    secondSectionObserver.observe(secondSectionRef.value)
  } else {
    isSecondSectionVisible.value = true
  }

  if (!benefitsSectionRef.value) {
    isBenefitsSectionVisible.value = true
  } else {
    benefitsSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isBenefitsSectionVisible.value = true
        benefitsSectionObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    benefitsSectionObserver.observe(benefitsSectionRef.value)
  }

  if (!whatWeDoSectionRef.value) {
    isWhatWeDoSectionVisible.value = true
  } else {
    whatWeDoSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isWhatWeDoSectionVisible.value = true
        whatWeDoSectionObserver?.disconnect()
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    whatWeDoSectionObserver.observe(whatWeDoSectionRef.value)
  }

  if (!focusAreasSectionRef.value) {
    isFocusAreasSectionVisible.value = true
  } else {
    focusAreasSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isFocusAreasSectionVisible.value = true
        focusAreasSectionObserver?.disconnect()
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    focusAreasSectionObserver.observe(focusAreasSectionRef.value)
  }

  if (!focusAreasFeatureRef.value) {
    isFocusAreasFeatureVisible.value = true
  } else {
    focusAreasFeatureObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isFocusAreasFeatureVisible.value = true
        focusAreasFeatureObserver?.disconnect()
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -16% 0px',
      }
    )

    focusAreasFeatureObserver.observe(focusAreasFeatureRef.value)
  }

  if (!newsSectionRef.value) {
    isNewsSectionVisible.value = true
  } else {
    newsSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isNewsSectionVisible.value = true
        newsSectionObserver?.disconnect()
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    newsSectionObserver.observe(newsSectionRef.value)
  }

  if (!accordionSectionRef.value) {
    isAccordionSectionVisible.value = true
  } else {
    accordionSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isAccordionSectionVisible.value = true
        accordionSectionObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    accordionSectionObserver.observe(accordionSectionRef.value)
  }

  if (!lastSectionRef.value) {
    isLastSectionVisible.value = true
  } else {
    lastSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isLastSectionVisible.value = true
        lastSectionObserver?.disconnect()
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    lastSectionObserver.observe(lastSectionRef.value)
  }
})

onUnmounted(() => {
  if (homeIntroAnimationFrame) {
    cancelAnimationFrame(homeIntroAnimationFrame)
  }

  secondSectionObserver?.disconnect()
  benefitsSectionObserver?.disconnect()
  whatWeDoSectionObserver?.disconnect()
  focusAreasSectionObserver?.disconnect()
  focusAreasFeatureObserver?.disconnect()
  newsSectionObserver?.disconnect()
  accordionSectionObserver?.disconnect()
  lastSectionObserver?.disconnect()
})

watch(
  () => route.fullPath,
  () => {
    if (route.path === '/') {
      playHomeIntroAnimation()
    }
  },
  { flush: 'post' },
)

const newsCarouselPosts = computed(() =>
  [...posts, ...posts].map((post, index) => ({
    ...post,
    carouselId: `${post.id}-${index}`,
  }))
)

const showNextNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value >= posts.length - 1
      ? 0
      : newsCarouselIndex.value + 1
}

const showPreviousNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value <= 0
      ? posts.length - 1
      : newsCarouselIndex.value - 1
}
</script>

<style scoped>
.hero-intro-title,
.hero-intro-strip {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  transition:
    opacity 760ms ease,
    transform 760ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.hero-intro-actions {
  perspective: 900px;
}

.hero-intro-button {
  opacity: 0;
  transform: translate3d(0, 24px, 0) scale(.965);
  filter: blur(10px);
  box-shadow: 0 18px 44px rgb(0 0 0 / 0);
  transition:
    opacity 780ms cubic-bezier(.16, 1, .3, 1),
    transform 880ms cubic-bezier(.16, 1, .3, 1),
    filter 780ms cubic-bezier(.16, 1, .3, 1),
    box-shadow 880ms ease,
    background-color 260ms ease;
  transition-delay: var(--hero-button-delay, 120ms);
  will-change: opacity, transform, filter;
}

.hero-button-icon {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 12px;
  height: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translate3d(-6px, 6px, 0) scale(.86);
  transition:
    opacity 520ms ease,
    transform 680ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--hero-button-delay, 120ms) + 170ms);
  will-change: opacity, transform;
}

.hero-button-icon img {
  grid-area: 1 / 1;
  display: block;
  filter: none;
  transform-origin: center;
  transition:
    opacity 520ms ease,
    transform 720ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 0ms;
  will-change: opacity, transform;
}

.hero-button-icon-light {
  filter: brightness(0) invert(1);
}

.hero-button-icon-hover {
  opacity: 0;
  transform: translate3d(-7px, 7px, 0) rotate(-8deg);
}

.homepage-hero.is-visible .hero-intro-button {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
  box-shadow: 0 20px 52px rgb(0 32 46 / 0.2);
}

.homepage-hero.is-visible .hero-button-icon {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.hero-intro-strip {
  transform: translate3d(0, 24px, 0) scale(.99);
  transition-delay: 330ms;
}

.homepage-hero.is-visible .hero-intro-title,
.homepage-hero.is-visible .hero-intro-strip {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.homepage-hero.is-visible .hero-intro-button:hover {
  transform: translate3d(0, -2px, 0) scale(1.015);
  box-shadow: 0 24px 60px rgb(0 32 46 / 0.28);
}

.homepage-hero.is-visible .hero-intro-button:hover .hero-button-icon,
.homepage-hero.is-visible .hero-intro-button:focus-visible .hero-button-icon {
  transform: translate3d(2px, -2px, 0) scale(1.08);
}

.homepage-hero.is-visible .hero-intro-button:hover .hero-button-icon-base,
.homepage-hero.is-visible .hero-intro-button:focus-visible .hero-button-icon-base {
  opacity: 0;
  transform: translate3d(7px, -7px, 0) rotate(8deg);
}

.homepage-hero.is-visible .hero-intro-button:hover .hero-button-icon-hover,
.homepage-hero.is-visible .hero-intro-button:focus-visible .hero-button-icon-hover {
  opacity: 1;
  transform: translate3d(0, 0, 0) rotate(0deg);
}

.second-section-intro-title,
.second-section-intro-copy,
.second-section-benefit-heading {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  transition:
    opacity 760ms ease,
    transform 760ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: var(--second-section-delay, 0ms);
  will-change: opacity, transform;
}

.second-section-intro-copy {
  --second-section-delay: 120ms;
}

.second-section-benefit-heading {
  --second-section-delay: 180ms;
  filter: blur(8px);
  transform: translate3d(0, 38px, 0);
  transition:
    opacity 840ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 840ms ease;
}

.second-section-card {
  opacity: 0;
  filter: blur(10px);
  transform: translate3d(0, 48px, 0) scale(.975);
  transform-origin: center bottom;
  box-shadow: 0 26px 60px rgb(0 63 80 / 0);
  transition:
    opacity 840ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 840ms ease,
    box-shadow 980ms ease,
    background-color 980ms ease;
  transition-delay: var(--second-section-delay, 0ms);
  will-change: opacity, transform, filter;
}

.benefit-card-number {
  display: inline-block;
  transform: translate3d(-10px, 0, 0) scale(.94);
  transition:
    color 900ms ease,
    transform 920ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--second-section-delay, 0ms) + 110ms);
  will-change: transform;
}

.benefit-card-text {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--second-section-delay, 0ms) + 150ms);
  will-change: opacity, transform;
}

.homepage-second-section.is-visible .second-section-intro-title,
.homepage-second-section.is-visible .second-section-intro-copy {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.homepage-benefits-section.is-visible .second-section-benefit-heading,
.homepage-benefits-section.is-visible .second-section-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.homepage-benefits-section.is-visible .second-section-card {
  background-color: #f2f2f2;
  box-shadow: 0 26px 60px rgb(0 63 80 / 0.08);
}

.homepage-benefits-section.is-visible .benefit-card-number,
.homepage-benefits-section.is-visible .benefit-card-text {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.what-we-do-tile,
.what-we-do-feature {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 780ms ease,
    transform 780ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: var(--what-we-do-delay, 0ms);
  will-change: opacity, transform;
}

.what-we-do-feature {
  transform: translate3d(0, 34px, 0) scale(.985);
}

.homepage-what-we-do.is-visible .what-we-do-tile,
.homepage-what-we-do.is-visible .what-we-do-feature {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.focus-areas-heading,
.focus-areas-controls,
.focus-areas-carousel,
.focus-areas-feature {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 780ms ease,
    transform 780ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.focus-areas-controls {
  transition-delay: 90ms;
}

.focus-areas-carousel {
  transition-delay: 170ms;
}

.focus-areas-feature {
  transform: translate3d(0, 38px, 0) scale(.985);
  transition-delay: 260ms;
}

.homepage-focus-areas.is-visible .focus-areas-heading,
.homepage-focus-areas.is-visible .focus-areas-controls,
.homepage-focus-areas.is-visible .focus-areas-carousel,
.focus-areas-feature.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.news-heading,
.news-controls,
.news-cards-viewport,
.news-card {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.news-controls {
  transition-delay: 80ms;
}

.news-cards-viewport {
  transform: translate3d(0, 42px, 0);
  transition-delay: 140ms;
}

.news-card {
  transform: translate3d(0, 48px, 0) scale(.97);
  transition-delay: var(--news-card-delay, 0ms);
}

.homepage-news.is-visible .news-heading,
.homepage-news.is-visible .news-controls,
.homepage-news.is-visible .news-cards-viewport,
.homepage-news.is-visible .news-card {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.accordion-kicker,
.accordion-heading,
.accordion-list,
.accordion-item {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
  transition:
    opacity 780ms ease,
    transform 780ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.accordion-heading {
  transition-delay: 90ms;
}

.accordion-list {
  transform: translate3d(0, 38px, 0);
  transition-delay: 180ms;
}

.accordion-item {
  transform: translate3d(0, 24px, 0);
  transition-delay: calc(260ms + (var(--accordion-item-index, 0) * 80ms));
}

.homepage-accordion.is-visible .accordion-kicker,
.homepage-accordion.is-visible .accordion-heading,
.homepage-accordion.is-visible .accordion-list,
.homepage-accordion.is-visible .accordion-item {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.last-cta-heading,
.last-cta-copy,
.last-cta-action {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.last-cta-heading {
  transform: translate3d(0, 42px, 0) scale(.985);
}

.last-cta-copy {
  transition-delay: 120ms;
}

.last-cta-action {
  transform: translate3d(0, 28px, 0) scale(.96);
  transition-delay: 240ms;
}

.homepage-last-cta.is-visible .last-cta-heading,
.homepage-last-cta.is-visible .last-cta-copy,
.homepage-last-cta.is-visible .last-cta-action {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.hero-image-strip-viewport {
  align-self: stretch;
  margin-inline: calc(50% - 50vw);
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 6vw,
    #000 calc(100% - 6vw),
    transparent 100%
  );
}

.hero-image-strip {
  --hero-card-gap: 0.75rem;
  display: flex;
  width: max-content;
  gap: var(--hero-card-gap);
  animation: hero-card-marquee 46s linear infinite;
  will-change: transform;
}

.hero-image-strip:hover {
  animation-play-state: paused;
}

.hero-image-strip-set {
  display: flex;
  gap: var(--hero-card-gap);
}

.hero-image-card {
  width: 44vw;
  min-width: 150px;
  max-width: 210px;
  flex-shrink: 0;
}

@keyframes hero-card-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(calc(-50% - (var(--hero-card-gap) / 2)), 0, 0);
  }
}

@media (min-width: 640px) {
  .hero-image-strip {
    --hero-card-gap: 1rem;
  }

  .hero-image-card {
    width: 28vw;
    max-width: 260px;
  }
}

@media (min-width: 768px) {
  .hero-image-strip {
    --hero-card-gap: 1.25rem;
  }

  .hero-image-card {
    width: 240px;
    max-width: none;
  }
}

@media (min-width: 1024px) {
  .hero-image-strip {
    --hero-card-gap: 1.5rem;
    animation-duration: 56s;
  }

  .hero-image-card {
    width: clamp(280px, 21vw, 340px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-intro-title,
  .hero-intro-actions,
  .hero-intro-button,
  .hero-button-icon,
  .hero-button-icon img,
  .hero-intro-strip,
  .second-section-intro-title,
  .second-section-intro-copy,
  .second-section-benefit-heading,
  .second-section-card,
  .benefit-card-number,
  .benefit-card-text,
  .what-we-do-tile,
  .what-we-do-feature,
  .focus-areas-heading,
  .focus-areas-controls,
  .focus-areas-carousel,
  .focus-areas-feature,
  .news-heading,
  .news-controls,
  .news-cards-viewport,
  .news-card,
  .accordion-kicker,
  .accordion-heading,
  .accordion-list,
  .accordion-item,
  .last-cta-heading,
  .last-cta-copy,
  .last-cta-action {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: none;
  }

  .hero-image-strip {
    animation: none;
  }
}
</style>

