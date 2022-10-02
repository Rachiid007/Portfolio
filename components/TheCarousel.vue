<template>
  <div class="carousel">
    <slot :current-slide="currentSlide" />

    <!-- Navigation -->
    <div
      v-if="navEnabled"
      class="navigate"
    >
      <div class="toggle-page left">
        <i
          class="fas fa-chevron-left"
          @click="prevSlide"
        ></i>
      </div>
      <div class="toggle-page right">
        <i
          class="fas fa-chevron-right"
          @click="nextSlide"
        ></i>
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="paginationEnabled"
      class="pagination"
    >
      <span
        v-for="(slide, index) in props.nbrOfSlides"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['nbrOfSlides', 'startAutoPlay', 'timeout', 'navigation', 'pagination'])

  const currentSlide = ref(1)
  const getSlideCount = ref(null)
  const autoPlayEnabled = ref(props.startAutoPlay === undefined ? true : props.startAutoPlay)
  const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout)
  const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination)
  const navEnabled = ref(props.navigation === undefined ? true : props.navigation)
  // next slide
  const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
      currentSlide.value = 1
      return
    }
    currentSlide.value += 1
  }
  // prev slide
  const prevSlide = () => {
    if (currentSlide.value === 1) {
      currentSlide.value = 1
      return
    }
    currentSlide.value -= 1
  }
  const goToSlide = (index) => {
    currentSlide.value = index + 1
  }
  // autoplay
  const autoPlay = () => {
    setInterval(() => {
      nextSlide()
    }, timeoutDuration.value)
  }
  if (autoPlayEnabled.value) {
    autoPlay()
  }
  // onMounted(() => {
  //   currentSlide.value = 1
  // })
</script>

<style>
  .navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigate .toggle-page {
    display: flex;
    flex: 1;
  }
  .navigate .right {
    justify-content: flex-end;
  }
  .navigate i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: crimson;
    color: #fff;
  }
  .pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
  .pagination span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .pagination .active {
    background-color: crimson;
  }
</style>
