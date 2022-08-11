<!--
Modal component with customizable slots and CSS transitions.
-->

<script>
import Modal from './Modal.vue'

export default {
  name: "Validations",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>
<article id="validations">
  <h2 class="title">À Valider</h2>
  <a id="show-modal" @click="showModal = true" class="button-custom">Tableau récapitulatif</a>

  <Teleport to="#modal">
    <!-- use the modal component, pass in the prop -->
    <Modal :show="showModal" @close="showModal = false" />
  </Teleport>
</article>
</template>