<template>
  <div class="progress-indicator-wrapper">
    <div class="progress-indicator" :style="{ width: progress }"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressIndicator",
  data() {
    return {
      progress: "0%"
    };
  },
  methods: {
    updateProgressIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.progress = (windowScroll / height) * 100 + "%";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressIndicator);
  }
};
</script>

<style>
/* The progress container (grey background) */
.progress-indicator-wrapper {
  width: 100%;
  height: 8px;
  background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-indicator {
  height: 8px;
  background-color: crimson;
  width: 0;
}
</style>