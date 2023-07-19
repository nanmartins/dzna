<template>
  <v-app :theme="themeStore.theme">
    <HeaderBody />
    <SideNav />
      <router-view />
    <FooterBody />
  </v-app>
</template>

<script setup>
import HeaderBody from "@/components/HeaderBody.vue"
import SideNav from "@/components/SideNav.vue"
import FooterBody from "@/components/footer/FooterBody.vue"
import { useThemeStore } from '@/store/theme'

const themeStore = useThemeStore()
</script>
