<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
import Auth from "../src/layouts/Auth.vue";
import DefaultLayout from "../src/layouts/DefaultLayout.vue";
import { computed } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
const defaultLayout = DefaultLayout;

const router = useRouter();
const route = useRoute();

const layout = computed(() => {
  console.log(route.meta.layout);

  if (route.meta.layout == "Auth") {
    return Auth;
  } else {
    return defaultLayout;
  }
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fffafa;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;
  background-color: #001427;
  color: #fffafa;
  font-family: "DM Sans", sans-serif;
}

.font-mono {
  font-family: "DM Mono", monospace;
}

.bg-article {
  background-color: rgb(17, 41, 64);
}
</style>
