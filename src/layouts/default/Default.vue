<template>
  <v-app>
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
</script>
