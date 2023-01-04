<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-transparent">
    <div class="max-w-100 mx-auto px-6 lg:px-20">
      <div
        class="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" class="nav-logo text-lg md:text-2xl">
            <span class="sr-only">Workflow</span>
            <!-- <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            /> -->
            ufort<span class="text-yellow">.</span>stephen
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-green focus:outline-none"
          >
            <span class="sr-only">Open menu</span>
            <!-- <MenuIcon class="h-6 w-6" aria-hidden="true" /> -->
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </PopoverButton>
        </div>

        <div
          class="nav-link hidden md:flex items-center flex-wrap md:flex-nowrap justify-end md:flex-1 lg:w-0 gap-10"
        >
          <a
            href="#about"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-light-900 text-md md:text-lg"
          >
            <span class="text-pink">01.</span> <span>about me</span>
          </a>
          <a
            href="#experience"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-light-900 text-md md:text-lg"
          >
            <span class="text-yellow">02.</span> <span>experience</span>
          </a>
          <a
            href="#blog"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-light-900 text-md md:text-lg"
          >
            <span class="text-blue">03.</span> <span>blog</span>
          </a>
          <a
            href="#contact"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-light-900 text-md md:text-lg"
          >
            <span class="text-green">04.</span> <span>contact me</span>
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="z-40 fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="fixed h-screen left-0 w-screen top-0 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          style="background-color: #001427"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div></div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8 text-right">
                <a
                  href="#"
                  class="whitespace-nowrap font-medium text-white hover:text-light-900 text-xl md:text-lg"
                >
                  <span class="text-pink">01.</span> <span>about me</span>
                </a>
                <a
                  href="#"
                  class="whitespace-nowrap font-medium text-white hover:text-light-900 text-xl md:text-lg"
                >
                  <span class="text-yellow">02.</span> <span>experience</span>
                </a>
                <a
                  href="#"
                  class="whitespace-nowrap font-medium text-white hover:text-light-900 text-xl md:text-lg"
                >
                  <span class="text-blue">03.</span> <span>blog</span>
                </a>
                <a
                  href="#contact"
                  class="whitespace-nowrap font-medium text-white text-xl md:text-lg"
                >
                  <span class="text-green">04.</span> <span>contact me</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];
</script>

<style scoped>
.nav-link a {
  /* font-size: 19px; */
  font-family: "DM Mono", monospace;
  color: #fffafa;
}

.nav-logo {
  font-family: "DM Sans", sans-serif;
  color: #fffafa;
  font-weight: bold;
}
@media (min-width: 768px) {
  .nav-logo {
    /* font-size: 35px; */
  }
}
</style>
