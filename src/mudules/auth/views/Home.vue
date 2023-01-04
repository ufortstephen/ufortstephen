<template>
  <AppHeader />
  <AppHero />
  <About />
  <Experiences />
  <Projects />
  <!-- <Articles /> -->
  <Contact />
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import AppHeader from "../../../components/AppHeader.vue";
import AppHero from "../../../components/AppHero.vue";
import Experiences from "../../../components/Experiences.vue";
import Articles from "../../../components/Articles.vue";
import Projects from "../../../components/Projects.vue";
import About from "../../../components/About.vue";
import Contact from "../../../components/Contact.vue";
</script>

<style></style>
