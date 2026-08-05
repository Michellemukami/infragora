<template>
  <!-- Hero Section -->
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
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-base hero-button-icon-light brightness-0 invert  h-3 w-3 object-contain" />
              <img :src="arrowOutwardIcon" alt="" class="hero-button-icon-hover hero-button-icon-light brightness-0 invert h-3 w-3 object-contain" />
            </span>
          </NuxtLink>
        </div>

       <div class="hero-intro-strip hero-strip-shell relative mt-[54px] self-stretch sm:mt-16 lg:mt-[74px]">
  <div class="hero-carousel-controls" aria-label="Hero carousel controls">
    <button
      type="button"
      class="hero-carousel-button"
      aria-label="Show previous hero card"
      @click="moveHeroCarousel(-1)"
    >
      <span aria-hidden="true">&lsaquo;</span>
    </button>

    <button
      type="button"
      class="hero-carousel-button"
      aria-label="Show next hero card"
      @click="moveHeroCarousel(1)"
    >
      <span aria-hidden="true">&rsaquo;</span>
    </button>
  </div>

  <div
    class="hero-image-strip-viewport overflow-hidden"
    @mouseenter="isHeroCarouselPaused = true"
    @mouseleave="isHeroCarouselPaused = false"
  >
  <div
    ref="heroImageStripRef"
    class="hero-image-strip pb-8 sm:pb-10 md:pb-12 lg:pb-14"
    :class="{ 'is-paused': isHeroCarouselPaused }"
    :style="{ '--hero-carousel-offset': `${heroCarouselOffset}px` }"
  >
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
            class="h-[240px] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:h-[455px]"
          />
        </span>

        <div class="mt-3">
          <p class="text-[10px] font-medium leading-none text-[#15c8aa] sm:text-[11px] lg:text-[12px]">
            {{ card.category }}
          </p>

          <div class="mt-2 flex items-start justify-between gap-4">
            <h2
              class="max-w-[78%] text-[13px] font-medium leading-[1.22] tracking-[-0.025em] text-white sm:max-w-[80%] sm:text-[15px] lg:text-[17px]"
            >
              {{ card.title }}
            </h2>

            <img
              :src="arrowOutwardIcon"
              alt=""
              class="mt-1 h-3 w-3 shrink-0 object-contain brightness-0 invert transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
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
    <NumberCard
      title="A New Exit Market for African Infrastructure"
      :items="marketBenefitCards"
      section-class="homepage-benefits-section bg-[#fbfbfb]"
      container-class="max-w-[1600px] px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 xl:px-20"
      title-class="max-w-[620px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] text-[#0a5264] sm:text-[34px] lg:text-[40px]"
      grid-class="lg:gap-x-20 xl:gap-x-24"
      number-class="text-[#f6b800]"
      label-class="max-w-[620px]"
    />
  </section>
<!-- What We Do Section -->
  <section
    ref="whatWeDoSectionRef"
    class="homepage-what-we-do overflow-hidden bg-white"
    :class="{ 'is-visible': isWhatWeDoSectionVisible }"
  >
    <div class="mx-auto ">
      <div class="grid lg:grid-cols-2">
        <!-- LEFT SIDE What We Do Section-->
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <!-- Advisory -->
          <article
            class="what-we-do-tile bg-[#0d5563] px-8 py-8 md:px-10 md:py-10 lg:h-[330px] lg:pl-20 lg:pr-12"
            style="--what-we-do-delay: 0ms"
          >
            <h3
              class="text-[28px] font-medium leading-none text-white"
            >
              Advisory
            </h3>

            <p
              class="mt-16 max-w-[285px] text-[15px] leading-[1.7] text-white/90"
            >
              Project development, transaction structuring, capital raising, market access, valuation analysis, ESG strategy and impact assessment and investor readiness.

Executed by INFRAGORA Advisory

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
              class="mt-16 max-w-[285px] text-[15px] leading-[1.7] text-white/90"
            >
              Greenfield especially selected late-stage and operating/brownfield with growth upside infrastructure assets
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
              class="mt-16 max-w-[285px] text-[15px] leading-[1.7] text-[#16354b]"
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
              class="mt-16 max-w-[285px] text-[15px] leading-[1.7] text-[#16354b]"
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
            src="/assets/images/bridge.webp"
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
  ref="portfolioFocusRef"
  class="portfolio-focus-section overflow-hidden bg-[#f5f5f5]"
  :class="{ 'is-visible': isPortfolioFocusVisible }"
>
  <div class="mx-auto pl-6 sm:pl-10 lg:pl-20 py-14 sm:py-20 lg:py-20    ">

    <!-- Header -->
    <div class="portfolio-focus-header mb-12 flex items-end justify-between pr-6 sm:pr-10 lg:pr-20">
      <h2
        class="text-[34px] leading-[0.95] font-medium tracking-[-0.04em] lg:text-[42px]"
      >
        
        Focus Areas
      </h2>

      <div class="portfolio-focus-controls flex gap-3">
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
    <div class="portfolio-focus-viewport overflow-hidden pb-4">
      <div
        class="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        :style="{ transform: `translateX(calc(-${newsCarouselIndex} * (min(82vw, 380px) + 1.5rem)))` }"
      >
        <!-- Card -->
        <article
          v-for="(post, postIndex) in newsCarouselPosts"
          :key="post.carouselId"
          class="portfolio-focus-card group w-[min(82vw,380px)] flex-shrink-0 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.09)]"
          :style="{ '--portfolio-focus-delay': `${140 + (postIndex % posts.length) * 90}ms` }"
        >
          <div class="relative overflow-hidden bg-white">

            <!-- Image -->
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-[420px] w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] sm:h-[460px]"
              />
            </div>

            <!-- Bottom Fade -->
            <div
              class="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-white via-white/85 to-transparent transition duration-500 group-hover:via-white/90"
            />

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-5 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5">
              <h3 class="max-w-[260px] text-[20px] font-medium leading-[1.05]">
                {{ post.title }}
              </h3>

              <div class="mt-5 flex items-center gap-4">
                <!-- <span class="text-[12px] tracking-wide">
                  Read More
                </span> -->

                <!-- <svg
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
                </svg> -->
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>

    <div
      ref="focusAreasFeatureRef"
      class="portfolio-image-cover-section relative mr-6 mt-14 min-h-[360px] overflow-hidden bg-[#002d49] bg-cover bg-no-repeat sm:mt-20 sm:min-h-[340px] md:mr-10 md:mt-24 md:min-h-[390px] lg:min-h-[450px] xl:mr-20"
      :class="{ 'is-visible': isFocusAreasFeatureVisible }"
      :style="{ backgroundImage: `url(${ribbonImage})` }"
    >
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,#002d49_0%,rgba(0,45,73,.94)_40%,rgba(0,45,73,.72)_72%,rgba(0,45,73,.18)_100%)] sm:bg-[linear-gradient(90deg,#002d49_0%,#002d49_34%,rgba(0,45,73,.96)_45%,rgba(0,45,73,.68)_62%,rgba(0,45,73,.2)_82%,rgba(0,45,73,0)_100%)] md:bg-[linear-gradient(90deg,#002d49_0%,#002d49_32%,rgba(0,45,73,.94)_43%,rgba(0,45,73,.62)_60%,rgba(0,45,73,.18)_80%,rgba(0,45,73,0)_100%)]"
      />

      <div class="relative flex min-h-[360px] items-center px-5 py-10 sm:min-h-[340px] sm:px-8 sm:py-12 md:min-h-[390px] md:px-14 lg:min-h-[450px] lg:px-16">
        <div class="portfolio-image-cover-content max-w-[440px]">
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
<!-- <section
  ref="newsSectionRef"
  class="homepage-news overflow-hidden bg-[#f5f5f5]"
  :class="{ 'is-visible': isNewsSectionVisible }"
>
  <div class="mx-auto pl-6 sm:pl-10 lg:pl-20 pb-10 md:pb-20">

   
    <div class="mb-12 pr-6 sm:pr-10 lg:pr-20">
      <h2
        class="news-heading text-[34px] leading-[0.95] font-medium tracking-[-0.04em] lg:text-[42px]"
      >
        News <br />
        & Insights
      </h2>
    </div>


    <div class="news-cards-viewport pb-4 pr-6 sm:pr-10 lg:pr-20">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
      
        <article
          v-for="(post, postIndex) in posts.slice(0, 3)"
          :key="post.id"
          class="news-card group min-w-0 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.09)]"
          :style="{ '--news-card-delay': `${160 + (postIndex % posts.length) * 85}ms` }"
        >
          <div class="relative overflow-hidden bg-white">

         
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-[420px] w-full object-cover transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] sm:h-[460px]"
              />
            </div>

          
            <div
              class="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-white via-white/85 to-transparent transition duration-500 group-hover:via-white/90"
            />

          
            <div class="absolute bottom-0 left-0 right-0 p-5 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5">
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
</section>  -->
<!-- <section
  ref="partnersSectionRef"
  class="homepage-partners bg-[#f5f5f5] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
  :class="{ 'is-visible': isPartnersSectionVisible }"
>
  <div class="mx-auto max-w-[1440px]">
    <h2 class="partners-heading mb-12 text-center text-[28px] font-semibold leading-none tracking-[-0.01em] text-black sm:text-[34px] lg:mb-16 lg:text-[42px]">
      Partners & Allies
    </h2>

    <div class="grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-14 lg:gap-y-14">
      <div
        v-for="partner in partnerLogos"
        :key="partner.name"
        class="partner-logo flex h-16 items-center justify-center sm:h-20 lg:h-24"
      >
        <img
          :src="partner.logo"
          :alt="partner.name"
          class="max-h-9 max-w-[120px] object-contain sm:max-h-10 sm:max-w-[140px] lg:max-h-12 lg:max-w-[160px]"
        />
      </div>
    </div>
  </div>
</section> -->

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
        Our Global Reach & Presence
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
import ribbonImage from "~/assets/images/home/ribbon.webp"
import newsImage from "~/assets/images/news.jpg"
import arrowOutwardIcon from "~/assets/images/icon/arrow_outward.png"
import heroCardOne from "~/assets/images/home/corasel1.jpg"
import heroCardTwo from "~/assets/images/home/corasel2.jpg"
import heroCardThree from "~/assets/images/home/corasel3.jpg"
import heroCardFour from "~/assets/images/home/corasel4.jpg"
import heroCardFive from "~/assets/images/home/corasel5.jpg"
import heroCardSix from "~/assets/images/capabilities/fund.png"
import KnowledgeHub from '~/components/KnowledgeHub.vue'
import SustainabilityReportFeature from '~/components/SustainabilityReportFeature.vue'
import NumberCard from './common/NumberCard.vue'
import { knowledgeHubItems } from '~/data/cmsContent'
import { resolveCmsImageSrc } from '~/data/cmsImageResolver'
import mauritiusFlag from '~/assets/images/flags/african/mauritius.png'
import southAfricaFlag from '~/assets/images/flags/african/south-africa.png'
import kenyaFlag from '~/assets/images/flags/african/ke.png'
import nigeriaFlag from '~/assets/images/flags/african/nigeria.png'
import coteDivoireFlag from '~/assets/images/flags/african/cotr dlvoire.png'
import green from "~/assets/images/portfolio/green.jpg"
import ict from "~/assets/images/portfolio/ict.jpg"
import train from "~/assets/images/portfolio/train.jpg"
import water from "~/assets/images/portfolio/water.jpg"
import tunnel from "~/assets/images/portfolio/tunnel.png"
import actisLogo from "~/assets/images/home/partners/Actis.png"
import afrexiLogo from "~/assets/images/home/partners/afrexi.jpg"
import aiimLogo from "~/assets/images/home/partners/aiim.jpg"
import edfLogo from "~/assets/images/home/partners/EDF.png"
import frontierLogo from "~/assets/images/home/partners/Frontier.png"
import ifcLogo from "~/assets/images/home/partners/International_Finance_Corporation.png"
import jpMorganLogo from "~/assets/images/home/partners/J_P_Morgan.png"
import afrikLogo from "~/assets/images/home/partners/Logo_Afrikanische.png"
import moodysLogo from "~/assets/images/home/partners/moody.png"
import pathLogo from "~/assets/images/home/partners/path3213.png"
import riscuraLogo from "~/assets/images/home/partners/Riscura.png"
import serengetiLogo from "~/assets/images/home/partners/serengeti.png"
const portfolioFocusRef = ref(null)
const isPortfolioFocusVisible = ref(false)
const sustainabilityReport = knowledgeHubItems.find((item) => item.slug === 'sustainabilityreport') || knowledgeHubItems[0]
const sustainabilityReportHref = `/knowledge-hub/${sustainabilityReport.slug}`
const sustainabilityReportImage = resolveCmsImageSrc(sustainabilityReport.mainImage.src)
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
    category: 'Governance',
    title: 'Meet the team behind the vision',
    image: heroCardOne,
    to: '/governance',
  },
  {
    id: 2,
    category: 'Advisory',
    title: 'Ensuring the bankability of infrastructure assets',
    image: heroCardTwo,
    to: '/our-capabilities/advisory',
  },
  {
    id: 3,
    category: 'Investment',
    title: 'Supporting Africa\'s  economic transformation',
    image: heroCardThree,
    to: '/our-capabilities/investment',
  },
  {
    id: 4,
    category: 'Private Investment',
    title: 'Unlocking growth, expansion and value',
    image: heroCardFour,
    to: '/our-capabilities/investment/private-investment',
  },
  {
    id: 5,
    category: 'Public Investment',
    title: 'Connect African infrastructure to Regional and Global Markets ',
    image: heroCardFive,
    to: '/our-capabilities/investment/public-investment',
  },
  {
    id: 6,
    category: 'Fund Management',
    title: 'Managing infrastructure investment platforms',
    image: heroCardSix,
    to: '/fund-management',
  },
]

const partnerLogos = [
  { name: 'EDF', logo: edfLogo },
  { name: 'Frontier', logo: frontierLogo },
  { name: 'International Finance Corporation', logo: ifcLogo },
  { name: "Moody's", logo: moodysLogo },
  { name: 'PATH', logo: pathLogo },
  { name: 'Afrikanische', logo: afrikLogo },
  { name: 'J.P. Morgan', logo: jpMorganLogo },
  { name: 'Afreximbank', logo: afrexiLogo },
  { name: 'Serengeti', logo: serengetiLogo },
  { name: 'AIIM', logo: aiimLogo },
  { name: 'Actis', logo: actisLogo },
  { name: 'Riscura', logo: riscuraLogo },
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
    label: 'Stimulate capital recycling for existing investors and developers',
  },
  {
    number: '02',
    label: 'Unlock capital tied up in operating infrastructure projects',
  },
  {
    number: '03',
    text: "Improve liquidity in Africa’s historically illiquid infrastructure market",
  },
  {
    number: '04',
    label: 'Attract local, regional and global institutional investors into the African infrastructure market',
  },
  {
    number: '05',
    label: 'Support the development of novel, diversified asset-backed securities, products and instruments',
  },
  {
    number: '06',
    label: 'Deepen capital formation across African markets',
  },
  {
    number: '07',
    label: 'Grow infrastructure into a more visible and investable asset class in Africa',
  },
]

const marketBenefitCards = computed(() =>
  marketBenefits.map((item) => ({
    number: item.number,
    label:
      item.number === '03'
        ? "Improve liquidity in Africa's historically illiquid infrastructure market"
        : item.label,
  })),
)

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
    title: 'Digital Infrastructure',
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
    title: 'Water and Waste',
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
const posts2 = [
  {
    id: 1,
    title: "Green and Renewable Energy",
    image: green
  },
  {
    id: 2,
    title: "ICT and Digital Infrastructure",
    image: ict
  },
  {
    id: 3,
    title: "Sustainable Transport",
    image: train
  },
  {
    id: 4,
    title: "Water and Sanitation",
    image: water    
  }
]
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
const heroImageStripRef = ref(null)
const isHeroCarouselPaused = ref(false)
const heroCarouselOffset = ref(0)
const isHomeIntroVisible = ref(false)
const isSecondSectionVisible = ref(false)
const secondSectionRef = ref(null)
const isWhatWeDoSectionVisible = ref(false)
const whatWeDoSectionRef = ref(null)
const isFocusAreasSectionVisible = ref(false)
const focusAreasSectionRef = ref(null)
const isFocusAreasFeatureVisible = ref(false)
const focusAreasFeatureRef = ref(null)
const isNewsSectionVisible = ref(false)
const newsSectionRef = ref(null)
const isPartnersSectionVisible = ref(false)
const partnersSectionRef = ref(null)
const isAccordionSectionVisible = ref(false)
const accordionSectionRef = ref(null)
const isLastSectionVisible = ref(false)
const lastSectionRef = ref(null)

let secondSectionObserver = null
let whatWeDoSectionObserver = null
let portfolioFocusObserver = null
let focusAreasSectionObserver = null
let focusAreasFeatureObserver = null
let newsSectionObserver = null
let partnersSectionObserver = null
let accordionSectionObserver = null
let lastSectionObserver = null
let homeIntroAnimationFrame = 0
let heroCarouselResumeTimeout = 0

const getHeroCarouselCycleWidth = (track) => {
  const firstSet = track?.querySelector('.hero-image-strip-set')

  if (!track || !firstSet) {
    return 0
  }

  const styles = window.getComputedStyle(track)
  const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0

  return firstSet.scrollWidth + gap
}

const normalizeHeroCarouselOffset = () => {
  const track = heroImageStripRef.value
  const cycleWidth = getHeroCarouselCycleWidth(track)

  if (!cycleWidth) {
    return
  }

  while (heroCarouselOffset.value >= cycleWidth) {
    heroCarouselOffset.value -= cycleWidth
  }

  while (heroCarouselOffset.value < 0) {
    heroCarouselOffset.value += cycleWidth
  }
}

const startHeroCarouselAutoScroll = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  isHeroCarouselPaused.value = false
  normalizeHeroCarouselOffset()
}

const pauseHeroCarouselBriefly = () => {
  isHeroCarouselPaused.value = true

  if (heroCarouselResumeTimeout) {
    window.clearTimeout(heroCarouselResumeTimeout)
  }

  heroCarouselResumeTimeout = window.setTimeout(() => {
    isHeroCarouselPaused.value = false
    heroCarouselResumeTimeout = 0
  }, 1600)
}

const moveHeroCarousel = (direction) => {
  const track = heroImageStripRef.value
  const firstCard = track?.querySelector('.hero-image-card')

  if (!track || !firstCard) {
    return
  }

  const styles = window.getComputedStyle(track)
  const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
  const step = firstCard.getBoundingClientRect().width + gap

  heroCarouselOffset.value += direction * step
  normalizeHeroCarouselOffset()
  pauseHeroCarouselBriefly()
}

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
  startHeroCarouselAutoScroll()

  const supportsIntersectionObserver = 'IntersectionObserver' in window

  if (!supportsIntersectionObserver) {
    isSecondSectionVisible.value = true
    isWhatWeDoSectionVisible.value = true
    isPortfolioFocusVisible.value = true
    isFocusAreasSectionVisible.value = true
    isFocusAreasFeatureVisible.value = true
    isNewsSectionVisible.value = true
    isPartnersSectionVisible.value = true
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

  if (!portfolioFocusRef.value) {
    isPortfolioFocusVisible.value = true
  } else {
    portfolioFocusObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isPortfolioFocusVisible.value = true
        portfolioFocusObserver?.disconnect()
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    portfolioFocusObserver.observe(portfolioFocusRef.value)
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

  if (!partnersSectionRef.value) {
    isPartnersSectionVisible.value = true
  } else {
    partnersSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        isPartnersSectionVisible.value = true
        partnersSectionObserver?.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px',
      }
    )

    partnersSectionObserver.observe(partnersSectionRef.value)
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

  if (heroCarouselResumeTimeout) {
    window.clearTimeout(heroCarouselResumeTimeout)
  }

  secondSectionObserver?.disconnect()
  whatWeDoSectionObserver?.disconnect()
  portfolioFocusObserver?.disconnect()
  focusAreasSectionObserver?.disconnect()
  focusAreasFeatureObserver?.disconnect()
  newsSectionObserver?.disconnect()
  partnersSectionObserver?.disconnect()
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
  [...posts2, ...posts2].map((post, index) => ({
    ...post,
    carouselId: `${post.id}-${index}`,
  }))
)

const showNextNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value >= posts2.length - 1
      ? 0
      : newsCarouselIndex.value + 1
}

const showPreviousNewsPost = () => {
  newsCarouselIndex.value =
    newsCarouselIndex.value <= 0
      ? posts2.length - 1
      : newsCarouselIndex.value - 1
}
</script>

<style scoped>
.portfolio-focus-header,
.portfolio-focus-controls,
.portfolio-focus-viewport,
.portfolio-focus-card {
  opacity: 0;
  will-change: opacity, transform, filter;
}

.portfolio-focus-header {
  filter: blur(8px);
  transform: translate3d(0, 36px, 0);
  transition:
    opacity 860ms ease,
    transform 980ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: 70ms;
}

.portfolio-focus-controls {
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 760ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 170ms;
}

.portfolio-focus-viewport {
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 200ms;
}

.portfolio-focus-card {
  filter: blur(10px);
  transform: translate3d(0, 54px, 0) scale(.975);
  transform-origin: center bottom;
  transition:
    opacity 860ms ease,
    transform 1040ms cubic-bezier(.16, 1, .3, 1),
    filter 860ms ease;
  transition-delay: var(--portfolio-focus-delay, 0ms);
}

.portfolio-focus-card img {
  filter: saturate(.92) contrast(.98);
  transform: scale(1.045);
  transition:
    filter 1000ms ease,
    transform 1400ms cubic-bezier(.16, 1, .3, 1);
  will-change: filter, transform;
}

.portfolio-focus-card h3,
.portfolio-focus-card span,
.portfolio-focus-card svg {
  transform: translate3d(0, 16px, 0);
  transition: transform 860ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--portfolio-focus-delay, 0ms) + 130ms);
}

.portfolio-focus-section.is-visible .portfolio-focus-header,
.portfolio-focus-section.is-visible .portfolio-focus-controls,
.portfolio-focus-section.is-visible .portfolio-focus-viewport,
.portfolio-focus-section.is-visible .portfolio-focus-card {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.portfolio-focus-section.is-visible .portfolio-focus-card img {
  filter: saturate(1) contrast(1);
  transform: scale(1);
}

.portfolio-focus-section.is-visible .portfolio-focus-card h3,
.portfolio-focus-section.is-visible .portfolio-focus-card span,
.portfolio-focus-section.is-visible .portfolio-focus-card svg {
  transform: translate3d(0, 0, 0);
}

.portfolio-image-cover-content {
  opacity: 0;
  filter: blur(8px);
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 940ms cubic-bezier(.16, 1, .3, 1),
    filter 820ms ease;
  transition-delay: 180ms;
  will-change: opacity, transform, filter;
}

.portfolio-image-cover-section.is-visible .portfolio-image-cover-content {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.partners-heading,
.partner-logo {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  transition:
    opacity 760ms ease,
    transform 860ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
}

.partner-logo {
  transform: translate3d(0, 34px, 0) scale(.96);
}

.homepage-partners.is-visible .partners-heading,
.homepage-partners.is-visible .partner-logo {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.homepage-partners.is-visible .partner-logo:nth-child(1) {
  transition-delay: 80ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(2) {
  transition-delay: 130ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(3) {
  transition-delay: 180ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(4) {
  transition-delay: 230ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(5) {
  transition-delay: 280ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(6) {
  transition-delay: 330ms;
}

.homepage-partners.is-visible .partner-logo:nth-child(n + 7) {
  transition-delay: 380ms;
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-focus-header,
  .portfolio-focus-controls,
  .portfolio-focus-viewport,
  .portfolio-focus-card,
  .portfolio-focus-card img,
  .portfolio-focus-card h3,
  .portfolio-focus-card span,
  .portfolio-focus-card svg,
  .portfolio-image-cover-content,
  .partners-heading,
  .partner-logo {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
}
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
  justify-content: center;
  text-align: center;
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
  flex: 0 0 12px;
  width: 12px;
  height: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translate3d(0, 6px, 0) scale(.86);
  transition:
    opacity 520ms ease,
    transform 680ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: calc(var(--hero-button-delay, 120ms) + 170ms);
  will-change: opacity, transform;
}

.hero-button-icon img {
  position: absolute;
  inset: 0;
  margin: auto;
  display: block;
  filter: none;
  transform-origin: center;
  transition:
    opacity 520ms ease,
    transform 720ms cubic-bezier(.16, 1, .3, 1);
  transition-delay: 0ms;
  will-change: opacity, transform;
}

.hero-button-icon img.hero-button-icon-light {
  filter: brightness(0) invert(1);
}

.hero-button-icon-hover {
  opacity: 0;
  transform: translate3d(0, 7px, 0) rotate(-8deg);
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
  transform: translate3d(0, -2px, 0) scale(1.08);
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
.second-section-intro-copy {
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

.homepage-second-section.is-visible .second-section-intro-title,
.homepage-second-section.is-visible .second-section-intro-copy {
  opacity: 1;
  transform: translate3d(0, 0, 0);
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
.news-cards-viewport,
.news-card {
  opacity: 0;
  transform: translate3d(0, 34px, 0);
  transition:
    opacity 820ms ease,
    transform 820ms cubic-bezier(.16, 1, .3, 1);
  will-change: opacity, transform;
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

.hero-strip-shell {
  align-self: stretch;
  width: 100%;
}

.hero-carousel-controls {
  position: absolute;
  left: 50%;
  top: -3.1rem;
  z-index: 3;
  display: flex;
  transform: translateX(-50%);
  gap: 0.75rem;
}

.hero-carousel-button {
  display: inline-flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(255 255 255 / 0.7);
  border-radius: 9999px;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;
}

.hero-carousel-button:hover,
.hero-carousel-button:focus-visible {
  border-color: #ffffff;
  background-color: #ffffff;
  color: #0c5c7b;
  transform: translateY(-1px);
}

.hero-image-strip-viewport {
  align-self: stretch;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-inline: clamp(0.75rem, 5vw, 5rem);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 5%,
    #000 95%,
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 5%,
    #000 95%,
    transparent 100%
  );
  scroll-behavior: auto;
  scrollbar-width: none;
}

.hero-image-strip-viewport::-webkit-scrollbar {
  display: none;
}

.hero-image-strip {
  --hero-strip-gap: clamp(0.85rem, 1.35vw, 1.45rem);
  --hero-card-width: clamp(195px, 66vw, 280px);
  --hero-carousel-offset: 0px;
  --hero-carousel-duration: 34s;
  display: flex;
  width: max-content;
  gap: 0;
  transform: translate3d(
    calc(-50% - var(--hero-carousel-offset)),
    0,
    0
  );
  animation: hero-carousel-loop var(--hero-carousel-duration) linear infinite;
  will-change: transform;
}

.hero-image-strip.is-paused {
  animation-play-state: paused;
  transition: transform 520ms cubic-bezier(.16, 1, .3, 1);
}

.hero-image-strip-set {
  display: flex;
  gap: var(--hero-strip-gap);
  flex: 0 0 auto;
  padding-right: var(--hero-strip-gap);
}

.hero-image-card {
  width: var(--hero-card-width);
  min-width: 0;
  flex: 0 0 auto;
  transform: translateZ(0);
  transition:
    opacity 320ms ease,
    transform 520ms cubic-bezier(.16, 1, .3, 1);
  will-change: transform;
}

@keyframes hero-carousel-loop {
  from {
    transform: translate3d(calc(var(--hero-carousel-offset) * -1), 0, 0);
  }

  to {
    transform: translate3d(
      calc(-50% - var(--hero-carousel-offset)),
      0,
      0
    );
  }
}

.hero-image-card span {
  background: rgb(255 255 255 / 0.08);
}

.hero-image-card img {
  display: block;
}

@media (min-width: 640px) {
  .hero-carousel-controls {
    top: -3.3rem;
  }

  .hero-image-strip {
    --hero-card-width: clamp(270px, 40vw, 380px);
  }
}

@media (min-width: 768px) {
  .hero-image-strip {
    --hero-card-width: clamp(310px, 31vw, 430px);
  }
}

@media (min-width: 1024px) {
  .hero-image-strip-viewport {
    padding-inline: clamp(1rem, 3.5vw, 4rem);
  }

  .hero-image-strip {
    --hero-card-width: clamp(330px, 25vw, 460px);
  }
}

@media (min-width: 1600px) {
  .hero-image-strip {
    --hero-card-width: 480px;
  }
}

@media (max-width: 520px) {
  .hero-intro-strip {
    margin-top: 1.5rem;
  }

  .hero-carousel-controls {
    position: static;
    left: auto;
    top: auto;
    width: 100%;
    justify-content: center;
    transform: none;
    margin-bottom: 1.5rem;
  }

  .hero-image-strip-viewport {
    padding-inline: 1rem;
    -webkit-mask-image: none;
    mask-image: none;
  }

  .hero-image-strip {
    --hero-carousel-duration: 28s;
  }

  .hero-intro-actions {
    width: 100%;
    justify-content: center;
  }

  .hero-intro-button {
    justify-content: center;
  }

  .hero-button-icon {
    margin-inline: 0;
  }

}

@media (prefers-reduced-motion: reduce) {
  .hero-intro-title,
  .hero-intro-actions,
  .hero-intro-button,
  .hero-button-icon,
  .hero-button-icon img,
  .hero-intro-strip,
  .hero-image-strip,
  .second-section-intro-title,
  .second-section-intro-copy,
  .what-we-do-tile,
  .what-we-do-feature,
  .focus-areas-heading,
  .focus-areas-controls,
  .focus-areas-carousel,
  .focus-areas-feature,
  .news-heading,
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
    animation: none;
    box-shadow: none;
  }

}
</style>

