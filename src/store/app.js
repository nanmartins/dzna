// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    language: import.meta.env.VITE_DEFAULT_LOCALE
  }),
  actions: {
    toggleLanguage() {
      this.language = this.language === 'br' ? 'en' : 'br'
    }
  }
})
