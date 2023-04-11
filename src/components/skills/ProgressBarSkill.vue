<script setup lang="ts">
defineProps({
  level: Number
})
</script>

<template>
  <div class="line">
    <div class="progress" :style="{ width: level + '%' }"></div>
  </div>
</template>

<style scoped>
.line {
  height: 17px;
  width: 100%;
  background: lightgrey;
  border-radius: 5px;
}
.progress {
  height: 100%;
  background: crimson;
  border-radius: 5px;
}
</style>
