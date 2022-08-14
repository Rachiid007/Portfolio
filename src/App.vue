<script setup>
import MyHeader from "./components/MyHeader.vue";
import Presentation from "./components/Presentation.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import MyFooter from "./components/MyFooter.vue";
import Validations from "./components/Validations.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <MyHeader />
  <main class="max-width">
    <Presentation />
    <About />
    <Skills />
    <Validations />
    <Contact />
  </main>
  <MyFooter />
</template>
