<script setup>
  import { activitiesInfos } from '~/data/activitiesInfos'

  // const activitiesPos = ref(null)

  // const actContent = ref(null)
  // resiveScrollspy(2, actContent, activitiesPos)

  const route = useRoute()

  const isModalOpen = ref(false)
  const isSummary = ref(false)
  const isCarousel = ref(false)

  const openSummary = () => {
    isModalOpen.value = true
    isSummary.value = true
    isCarousel.value = false
  }

  const openCarousel = () => {
    isModalOpen.value = true
    isSummary.value = false
    isCarousel.value = true
  }

  if (route.fullPath === '/summary') {
    openSummary()
  } else if (route.fullPath === '/') {
    isModalOpen.value = false
  } else if (route.fullPath === '/activity/' + route.params.id) {
    openCarousel(route.params.id)
  }

  function getImageUrl(name) {
    return new URL(`../assets/carousel/${name}`, import.meta.url)
  }

  const carouselSlides = computed(() => {
    const slides = {}
    activitiesInfos.find((elem) => {
      if (elem.id === parseInt(route.params.id)) {
        slides.img = elem.img.map((img) => {
          return getImageUrl(img)
        })
        slides.description = elem.description
      }
    })
    return slides
  })

  const closeModal = () => {
    isModalOpen.value = false
    isSummary.value = false
    isCarousel.value = false
  }
</script>

<template>
  <article
    id="activities"
    ref="actContent"
  >
    <h2
      ref="activitiesPos"
      class="title"
    >
      {{ $t('activities.title') }}
    </h2>
    <GalleryFiltering @open-carousel="openCarousel" />
    <NuxtLink
      to="/summary"
      class="button-custom"
      @click="openSummary"
    >
      {{ $t('activities.summary') }}
    </NuxtLink>

    <ModalBox
      :show="isModalOpen"
      @close-modal="closeModal"
    >
      <ActivitiesSummary v-if="isSummary"></ActivitiesSummary>
      <TheCarousel
        v-if="isCarousel"
        v-slot="{ currentSlide }"
        :nbr-of-slides="carouselSlides.img"
        :navigation="true"
        :pagination="true"
        :start-auto-play="false"
        :timeout="5000"
        class="carousel"
      >
        <CarouselSlide
          v-for="(slide, index) in carouselSlides.img"
          :key="index"
        >
          <div
            v-show="currentSlide === index + 1"
            class="slide-info"
          >
            <img
              :src="slide"
              alt=""
            />
            <p>{{ carouselSlides.description }}</p>
          </div>
        </CarouselSlide>
      </TheCarousel>
    </ModalBox>
  </article>
</template>

<style>
  .carousel {
    position: relative;
    max-height: 100%;
    height: 100%;
  }
  .carousel .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
  .carousel .slide-info img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: scale-down;
    /* object-position: center; */
  }
</style>
