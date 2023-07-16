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

    <v-app-bar flat color="nav" :height="56">

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

        <v-app-bar-nav-icon
          icon="mdi:mdi-account-circle-outline"
          class="text-texto"
        ></v-app-bar-nav-icon>

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

<script>
import NavLinks from './NavLinks.vue'

export default {
  name: 'HeaderBody',
  components: {
    NavLinks
  },
  data() {
    return {
      drawer: false,
      clienteWidth: null
    }
  },

  methods: {
    handleResize() {
      this.clienteWidth = window.innerWidth
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
  },

  // beforeUnmount() {
  //   window.removeEventListener('resize', this.handleResize)
  // },

  computed: {
    isMobile() {
      return this.clienteWidth < 1280
    }
  },

  created() {
    this.handleResize()
  }

}
</script>
