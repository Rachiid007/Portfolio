<script setup>
  import { onClickOutside } from '@vueuse/core'

  import { useI18n } from 'vue-i18n'
  import flagFr from '~/assets/flags/FR.svg?raw'
  import flagEn from '~/assets/flags/EN.svg?raw'

  const { availableLocales, locale } = useI18n()

  const target = ref(null)
  onClickOutside(target, () => (isVisible.value = true))

  const isVisible = ref(true)
  const toggle = () => {
    isVisible.value = !isVisible.value
  }

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

  const availableLanguage = {
    fr: {
      name: 'fr',
      flag: flagFr
    },
    en: {
      name: 'en',
      flag: flagEn
    }
  }

  const languages = computed(() => {
    const myObj = {}
    for (const key in availableLanguage) {
      // if the language is the current language
      if (key === locale.value) {
        // create an object who has the key active
        myObj.active = {
          name: availableLanguage[key].name,
          flag: availableLanguage[key].flag
        }
      } else {
        // create an object who has the key not active
        myObj.notActive = {
          name: availableLanguage[key].name,
          flag: availableLanguage[key].flag
        }
      }
    }
    return myObj
  })

  const handleSwitchLanguage = (name) => {
    locale.value = name
    localStorage.setItem('language', locale.value)
  }
</script>

<template>
  <div
    id="container"
    ref="target"
    :class="{ visible: !isVisible }"
  >
    <button
      class="item trigger"
      @click="toggle"
    >
      <span
        class="image"
        v-html="languages.active.flag"
      ></span>
      <p>{{ languages.active.name }}</p>
      <div
        class="caret"
        :class="{ 'caret-rotate': isVisible }"
      ></div>
    </button>

    <button
      class="item choice"
      :class="{ hidden: isVisible }"
      @click="handleSwitchLanguage(languages.notActive.name)"
    >
      <span
        class="image"
        v-html="languages.notActive.flag"
      ></span>
      <p>{{ languages.notActive.name }}</p>
    </button>
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
  }

  .item:hover {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    cursor: pointer;
  }
  .trigger {
    background-color: hsla(0, 0%, 99.2%, 0.1);
    border-radius: 8px;
    justify-content: space-around;
  }

  .choice {
    position: absolute;
    top: 30px;
    left: 0;
    justify-content: flex-start;
    column-gap: 8px;
    padding-left: 4px;
    /*background-color: hsla(0,0%,99.2%,.15);*/
  }

  .visible .item:nth-child(1) {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    border-top: solid 1px crimson;
    border-right: solid 1px crimson;
    border-left: solid 1px crimson;
    border-radius: 8px 8px 0 0;
  }

  .visible .item:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    border-radius: 0 0 8px 8px;
    border-bottom: solid 1px crimson;
    border-right: solid 1px crimson;
    border-left: solid 1px crimson;
  }

  .visible .item:hover {
    background-color: rgb(233, 126, 147) !important;
  }

  .visible .item p {
    color: #f1f1f1;
  }

  .choice.hidden {
    display: none;
  }

  .item p {
    background-color: initial;
    font-weight: 700;
    text-transform: uppercase;
  }

  span {
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
