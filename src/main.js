import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import App from './App.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const app = createApp(App)

registerPlugins(app)
app.component('ThemeSwitch', ThemeSwitch)
app.use(createPinia)
app.mount('#app')
