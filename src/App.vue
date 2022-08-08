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
      posScroll: '',
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // handleScroll() {
    //   this.posScroll = window.scrollY;
    // },
    // scrollIndicator() {
    //   let height =
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight;
    //   let scrolled = (this.posScroll / height) * 100;
    //   // document.getElementById("myBar").style.width = scrolled + "%";
    //   this.posScroll = scrolled + "%";
    // },
  },
};
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

<style scoped></style>
