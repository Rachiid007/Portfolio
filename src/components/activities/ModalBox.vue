<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { useScrollLock, onKeyStroke, onClickOutside } from '@vueuse/core'
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
    router.push({ path: '/' })
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
    router.push({ path: '/' })
  }
})

const modal = ref(null)
onClickOutside(modal, () => {
  emit('close-modal')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-show="props.show" class="modal-mask">
        <div ref="modal" class="modal-wrapper">
          <button type="button" class="btn-close" @click="$emit('close-modal')">
            <span class="icon-cross"></span>
          </button>
          <slot></slot>
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
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.7s ease;
}

.modal-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  border-radius: 10px;
  overflow: auto !important;
  padding: 7px;
  width: 90%;
  /*max-width: max-content;*/
  height: 90%;
  max-height: 700px;
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

/* @media (max-width: 1280px) {
  .modal-wrapper {
    padding: 10px;
    width: 90%;
  }
} */

/* CLOSE BUTTON */
.btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 0;
  border: 0;
  padding: 0;
  background: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s ease;
  z-index: 9;
}
.btn-close .icon-cross {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  position: relative;
  width: 30px;
  height: 30px;
}
.btn-close .icon-cross:before,
.btn-close .icon-cross:after {
  content: '';
  position: absolute;
  top: 13px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: black;
  border-radius: 6px;
}
.btn-close .icon-cross:before {
  transform: rotate(45deg);
}
.btn-close .icon-cross:after {
  transform: rotate(-45deg);
}
.btn-close .icon-cross span {
  display: block;
}
.btn-close:hover,
.btn-close:focus {
  background-color: crimson;
}

body.darkMode .icon-cross:before,
body.darkMode .icon-cross:after {
  background-color: white;
}
</style>
