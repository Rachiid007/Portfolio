<script setup>
import ModalBox from './ModalBox.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()

const isModalOpen = ref(false)

if (router.currentRoute.value.fullPath === '/summary') {
  isModalOpen.value = true
} else if (router.currentRoute.value.fullPath === '/') {
  isModalOpen.value = false
}
</script>

<template>
  <article id="validations">
    <h2 class="title">{{ t('activities.title') }}</h2>
    <router-link to="/summary" class="button-custom" @click="isModalOpen = true">{{
      t('activities.summary')
    }}</router-link>

    <ModalBox :show="isModalOpen" @close-modal="isModalOpen = false" />
  </article>
</template>
