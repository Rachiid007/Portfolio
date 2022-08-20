<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeMount } from 'vue'
const { availableLocales, locale } = useI18n()

onBeforeMount(() => {
  const clientLanguage = navigator.language.split('-')[0]

  // if there is no language in localStorage
  if (localStorage.getItem('language') === null) {
    // if we support the client language
    if (availableLocales.includes(clientLanguage)) {
      locale.value = clientLanguage
    } else {
      // if we don't support the client language, use the first one
      locale.value = availableLocales[0]
    }
  } // if there is a language in localStorage
  else {
    const languageInStorage = localStorage.getItem('language')
    if (availableLocales.includes(languageInStorage)) {
      locale.value = languageInStorage
    } else {
      locale.value = availableLocales[0]
    }
  }
})

const handleSwitchLanguage = () => {
  localStorage.setItem('language', locale.value)
}
</script>

<template>
  <form>
    <select v-model="locale" @change="handleSwitchLanguage">
      <option v-for="(lang, index) in availableLocales" :value="lang" :key="index">
        {{ lang }}
      </option>
    </select>
  </form>
</template>

<style scoped>
select {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

option {
  font-size: 14px;
  color: #000;
}
</style>
