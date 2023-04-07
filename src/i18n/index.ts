import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    fr
  }
})
