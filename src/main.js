import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import './assets/main.css'

import App from './App.vue'
import router from './router'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  fallbackLocale: 'en',
  availableLocales: ['fr', 'en'],
  messages: messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
