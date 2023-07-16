import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'
import App from './App.vue'


const app = createApp(App)
// const pinia = createPinia()

registerPlugins(app)

// app.use(pinia)
app.mount('#app')
