<script setup lang="ts">
import { ref, onBeforeMount, computed, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

import { useI18n } from 'vue-i18n'
import flagFr from '@/assets/flags/FR.svg?raw'
import flagEn from '@/assets/flags/EN.svg?raw'

type LanguageOption = {
  name: string
  flag: string
}

const availableLanguage: Record<string, LanguageOption> = {
  fr: {
    name: 'fr',
    flag: flagFr
  },
  en: {
    name: 'en',
    flag: flagEn
  }
}

const { availableLocales, locale } = useI18n()

const target = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)

onClickOutside(target, () => {
  isMenuOpen.value = false
})

const ensureSupportedLocale = (code: string | null | undefined) => {
  if (!code) return undefined
  return availableLocales.includes(code) ? code : undefined
}

onBeforeMount(() => {
  const storedLanguage = ensureSupportedLocale(localStorage.getItem('language'))
  if (storedLanguage) {
    locale.value = storedLanguage
    return
  }

  const clientLanguage = ensureSupportedLocale(navigator.language.split('-')[0])
  locale.value = clientLanguage ?? availableLocales[0] ?? 'en'
})

watch(
  () => locale.value,
  (lang) => {
    localStorage.setItem('language', lang)
  }
)

const languageOptions = computed(() => {
  const fallbackOption = availableLanguage.en

  const options = availableLocales
    .map((code) => availableLanguage[code])
    .filter((option): option is LanguageOption => Boolean(option))

  if (!options.length && fallbackOption) {
    options.push(fallbackOption)
  }

  const active = options.find((option) => option.name === locale.value) ?? options[0]
  const others = options.filter((option) => option && option.name !== active?.name)

  return {
    active,
    others
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleSwitchLanguage = (name: string) => {
  locale.value = name
  isMenuOpen.value = false
}
</script>

<template>
  <div id="container" ref="target" :class="{ open: isMenuOpen }">
    <button
      class="item trigger"
      type="button"
      aria-haspopup="listbox"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <span class="image" v-html="languageOptions.active?.flag"></span>
      <p>{{ languageOptions.active?.name }}</p>
      <div class="caret" :class="{ 'caret-rotate': isMenuOpen }"></div>
    </button>

    <div v-if="languageOptions.others.length" class="choices" role="listbox">
      <button
        v-for="option in languageOptions.others"
        :key="option.name"
        class="item choice"
        :class="{ hidden: !isMenuOpen }"
        type="button"
        role="option"
        @click="handleSwitchLanguage(option.name)"
      >
        <span class="image" v-html="option.flag"></span>
        <p>{{ option.name }}</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
#container {
  position: relative;
}

.item {
    display: flex;
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: space-around;
    transition: background-color 0.3s ease;
}

.trigger {
  background-color: hsla(0, 0%, 99.2%, 0.1);
  border-radius: 8px;
  justify-content: space-around;
}

.choices {
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.choice {
  justify-content: flex-start;
  column-gap: 8px;
  padding-left: 4px;
}

.item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  cursor: pointer;
}

.choice.hidden {
  display: none;
}

#container.open .item:nth-child(1) {
  background-color: rgba(255, 255, 255, 0.25);
  border-top: solid 1px crimson;
  border-right: solid 1px crimson;
  border-left: solid 1px crimson;
  border-radius: 8px 8px 0 0;
}

#container.open .choice {
  background-color: rgba(255, 255, 255, 0.25);
  border-right: solid 1px crimson;
  border-left: solid 1px crimson;
}

#container.open .choice:last-child {
  border-bottom: solid 1px crimson;
  border-radius: 0 0 8px 8px;
}

#container.open .item:hover {
  background-color: rgb(233, 126, 147) !important;
}

.item p {
  background-color: initial;
  font-weight: 700;
  text-transform: uppercase;
}

.image {
  width: 18px;
  height: auto;
}

.caret {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.5s;
}

.caret-rotate {
  transform: rotate(180deg);
}
</style>
