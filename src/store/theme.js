// Utilities
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true,
    theme: 'dark',
  }),

  actions: {
    updateTheme(theme) {
      this.theme = theme
    }
  }
})
