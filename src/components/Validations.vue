<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'

const isModalOpen = ref(false)
</script>

<template>
<article id="validations">
  <h2 class="title">À Valider</h2>
  <a @click="isModalOpen = true" class="button-custom">Tableau récapitulatif</a>

  <Teleport to="#modal">
    <!-- use the modal component, pass in the prop -->
    <Modal :show="isModalOpen" @close-modal="isModalOpen = false"/>
  </Teleport>
</article>
</template>