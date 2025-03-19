import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en/translations.json'
import fi from './locales/fi/translations.json'
import sv from './locales/sv/translations.json'
import './styles/main.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fi,
    sv
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
