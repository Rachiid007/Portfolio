<script setup lang="ts">
  const position = useScrollIndicator()
</script>

<template>
  <div class="progress-indicator-wrapper">
    <div
      class="progress-indicator"
      :style="{ width: position }"
    ></div>
  </div>
</template>

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
