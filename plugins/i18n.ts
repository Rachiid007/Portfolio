import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fr',
    fallbackLocale: 'en',
    availableLocales: ['fr', 'en'],
    messages: messages
  })

  vueApp.use(i18n)
})
