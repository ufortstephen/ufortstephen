<template>
  <div class="max-w-100 mx-auto px-6 lg:px-20 mt-5 lg:mt-20 pb-20" id="blog">
    <div class="grid">
      <h1
        class="leading-tight text-xl md:text-2xl mt-0 mb-2 text-white font-bold"
      >
        <span class="text-blue font-mono md:pr-0">03.</span> Skill Up With Great
        Articles
      </h1>
    </div>
    <div
      class="md:flex gap-20 md:space-x-10 md:pl-20 mt-10 space-y-20 md:space-y-0"
    >
      <div
        class="p-0 md:py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3.5 gap-5"
      >
        <h5 class="font-bold text-lg mb-5">
          Great things take time to create..... Stay tuned!.
        </h5>
        <!--Card 1-->
        <!-- <div
          class="rounded overflow-hidden shadow-lg bg-article cursor-pointer mt-5 md:my-0"
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
              <a href="" class="text-green">
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
              <a href="" class="hover:underline text-md md:text-2xl">
                An Introduction To Javascript Closures
              </a>
            </div>
            <p class="text-sm md:text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div> -->
      </div>
      <div
        class="p-0 md:py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3.5 gap-5"
      >
        <!--Card 1-->
        <!-- <div
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
              <a href="" class="text-green">
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
              <a href="" class="hover:underline text-md md:text-2xl">
                An Introduction To Javascript Closures
              </a>
            </div>
            <p class="text-sm md:text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import { cilBook, cibLinkedinIn, cibTwitter } from "@coreui/icons";
export default {
  components: {
    CIcon,
  },
  setup() {
    return {
      cilBook,
      cibLinkedinIn,
      cibTwitter,
    };
  },
};
</script>

<style></style>
