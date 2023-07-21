<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    @click="rail = !rail"
    style="height: fit-content"
    class="py-4 rounded-be-xl bg-nav text-texto elevation-1"
  >
    <v-list-item
      prepend-icon="mdi:mdi-menu"
      :width="24"
      style="cursor: pointer"
      class="pl-4 pt-6"
    >
    </v-list-item>

    <v-list density="compact" @click="rail = false">
        <NavLinks />
    </v-list>

  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import NavLinks from './NavLinks.vue'

const rail = ref(true)
const drawer = ref(null)
</script>
