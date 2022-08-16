<script setup>
import ModalBox from './ModalBox.vue'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const isModalOpen = ref(false)

if (router.currentRoute.value.fullPath === '/summary') {
  isModalOpen.value = true
}
</script>

<template>
  <article id="validations">
    <h2 class="title">À Valider</h2>
    <router-link to="/summary" class="button-custom" @click="isModalOpen = true"
      >Tableau récapitulatif</router-link
    >

    <ModalBox :show="isModalOpen" @close-modal="isModalOpen = false" />
  </article>
</template>
