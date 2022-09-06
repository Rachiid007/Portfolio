<script setup>
import { activitiesInfos } from '~/data/activitiesInfos';
const allIds = computed(() => {
  const uniqueIds = [];

  activitiesInfos.filter(elem => {
    if (!uniqueIds.includes(elem.id)) {
      uniqueIds.push(elem.id);
    }
  });

  return uniqueIds;
})

const activitiesPos = ref(null)

const actContent = ref(null)
resiveScrollspy(2, actContent, activitiesPos)

const route = useRoute()

const isModalOpen = ref(false)

const isSummary = ref(false)

const isCarousel = ref(false)

const openSummary = () => {
  isModalOpen.value = true
  isSummary.value = true
  isCarousel.value = false
}

const openCarousel = (id) => {
  isModalOpen.value = true
  isSummary.value = false
  isCarousel.value = true
}

if (route.fullPath === '/summary') {
  openSummary()
} else if (route.fullPath === '/') {
  isModalOpen.value = false
} else if (route.fullPath === '/activity/' + route.params.id) {
  openCarousel()

  // get the image
  if (allIds.value.includes(parseInt(route.params.id))) {
    const activity = activitiesInfos.find(elem => elem.id == route.params.id)
    console.log(activity.img)
  }

}

// const carouselSlides = computed(() => {
//   return activitiesInfos.filter(elem => {
//     if (elem.id == parseInt(route.params.id)) {
//       return elem.img
//     }
//   })
// })

const carouselSlides = computed(() => {
  let myArr = []
  for (let i = 0; i < activitiesInfos.length; i++) {
    if (activitiesInfos[ i ].id == parseInt(route.params.id)) {
      // console.log('with-for-loop', activitiesInfos[ i ].img)
      for (let j = 0; j < activitiesInfos[ i ].img.length; j++) {
        const imageUrl = new URL(`../assets/carousel/${activitiesInfos[ i ].img[j]}`, import.meta.url).href
        myArr.push(imageUrl)
      }
    }
  }
  return myArr
})


// for (let i = 0; i < activitiesInfos.length; i++) {
//   if (activitiesInfos[ i ].id == parseInt(route.params.id)) {
//     console.log(activitiesInfos[i].img)
//   }
// }


// if (allIds.value.includes(parseInt(route.params.id))) {
//   const activity = activitiesInfos.find(elem => elem.id == route.params.id)
//   console.log(activity.img)
// }

function getImageUrl(name) {
  return new URL(`~/assets/carousel/${name}`, import.meta.url).href
}

</script>

<template>
  <article id="activities" ref="actContent">
    <h2 class="title" ref="activitiesPos">{{ $t('activities.title') }}</h2>
    <GalleryFiltering @open-carousel="openCarousel" />
    <NuxtLink to="/summary" class="button-custom" @click="openSummary">
      {{ $t('activities.summary') }}
    </NuxtLink>

    <ModalBox :show="isModalOpen" @close-modal="isModalOpen = false">
      <TheSummary v-if="isSummary"></TheSummary>
      <Carousel v-if="isCarousel"
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
        >
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="slide" alt="" />

            <!-- Description inch'Allah -->
            <p>{{ slide }}</p>
          </div>
        </Slide>
      </Carousel>
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
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
