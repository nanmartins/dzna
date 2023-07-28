import i18n from "./index.js"

const Translate = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale) {
    Translate.currentLocale = newLocale
    document.querySelector('html').setAttribute('lang', newLocale)
  }
}

export default Translate
