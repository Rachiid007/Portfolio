<script setup lang="ts">
defineProps({
  level: Number
})
</script>

<template>
  <div class="progress-bar">
    <div class="progress-container">
      <div class="progress-bar-fill" :style="{ width: level + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.progress-container {
  height: 10px;
  width: 100%;
  background: lightgrey;
  border-radius: 5px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, rgb(167, 88, 199) 0%, rgba(220, 20, 60, 1) 50%);
  border-radius: 5px;
  transition: width 1s ease-in-out;
}
</style>
