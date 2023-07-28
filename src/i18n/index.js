import { createI18n } from "vue-i18n"
import messages from '@intlify/unplugin-vue-i18n/messages'

// const messages = {
//   br: {
//     nav: {
//       inicio: 'Inicio',
//       concursos: 'Concursos',
//       ganhadores: 'Ganhadores',
//       regulamento: 'Regulamento',
//       contato: 'Contato',
//       entrar: 'Entrar',
//       perguntas: 'Perguntas frequentes'
//     }
//   },
//   en: {
//     nav: {
//       inicio: 'Home',
//       concursos: 'Contests',
//       ganhadores: 'Winners',
//       regulamento: 'Rules',
//       contato: 'Contact',
//       entrar: 'Log in',
//       perguntas: 'FAQS'
//     }
//   }
// }

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})
