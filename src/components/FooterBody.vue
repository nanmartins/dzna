<template>
  <v-footer class="bg-grey-darken-4" style="top: 50px;">
    <v-row justify="center" no-gutters>

      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2 text-white"
      >
        {{ link }}
      </v-btn>

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>

    </v-row>
  </v-footer>

</template>

<script>
  export default {
    data() {
      return {
        links: ['Sobre', 'Contato', 'Endereco']
      }
    }
  }
  ////////////////////////////////////////// ~~~
  // @/default/file.vue will be the main layout, rendering @/views inside, which will formed by @/components
// doing so i can use the v-app component as "top-level/parent" of files at @/components

</script>
