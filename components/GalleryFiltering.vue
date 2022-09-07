<script setup>
import { activitiesInfos } from '~/data/activitiesInfos.js'

const whoToSee = ref('All')

const themes = computed(() => {
  const uniqueThemes = ['All'];

  activitiesInfos.filter(elem => {
    if (!uniqueThemes.includes(elem.theme)) {
      uniqueThemes.push(elem.theme);
    }
  });

  return uniqueThemes;
})

const filterSelect = (theme) => {
  whoToSee.value = theme
}

const openCarousel = (id) => {
  emit('open-carousel', id)
}

const emit = defineEmits(['open-carousel'])
</script>

<template>
  <div id="containerBtns">
    <button
      v-for="theme in themes"
      @click="filterSelect(theme)"
      class="btn"
      :class="{ active: whoToSee === theme }"
    >
      {{ theme }}
    </button>
  </div>


  <div id="my-gallery">
    <NuxtLink
      v-for="elem in activitiesInfos"
      :to="'/activity/' + elem.id"
      class="cart"
      :key="elem.id"
      v-show="whoToSee === 'All' || elem.theme === whoToSee"
      @click="openCarousel(elem.id)"
    >
      <p>{{ elem.typeOfActivity }}</p>
      <span>{{ elem.place }}</span>
    </NuxtLink>
  </div>
</template>


<style scoped>
#containerBtns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: rgb(225, 55, 89);
}

.btn.active {
  background-color: crimson;
  color: white;
}

#my-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 25px 20px;
  justify-content: center;
  margin: 25px auto;
}

#my-gallery .cart {
  width: 100%;
  /* height: auto; */
  height: 200px;
  padding: 10px;
  background-color: rgb(40, 40, 202);
  position: relative;
}

#my-gallery .cart:hover {
  background-color: rgb(231, 70, 102);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

#my-gallery .cart p {
  /*all: initial; */
  background-color: initial;
  font-size: 1.1em;
  color: white;
}

#my-gallery .cart span {
  font-size: 1em;
  color: white;
  font-weight: 500;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

/* @keyframes appear {
  to {
    width: 100%;
    opacity: 1;
  }
} */
</style>
