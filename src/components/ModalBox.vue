<script setup>
import TheSummary from './TheSummary.vue'
import { ref, onUpdated, onMounted } from 'vue'
import { onClickOutside, onKeyStroke, useScrollLock } from '@vueuse/core'

import { useRouter } from 'vue-router'

const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['close-modal'])

const isLocked = useScrollLock(document.body)
const router = useRouter()
onUpdated(() => {
  if (props.show) {
    isLocked.value = true

    // on click ESCAPE key
    onKeyStroke(['Escape'], () => {
      emit('close-modal')
    })
  } else {
    isLocked.value = false
    router.push('/')
  }
})

onMounted(() => {
  if (props.show) {
    isLocked.value = true

    // on click ESCAPE key
    onKeyStroke(['Escape'], () => {
      emit('close-modal')
    })
  } else {
    isLocked.value = false
    router.push('/')
  }
})

const modal = ref(null)
onClickOutside(modal, () => {
  emit('close-modal')
})
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal">
      <div v-show="props.show" class="modal-mask">
        <div class="modal-wrapper" ref="modal">
          <div class="modal-container">
            <button class="modal-default-button" @click="$emit('close-modal')">X</button>
            <TheSummary />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.7s ease;
}

.modal-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: max-content;
  border-radius: 0.5rem;
}

.modal-default-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  color: blue;
  cursor: pointer;
}

.modal-default-button:hover {
  color: red;
}

.modal-wrapper {
  overflow: auto !important;
  height: 90%;
  max-height: min-content;
}

body.darkMode .modal-wrapper {
  background-color: rgb(30, 29, 29);
  color: black;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.9);
  transform: none;
}

@media (max-width: 1280px) {
  .modal-wrapper {
    padding: 10px;
    width: 90%;
  }
}
</style>
