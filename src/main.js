import { createApp } from 'vue/dist/vue.esm-bundler'
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

import i18n from './i18n'
import App from './App.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const app = createApp(App)

registerPlugins(app)

app.component('ThemeSwitch', ThemeSwitch)
app.use(i18n)
app.use(createPinia)
app.mount('#app')
