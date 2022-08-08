<script>
import MyHeader from "./components/MyHeader.vue";
import Presentation from "./components/Presentation.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import MyFooter from "./components/MyFooter.vue";
import Validations from "./components/Validations.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    Presentation,
    About,
    Skills,
    MyFooter,
    Validations,
    Contact,
  },
  data() {
    return {
      isDark: null,
    };
  }
};
</script>

<template>
  <MyHeader @change-theme="PrintTheme" />
  <main class="max-width">
    <button @click="store.increment()">store.increment</button>
    <Presentation />
    <About />
    <Skills />
    <Validations />
    <Contact />
  </main>
  <MyFooter />
</template>

<style scoped></style>
