<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeMount } from 'vue'
import fr_flag from '@/assets/flags/fr.svg'
import en_flag from '@/assets/flags/us.svg'
const { availableLocales, locale } = useI18n()

const availableLanguage = [
  {
    code: 'en',
    name: 'English',
    path: en_flag
  },
  {
    code: 'fr',
    name: 'Français',
    path: fr_flag
  }
]

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

const handleSwitchLanguage = (name) => {
  locale.value = name
  localStorage.setItem('language', locale.value)
  // console.log(name)
}
</script>

<template>
  <div class="dropdown">
    <div id="dropbtn">
      <svg
        id="internationalization"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        class="d-icon w-6 h-6 m-auto text-gray-300 hover:text-primary-400"
      >
        <path
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        ></path>
      </svg>
      <svg
        id="drop-down"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 text-white"
      >
        <g transform="rotate(90 12 12)">
          <path d="M9 5l7 7-7 7"></path>
        </g>
      </svg>
    </div>

    <ul class="dropdown-content">
      <li
        v-for="(lang, index) in availableLanguage"
        v-on="lang.code != locale ? { click: () => handleSwitchLanguage(lang.code) } : {}"
        :class="{ notAllowed: lang.code === locale }"
        :key="index"
      >
        <img :src="lang.path" alt="" /> {{ lang.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#dropbtn {
  border: none;
  cursor: pointer;
  width: calc(30px + 20px);
}

.dropdown {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
}

.dropdown-content {
  display: none;
  position: absolute;
  transform: translateX(-25%);
  /* transform: translate(-50%, -50%); */
  background-color: rgb(233, 226, 226);
  border-radius: 7px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
  width: max-content;
  z-index: 1;
  cursor: pointer;
  padding: 5px;
}

.dropdown-content li {
  color: black;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.notAllowed:hover {
  cursor: not-allowed;
}

.dropdown-content li:hover {
  color: crimson;
}

.dropdown:hover .dropdown-content {
  display: inherit;
}

li img {
  width: 25px;
  height: auto;
}

#internationalization {
  width: 30px;
}

#drop-down {
  width: 20px;
}
</style>
