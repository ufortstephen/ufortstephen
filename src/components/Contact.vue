<template>
  <div class="max-w-100 mx-auto px-6 lg:px-20 mt-5 lg:mt-20 pb-20" id="contact">
    <div class="grid">
      <h1
        class="leading-tight text-xl md:text-2xl mt-0 mb-2 text-white font-bold"
      >
        <span class="text-green font-mono md:pr-0">04.</span> Contact me
      </h1>
    </div>
    <div
      class="md:flex gap-20 md:space-x-10 md:pl-20 mt-10 space-y-20 md:space-y-0"
    >
      <div class="space-y-10 md:basis-3/4">
        <h5 class="text-md md:text-xl text-gray-300">
          My inbox is always open to listen to what you have to say. If you have
          a question or just want to say hi, I’ll try my best to get back to
          you!
        </h5>
        <div class="flex justify-cnter">
          <button
            type="button"
            class="inline-block px-6 py-4 w-36 bg-transparent border-2 border-white text-white font-medium text-1xl leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:border-none focus:outline-none active:bg-transparent active:shadow-lg transition duration-150 ease-in-out"
          >
            <a href="mailto:ufortstephen@gmail.com">Say Hello!</a>
          </button>
        </div>
      </div>
      <div class="md:basis-2/4">
        <div
          class="flex flex-wrap md:flex-col items-center justify-center md:justify-start md:space-y-5 space-x-5"
        >
          <div class="flex gap-5 cursor-pointer">
            <a
              href="https://github.com/ufortstephen"
              class="flex gap-5 cursor-pointer hover:text-lime-600 hover:fill-lime-600"
            >
              <CIcon
                :icon="cibGithub"
                size="md"
                class="w-4 h-4 text-white fill-white hover:fill-lime-600"
              />
              <h5 class="text-md md:text-xl font-mono hover:text-lime-600">
                Github
              </h5>
            </a>
          </div>
          <div class="flex gap-5">
            <a
              href="https://www.linkedin.com/in/stephen-udoma-ab91861a3"
              class="flex gap-5 cursor-pointer items-center"
            >
              <CIcon
                :icon="cibLinkedinIn"
                size="xl"
                class="w-4 h-4 text-white fill-white hover:fill-cyan-700"
              />
              <h5 class="text-md md:text-xl font-mono hover:text-cyan-700">
                LinkedIn
              </h5>
            </a>
          </div>
          <div class="flex gap-5">
            <a
              href="https://twitter.com/Ufort2"
              class="flex gap-5 cursor-pointer items-center"
            >
              <CIcon
                :icon="cibTwitter"
                size="xl"
                class="w-4 h-4 text-white fill-white hover:fill-violet-900"
              />
              <h5 class="text-md md:text-xl font-mono hover:text-violet-900">
                Twitter
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import { cibGithub, cibLinkedinIn, cibTwitter } from "@coreui/icons";
export default {
  components: {
    CIcon,
  },
  setup() {
    return {
      cibGithub,
      cibLinkedinIn,
      cibTwitter,
    };
  },
};
</script>

<style></style>
