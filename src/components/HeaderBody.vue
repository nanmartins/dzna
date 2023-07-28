<template>
<div>
  <v-col
    :cols="12"
    :md="12"
    :lg="8"
    :xl="12"
    :xxl="12"
    class="mx-auto"
  >

    <v-app-bar flat class="bg-nav elevation-1" :height="56">

      <v-container
        :height="55"
        class="d-flex justify-space-between align-center py-0"
      >

        <div v-if="isMobile">
          <v-app-bar-nav-icon
            icon="mdi:mdi-menu"
            @click.stop="drawer = !drawer"
            class="text-texto"
          ></v-app-bar-nav-icon>
        </div>

        <router-link to="/" class="text-texto text-decoration-none px-6">
          <v-app-bar-title>Navbar</v-app-bar-title>
        </router-link>

        <div class="d-flex align-center">
          <!-- <ThemeSwitch></ThemeSwitch> -->
          <v-app-bar-nav-icon
            icon="mdi:mdi-account-circle-outline"
            class="text-texto"
          ></v-app-bar-nav-icon>
        </div>

      </v-container>

    </v-app-bar>

    <div>
      <v-navigation-drawer
      v-model="drawer"
      location="left"
      class="bg-fundo rounded-be-xl"
      style="height: fit-content"
      temporary
      >
        <NavLinks />
      </v-navigation-drawer>
    </div>

  </v-col>

</div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import NavLinks from './NavLinks.vue'

const drawer = ref(false)
const clienteWidth = ref(null)

const handleResize = () => {
  clienteWidth.value = window.innerWidth
}

const isMobile = computed(() => {
  return clienteWidth.value < 1280
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

</script>
