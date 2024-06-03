<template>
  <div class="relative">
    <div class="max-w-100 mx-auto px-6 lg:px-20 mt-5 lg:mt-20">
      <div
        class="max-w-100 xl:flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-20 space-y-10"
      >
        <div class="author w-50">
          <h2 class="author-name text-md md:text-2xl">
            I<span class="text-yellow">'</span>m Ufort Stephen
          </h2>
          <p class="author__overview text-md md:text-xl">
            I’m a
            <a href="" class="text-green">
              Blockchain Developer and Software Engineer</a
            >
            specializing in building exceptional software. I help Designers,
            agencies and businesses bring their ideas into life by implementing
            responsive web and mobile applications, and landing pages from
            concept through deployment.
          </p>
          <p class="author__overview mt-10 text-md md:text-xl">
            The world is better with my
            <a href="" class="text-green"> code</a> in it.
          </p>
        </div>
        <div class="justify-start lg:w-0 xl:flex-1 stacks">
          <header class="three_bubbles">
            <span class="bg-green"></span>
            <span class="bg-yellow"></span>
            <span class="bg-red"></span>
          </header>

          <code class="stack__technologies">
            <span class="flex text-sm md:text-lg">
              00.
              <span class="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                stack
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
            <span
              class="flex my-0 text-sm md:text-lg"
              v-for="(stack, index) in stacks"
              :key="stack.class"
            >
              0{{ index + 1 }}. &nbsp;
              <span class="hidden md:block">&nbsp;</span>
              <span
                class="flex justify-between items-center"
                :class="stack.class"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {{ stack.stack }} /<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
            <span class="flex text-sm md:text-lg">
              00.
              <span class="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                /stack
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
const stacks = ref([
  { stack: "JavaScript", class: "text-red" },
  { stack: "React", class: "text-yellow" },
  { stack: "Vue", class: "text-green" },
  { stack: "Solidity", class: "text-blue" },
  { stack: "Typescript", class: "text-red" },
  { stack: "Web3.js", class: "text-yellow" },
  { stack: ".... and many more", class: "text-green" },
]);
</script>

<style>
.author-name {
  color: #fffafa;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  /* font-size: 62px; */
  line-height: 125%;
  margin: 0;
  margin-bottom: 40px;
}
.author__overview {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  /* font-size: 24px; */
  line-height: 160%;
  gap: 32px;
}
.stacks {
  border: 1px solid #fffafa;
  border-radius: 12px;
  align-self: center;
  width: 350px;
  min-width: 450px;
}

@media (max-width: 768px) {
  .stacks {
    width: 100% !important;
    min-width: 100% !important;
  }
  .author-name {
    font-size: 22px;
  }
  .author__overview {
    /* font-size: 20px; */
  }
}

header.three_bubbles {
  display: flex;
  padding: 16px;
  justify-content: flex-start;
  gap: 4px;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid rgba(47, 128, 237, 0.4);
}
.three_bubbles span {
  width: 16px;
  height: 16px;
  border-radius: 8px;
}
.stack__technologies {
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.stack__technologies span {
  font-family: "DM Mono", monospace;
}
</style>
