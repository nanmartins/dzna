/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#1867C0',
          warning: '#F44336',
          secondary: '#5CBBF6',
          fundo: '#1f1b16',
          nav: '#17130E',
          contraste: '#212121',
          highlight: '#171717',
          texto: '#cad2c5',
          verde: '#b2fa8f',
        },
      },
      light: {
        colors: {
          primary: '#1867C0',
          warning: '#F44336',
          secondary: '#5CBBF6',
          fundo: '#FFFFFF',
          nav: '#FFF8F4',
          contraste: '#edf6f7',
          highlight: '#FCF2EA',
          texto: '#363020',
          verde: '#b2fa8f',
        },
      },
    },
  },

  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})
