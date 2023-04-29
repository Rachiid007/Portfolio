<script setup lang="ts">
import { ref } from 'vue'
import { activitiesInfos, ActivityTheme } from '@/data/activitiesInfos'

const whoToSee = ref('All')

const filterSelect = (theme: ActivityTheme) => {
  whoToSee.value = theme
}

const openCarousel = (id: number) => {
  // verify if id is in activitiesInfos
  const activityInfo = activitiesInfos.find((elem) => elem.id === id)
  if (activityInfo) {
    emit('open-carousel', id)
  }
}

const emit = defineEmits(['open-carousel'])

// TODO: if id in url not found in activitiesInfos, redirect to 404
</script>

<template>
  <div class="container-btns">
    <button
      v-for="theme in ActivityTheme"
      :key="theme"
      class="btn"
      :class="{ active: whoToSee === theme }"
      @click="filterSelect(theme)"
    >
      {{ theme }}
    </button>
  </div>
  <div class="my-gallery">
    <router-link
      v-for="elem in activitiesInfos"
      v-show="whoToSee === ActivityTheme.All || elem.theme === whoToSee"
      :key="elem.id"
      :to="'/activity/' + elem.id"
      class="card"
      @click="openCarousel(+elem.id)"
    >
      <div class="card-content">
        <h3 class="card-title">{{ elem.typeOfActivity }}</h3>
        <p class="card-place">{{ elem.place }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.container-btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.btn {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background-color: #555;
}

.btn.active,
.darkMode .btn.active {
  background-color: #555;
}

.my-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  gap: 2rem;
  margin-bottom: 4rem;
}

.card {
  position: relative;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transform: translateY(-0.5rem);
  background-color: #efe9e9;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #000;
  transition: color 0.2s ease-in-out;
}

.card-place {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0;
  opacity: 0.7;
  color: #000;
  transition: color 0.2s ease-in-out;
  align-self: flex-end;
}

.darkMode .container-btns {
  border-bottom: 1px solid #ccc;
}

.darkMode .btn {
  color: #fff;
  background-color: #000;
  border: none;
  transition: all 0.2s ease-in-out;
}

.darkMode .btn:hover {
  background-color: #555;
}

.darkMode .btn.active,
.darkMode .btn:active {
  background-color: #555;
}

.darkMode .card {
  background-color: #333;

  color: #fff;
}

.darkMode .card:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transform: translateY(-0.5rem);
  background-color: #444;
}

.darkMode .card-title {
  color: #fff;
}

.darkMode .card-place {
  color: #fff;
  background-color: inherit;
}
</style>
