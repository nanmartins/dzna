/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)


// app.config.globalProperties.$appContext.app.config.globalProperties.$options.filters['numeroPreco'] = valor => {
//   valor = Number(valor)
//   if (!isNaN(valor)) {
//     return valor.toLocaleString("pt-BR", {
//       style: 'currency',
//       currency: 'BRL'
//     })
//   }
//   else {
//     return ""
//   }
// }

app.mount('#app')
