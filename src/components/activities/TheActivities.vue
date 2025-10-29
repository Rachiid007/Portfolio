<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CarouselSlide from '@/components/activities/CarouselSlide.vue'
import TheCarousel from '@/components/activities/TheCarousel.vue'
import ModalBox from '@/components/activities/ModalBox.vue'
import GalleryFiltering from '@/components/activities/GalleryFiltering.vue'
import ActivitiesSummary from '@/components/activities/ActivitiesSummary.vue'

import { activitiesInfos } from '@/data/activitiesInfos'

const route = useRoute()
const router = useRouter()

const isModalOpen = ref(false)
const isSummary = ref(false)
const isCarousel = ref(false)

const openSummary = () => {
  isModalOpen.value = true
  isSummary.value = true
  isCarousel.value = false
}

const openCarousel = (id?: number) => {
  isModalOpen.value = true
  isSummary.value = false
  isCarousel.value = true

  if (typeof id === 'number' && route.fullPath !== `/activity/${id}`) {
    router.push(`/activity/${id}`)
  }
}

const resetModalState = () => {
  isModalOpen.value = false
  isSummary.value = false
  isCarousel.value = false
}

const currentActivityId = computed(() => {
  const rawId = route.params.id
  const value = Array.isArray(rawId) ? rawId[0] : rawId

  if (value === undefined) {
    return undefined
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : undefined
})


interface ActivitySlide {
  img: string[]
  description: string
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/carousel/${name}`, import.meta.url).href
}

const carouselSlides = computed(() => {
  const slides: ActivitySlide = { img: [], description: '' }
  const activityInfo = activitiesInfos.find((elem) => elem.id === currentActivityId.value)
  if (activityInfo) {
    slides.img = activityInfo.img.map((img) => {
      return getImageUrl(img)
    })
    slides.description = activityInfo.description
  }
  return slides
})

const closeModal = () => {
  resetModalState()
  if (route.fullPath !== '/') {
    router.push('/')
  }
}

watch(
  () => [route.fullPath, currentActivityId.value],
  () => {
    if (route.name === 'activity' || route.fullPath.startsWith('/activity/')) {
      if (currentActivityId.value === undefined) {
        router.replace({ name: 'NotFound' })
        return
      }

      const activityExists = activitiesInfos.some((elem) => elem.id === currentActivityId.value)
      if (!activityExists) {
        router.replace({ name: 'NotFound' })
        return
      }

      openCarousel()
      return
    }

    if (route.name === 'summary' || route.fullPath === '/summary') {
      openSummary()
      return
    }

    resetModalState()
  },
  { immediate: true }
)
</script>

<template>
  <article id="activities" ref="actContent">
    <h2 ref="activitiesPos" class="title">
      {{ $t('activities.title') }}
    </h2>
    <GalleryFiltering @open-carousel="openCarousel" />
    <RouterLink to="/summary" class="button-custom" @click="openSummary">
      {{ $t('activities.summary') }}
    </RouterLink>

  <ModalBox :show="isModalOpen" @close-modal="closeModal">
      <ActivitiesSummary v-if="isSummary"></ActivitiesSummary>
      <TheCarousel
        v-if="isCarousel"
        v-slot="{ currentSlide }"
        :slides-list="carouselSlides.img"
        :start-auto-play="false"
        :timeout="5000"
        class="carousel"
      >
        <CarouselSlide v-for="(slide, index) in carouselSlides.img" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="slide" alt="slide" />
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
  object-fit: contain;
  /* object-position: center; */
}
</style>
