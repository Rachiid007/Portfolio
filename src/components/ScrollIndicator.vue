<template>
  <div class="progress-indicator-wrapper">
    <div class="progress-indicator" :style="{ width: progress }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const progress = ref('0%')

onMounted(() => {
  window.addEventListener('scroll', updateScrollIndicator)
})

const updateScrollIndicator = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  const progressSnipet = (scrollTop / (scrollHeight - clientHeight)) * 100
  progress.value = `${progressSnipet}%`
}
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
