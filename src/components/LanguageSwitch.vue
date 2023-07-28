<template>
  <select @change="switchLanguage" class="bg-nav pa-2">
    <option
      v-for="(sLocale) in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Translate from "@/i18n/translation.js"

const { t, locale } = useI18n()
const supportedLocales = Translate.supportedLocales
const switchLanguage = async (event) => {
  const newLocale = event.target.value
  await Translate.switchLanguage(newLocale)
}
</script>
