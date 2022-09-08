import { defineNuxtConfig } from 'nuxt'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import svgLoader from "vite-svg-loader"

 // https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      }),
      svgLoader({
        defaultImport: 'url'
      })
    ]
  },
  css: ['~/assets/main.css'],
  ssr: false
})
