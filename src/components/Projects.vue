<template>
  <div class="max-w-100 mx-auto px-6 lg:px-20 mt-5 lg:mt-20 pb-20" id="blog">
    <div class="grid">
      <h1
        class="leading-tight text-xl md:text-2xl mt-0 mb-2 text-white font-bold"
      >
        <span class="text-red font-mono md:pr-0">03.</span> Projects
      </h1>
    </div>
    <!-- <div
      class="md:flex gap-20 md:space-x-10 md:pl-20 mt-10 space-y-20 md:space-y-0"
    >
      <div
        class="p-0 md:py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3.5 gap-5"
      >
        <h5 class="font-bold text-lg mb-5">
          Great things take time to create..... Stay tuned!.
        </h5>
      </div>
    </div> -->
    <div class="md:pl-20 my-10">
      <swiper
        :modules="modules"
        :slides-per-view="currentScreenWidth >= 1000 ? 3 : 1"
        :space-between="50"
        :pagination="{ clickable: true }"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        autoplay="true"
      >
        <swiper-slide>
          <div
            class="rounded overflow-hidden shadow-lg bg-article cursor-pointer mt-5 mb-10 md:my-0 md:mb-5"
          >
            <div class="p-10 pt-5">
              <div class="flex justify-between mb-10">
                <a
                  href="https://github.com/ufortstephen/ticketboy-app"
                  target="_blank"
                >
                  <CIcon
                    :icon="cibGithub"
                    size="md"
                    class="w-6 h-6 text-white fill-white hover:fill-lime-600"
                  />
                </a>

                <a href="https://tiketboy.netlify.app/" class="text-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <div class="font-bold text-xl mb-5">
                <a
                  href="https://tiketboy.netlify.app/"
                  class="hover:underline text-md md:text-2xl"
                >
                  TickeyBoy
                </a>
              </div>
              <p class="text-sm md:text-md text-gray-300">
                We’re transforming the way fans buy and sell tickets to their
                favourite live events in Africa. Get instant and verified
                tickets anywhere, anytime.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="rounded overflow-hidden shadow-lg bg-article cursor-pointer mt-0 md:my-0"
          >
            <div class="p-10 pt-5">
              <div class="flex justify-between mb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <a
                  href="https://www.npmjs.com/package/vue3-datatable-component"
                  class="text-green"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <div class="font-bold text-xl mb-5">
                <a
                  href="https://www.npmjs.com/package/vue3-datatable-component"
                  class="hover:underline text-md md:text-2xl"
                >
                  Vue Table (NPM Package)
                </a>
              </div>
              <p class="text-sm md:text-md text-gray-300">
                A lightweight and high-customizable data-table based on vue-3
                available on NPM. <br />
                <br />
                Paginate, Sort and Filter your tables with ease.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="rounded overflow-hidden shadow-lg bg-article cursor-pointer mt-0 md:my-0"
          >
            <div class="p-10 pt-5">
              <div class="flex justify-between mb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <a href="https://leadfromdemo.netlify.app/" class="text-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <div class="font-bold text-xl mb-5">
                <a
                  href="https://leadfromdemo.netlify.app/"
                  class="hover:underline text-md md:text-2xl"
                >
                  LeadFrom
                </a>
              </div>
              <p class="text-sm md:text-md text-gray-300">
                Cutting edge e-governance sytem that brings you access to all
                local government services with just click of a button. From
                getting your Certificate of Origin to Paying your Taxes.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="rounded overflow-hidden shadow-lg bg-article cursor-pointer mt-0 md:my-0"
          >
            <div class="p-10 pt-5">
              <div class="flex justify-between mb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <a
                  href="https://royaltalenthunt.netlify.app/"
                  class="text-green"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <div class="font-bold text-xl mb-5">
                <a
                  href="https://royaltalenthunt.netlify.app/"
                  class="hover:underline text-md md:text-2xl"
                >
                  Royal Talent Hunt
                </a>
              </div>
              <p class="text-sm md:text-md text-gray-300">
                A talent exhibition which is open to all BCS Youths (Group or
                individual) that we believe will develop the youths to compete
                at National and International Level.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import { cilBook, cibLinkedinIn, cibTwitter, cibGithub } from "@coreui/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref, computed } from "@vue/reactivity";
export default {
  components: {
    CIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    let currentScreenWidth = computed(() => window.innerWidth);

    return {
      currentScreenWidth,
      cibGithub,
      cilBook,
      cibLinkedinIn,
      cibTwitter,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
.swiper-wrapper {
  padding-bottom: 2rem;
}
.swiper-pagination {
  bottom: 0 !important;
}

.swiper-button-next,
.swiper-button-prev {
  font-size: 10px !important;
  color: #84e296;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 16px !important;
}
</style>
