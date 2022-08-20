<template>
  <div class="progress-indicator-wrapper">
    <div class="progress-indicator" :style="{ width: props['scrollPercentage'] }"></div>
  </div>
</template>

<script setup>
const props = defineProps(['scrollPercentage'])
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
