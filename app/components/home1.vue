<template>
      <section class="relative min-h-[760px] overflow-hidden md:min-h-screen">
  <!-- VIDEO -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/assets/video/road.mp4" />
  </video>

  <!-- Overlay -->
  <div
    class="absolute inset-0 bg-black/35"
  />

  <div
    class="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/15"
  />

  <!-- CONTENT -->
  <div   
    class="relative z-10 mx-auto px-4 sm:px-10 lg:px-20 xl:px-20"
  >
    <div
      class="grid min-h-[760px] min-w-0 items-end gap-6 pb-7 pt-24 sm:gap-8 sm:pb-8 sm:pt-28 md:min-h-screen md:pb-12 lg:grid-cols-[minmax(260px,1fr)_minmax(680px,760px)] lg:gap-12"
    >
      <!-- LEFT -->
      <div
        class="order-2 max-w-[360px] pb-3 text-white sm:pb-6 lg:order-1 lg:pb-8"
      >
        <div class="mb-5 flex gap-3 sm:mb-6">
          <img
            :src="starIcon"
            alt=""
            class="mt-[6px] h-4 w-4 shrink-0 object-contain sm:mt-[8px] sm:h-5 sm:w-5"
          />

          <h2
            class="text-[20px] font-semibold leading-[1.12] sm:text-[22px] lg:text-[24px]"
          >
            Africa's Infrastructure Secondary Market Platform
          </h2>
        </div>

        <button
          class="flex h-11 items-center gap-5 bg-[#edf4f2] px-5 text-[9px] font-bold uppercase tracking-[0.04em] text-black transition hover:bg-white sm:h-12 sm:gap-6 sm:px-6 sm:text-[10px]"
        >
          Explore Our Platform
          <img
            :src="arrowOutwardIcon"
            alt=""
            class="h-3 w-3 object-contain"
          />
        </button>
      </div>

      <!-- RIGHT PANEL -->
      <div
        class="relative order-1 min-w-0 max-w-full overflow-hidden bg-[rgba(16,82,87,.86)] px-5 py-6 text-white backdrop-blur-[1px] sm:px-8 sm:py-9 md:px-10 lg:order-2 lg:px-9 lg:py-10"
      >
        <h1
          class="max-w-[680px] break-words text-[23px] font-semibold leading-[1.04] tracking-[-0.02em] text-white min-[390px]:text-[28px] sm:text-[40px] lg:text-[38px] xl:text-[40px]"
        >
          Unlocking liquidity. Mobilising capital.
          Accelerating African infrastructure.
        </h1>

        <p
          class="mt-4 max-w-[650px] break-words text-[12px] leading-[1.5] text-white/90 sm:mt-5 sm:text-[13px] lg:max-w-[620px]"
        >
          We are an African-led investment and fund management platform
          focused on creating structured exit and secondary market solutions
          for Africa's infrastructure market. We help unlock capital trapped
          in operating infrastructure assets and support the growth of
          infrastructure as a mainstream asset class across Africa.
        </p>

        <button
          class="mt-6 flex h-11 items-center gap-6 bg-[#18e6c0] px-5 text-[9px] font-bold uppercase tracking-[0.04em] text-black transition hover:bg-[#35ffd8] sm:mt-7 sm:gap-7 sm:px-6 sm:text-[10px]"
        >
          Partner With Us
          <img
            :src="arrowOutwardIcon"
            alt=""
            class="h-3 w-3 object-contain"
          />
        </button>

        <!-- Slider -->
        <div
          class="mt-6 flex gap-3 sm:absolute sm:right-8 sm:top-[210px] sm:mt-0 sm:gap-4 lg:right-9"
        >
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-[18px] leading-none text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#105257] sm:h-8 sm:w-8 sm:text-[17px]"
            aria-label="Previous platform card"
            @click="showPreviousHeroCard"
          >
            &lsaquo;
          </button>

          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-[18px] leading-none text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#105257] sm:h-8 sm:w-8 sm:text-[17px]"
            aria-label="Next platform card"
            @click="showNextHeroCard"
          >
            &rsaquo;
          </button>
        </div>

        <!-- Cards -->
        <div
          class="relative -mr-5 mt-6 overflow-hidden [--hero-card-gap:1rem] [--hero-card-width:min(58vw,200px)] sm:-mr-8 sm:mt-8 sm:[--hero-card-gap:1.5rem] sm:[--hero-card-width:min(42vw,244px)] md:-mr-10 lg:-mr-9"
        >
          <div
            class="flex gap-4 pr-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] sm:gap-6"
            :style="{ transform: `translateX(calc(-${heroCarouselIndex} * (var(--hero-card-width) + var(--hero-card-gap))))` }"
          >
            <article
              v-for="card in heroCarouselCards"
              :key="card.id"
              class="h-[118px] w-[var(--hero-card-width)] shrink-0 bg-white shadow-[0_22px_45px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-1 sm:h-[170px] lg:h-[210px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<template>
    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_50%_115%,rgba(20,129,160,0.92)_0%,rgba(12,92,123,0.94)_33%,rgba(5,50,75,1)_78%)] pt-[124px] text-white sm:pt-[132px] lg:pt-[146px]">
      <div class="mx-auto flex min-h-[540px] max-w-[1600px] flex-col items-center px-6 pb-0 sm:min-h-[650px] sm:px-10 lg:min-h-[820px] lg:px-20">
        <h1 class="max-w-[720px] text-center text-[31px] font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
          Africa's Infrastructure
          <br />
          Secondary Market Platform
        </h1>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3 lg:mt-10">
          <NuxtLink
            to="/our-capabilities"
            class="inline-flex h-8 items-center gap-5 bg-[#18d8b7] px-5 text-[7px] font-bold uppercase tracking-[0.04em] text-[#032f45] transition hover:bg-[#35ffd8] sm:h-9 sm:px-6 sm:text-[8px] lg:h-10 lg:px-7"
          >
            Explore Our Platform
            <img :src="arrowOutwardIcon" alt="" class="h-2.5 w-2.5 object-contain" />
          </NuxtLink>

          <NuxtLink
            to="/about-us"
            class="inline-flex h-8 items-center gap-5 bg-[#0d4a70] px-5 text-[7px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#12577f] sm:h-9 sm:px-6 sm:text-[8px] lg:h-10 lg:px-7"
          >
            Discover Our Platform
            <img :src="arrowOutwardIcon" alt="" class="h-2.5 w-2.5 object-contain brightness-0 invert" />
          </NuxtLink>
        </div>

       <div
  class="hero-image-strip-viewport mt-[54px] overflow-hidden sm:mt-16 lg:mt-[74px]"
>
  <div
    class="hero-image-strip flex gap-3 overflow-visible pb-8 sm:gap-4 sm:pb-10 md:gap-5 md:pb-12 lg:gap-6 lg:pb-14"
  >
    <NuxtLink
      v-for="card in heroCarouselCards"
      :key="card.id"
      :to="card.to"
      class="group w-[44vw] min-w-[150px] max-w-[210px] shrink-0 sm:w-[28vw] sm:max-w-[260px] md:w-[240px] lg:w-full lg:max-w-none"
    >
      <img
        :src="card.image"
        :alt="card.title"
        class="h-[220px] w-full object-cover sm:h-[300px] md:h-[370px] lg:h-[410px] xl:h-[430px]"
      />

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
    </section>
<section class="w-full bg-[#fafafa] text-[#111111]">
    <!-- Top introduction strip -->
    <div class="bg-[#dcebe7]">
      <div
        class="mx-auto grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:px-14 md:py-16 lg:gap-24 lg:px-20 xl:px-20"
      >
        <!-- Intro title -->
        <div>
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
          class="max-w-[700px] text-[12px] leading-[1.45] text-[#151515] sm:text-[13px] lg:text-[14px]"
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
      class="mx-auto px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20 lg:py-20 xl:px-20"
    >
      <!-- Desktop composition -->
      <div class="hidden grid-cols-3 gap-7 md:grid">
        <!-- Main title occupies the first two cells -->
        <div
          class="col-span-2 flex min-h-[220px] items-start pt-12 lg:min-h-[260px] lg:pt-16"
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
          class="flex min-h-[220px] flex-col justify-between bg-[#eeeeee] p-7 lg:min-h-[260px] lg:p-8"
        >
          <span
            class="text-[42px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6] lg:text-[54px]"
          >
            {{ marketBenefits[0].number }}
          </span>

          <p
            class="max-w-[300px] text-[12px] leading-[1.35] text-[#1b1b1b] lg:text-[14px]"
          >
            {{ marketBenefits[0].text }}
          </p>
        </article>

        <!-- Remaining cards -->
        <article
          v-for="item in marketBenefits.slice(1)"
          :key="item.number"
          class="flex min-h-[220px] flex-col justify-between bg-[#eeeeee] p-7 lg:min-h-[260px] lg:p-8"
        >
          <span
            class="text-[42px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6] lg:text-[54px]"
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
          class="max-w-[520px] text-[28px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[34px]"
        >
          A New Exit Window for African Infrastructure
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in marketBenefits"
            :key="item.number"
            class="flex min-h-[190px] flex-col justify-between bg-[#eeeeee] p-6"
          >
            <span
              class="text-[40px] font-semibold leading-none tracking-[-0.05em] text-[#c6c6c6]"
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

  <section class="bg-white">
    <div class="mx-auto ">
      <div class="grid lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <!-- Advisory -->
          <article
            class="bg-[#0d5563] px-8 py-8 md:px-10 lg:px-20 md:py-10 lg:h-[330px]"
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
            class="bg-[#072f4a] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
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
            class="bg-[#dce8e5] px-8 py-8 md:px-10 lg:px-20  md:py-10 lg:h-[330px]"
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
            class="bg-[#c6ddda] px-8 py-8 md:px-10 md:py-10 lg:h-[330px]"
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
        <article class="group relative min-h-[500px] overflow-hidden lg:min-h-[660px]">
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

  <section class="overflow-hidden bg-[#f7f7f7] py-12 md:py-16 lg:py-20">
    <div class="w-full pl-6 md:pl-10 xl:pl-20">
      <div class="mb-9 flex items-center justify-between pr-6 md:pr-10 xl:pr-20">
        <h2 class="text-[28px] font-semibold leading-none tracking-[-0.01em] text-black lg:text-[34px]">
          Focus Areas
        </h2>

        <div class="flex gap-3">
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

      <div class="overflow-hidden">
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
        class="relative mr-6 mt-14 min-h-[360px] overflow-hidden bg-[#002d49] bg-cover bg-[64%_center] sm:mt-20 sm:min-h-[340px] sm:bg-[72%_center] md:mr-10 md:mt-24 md:min-h-[390px] lg:min-h-[450px] lg:bg-[88%_47%] xl:mr-20"
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
<section class="overflow-hidden bg-[#f5f5f5]">
  <div class="mx-auto pl-6 sm:pl-10 lg:pl-20">

    <!-- Header -->
    <div class="mb-12 flex items-end justify-between pr-6 sm:pr-10 lg:pr-20">
      <h2
        class="text-[34px] leading-[0.95] font-medium tracking-[-0.04em] lg:text-[42px]"
      >
        News <br />
        & Insights
      </h2>

      <div class="flex gap-3">
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
    <div class="overflow-hidden pb-4">
      <div
        class="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        :style="{ transform: `translateX(calc(-${newsCarouselIndex} * (min(82vw, 380px) + 1.5rem)))` }"
      >
        <!-- Card -->
        <article
          v-for="post in newsCarouselPosts"
          :key="post.carouselId"
          class="group w-[min(82vw,380px)] flex-shrink-0"
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
 <section class="w-full bg-[#f5f5f5] px-6 sm:px-10 lg:px-20">
    <div class="mx-auto">
      <!-- Small title -->
      <p class="mb-6 text-[15px] font-medium leading-none text-black lg:text-[16px]">
        Our Global Reach
      </p>

      <!-- Main heading -->
      <h2
        class="max-w-[720px] text-[34px] font-semibold leading-[1.16] tracking-[-1.4px] text-black sm:text-[44px] lg:text-[52px]"
      >
        Innovating where it counts.<br />
        Scaling what matters.
      </h2>

      <!-- Accordion wrapper -->
      <div class="mt-14 overflow-hidden border-t border-[#dedede] lg:mt-20">
        <div
          v-for="region in reachRegions"
          :key="region.name"
          class="group border-b border-[#dedede] transition-colors duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-white/45"
          :class="isRegionOpen(region.name) ? 'pb-10 lg:pb-14' : ''"
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
   <section class="w-full bg-[#f7f7f7]">
    <div
      class="mx-auto flex min-h-[420px] max-w-[1440px] flex-col items-center justify-center px-6 py-20 lg:py-28 text-center sm:px-10 lg:min-h-[520px]"
    >
      <h2
        class="max-w-[760px] text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-black sm:text-[48px] md:text-[58px] lg:text-[64px]"
      >
        Partner with Africa's<br class="hidden sm:block" />
        infrastructure market builder
      </h2>

      <p
        class="mt-8 max-w-[640px] text-[14px] leading-[1.65] text-[#00283f] sm:text-[15px] md:mt-10 md:text-[16px]"
      >
        Whether you are an asset developer, institutional investor, development
        finance institution, fund manager, infrastructure company or strategic
        partner, INFRAGORA provides a platform for unlocking value and mobilising
        capital across Africa’s infrastructure market.
      </p>

      <NuxtLink
        to="/contact-us"
        class="mt-10 inline-flex h-[54px] items-center justify-center gap-5 bg-[#12cfa3] px-8 text-[11px] font-bold uppercase tracking-[-0.2px] text-black transition duration-300 hover:bg-[#0fbf96] sm:h-[58px] sm:px-10"
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
.hero-image-strip-viewport {
  align-self: stretch;
  margin-inline: calc(50% - 50vw);
}

.hero-image-strip {
  --hero-strip-bleed: 4.5rem;
  width: calc(100vw + (var(--hero-strip-bleed) * 2));
  margin-left: calc(var(--hero-strip-bleed) * -1);
  margin-right: 0;
}

@media (min-width: 640px) {
  .hero-image-strip {
    --hero-strip-bleed: 6.5rem;
  }
}

@media (min-width: 768px) {
  .hero-image-strip {
    --hero-strip-bleed: 8.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-image-strip {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    --hero-strip-bleed: clamp(10rem, 14vw, 18rem);
  }
}
</style>


</template>
<script>
const heroCarouselCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]
const heroCarouselIndex = ref(0)

const showNextHeroCard = () => {
  heroCarouselIndex.value =
    heroCarouselIndex.value >= heroCarouselCards.length - 3
      ? 0
      : heroCarouselIndex.value + 1
}

const showPreviousHeroCard = () => {
  heroCarouselIndex.value =
    heroCarouselIndex.value <= 0
      ? heroCarouselCards.length - 3
      : heroCarouselIndex.value - 1
}
</script>