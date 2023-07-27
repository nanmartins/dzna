import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const messages = {
  br: {
    message: {
      hello: 'Olá mundo'
    }
  },
  en: {
    message: {
      hello: 'Hello world'
    }
  }
}

const i18n = createI18n({
  locale: 'br',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)


registerPlugins(app)

app.component('ThemeSwitch', ThemeSwitch)

app.use(createPinia)
app.use(i18n)
app.mount('#app')
