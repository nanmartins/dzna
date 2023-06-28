<template>
  <v-footer color="#17130E">
    <v-row justify="center" no-gutters>

      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2 text-white"
      >
        {{ link }}
      </v-btn>

      <v-col class="text-center mt-4 text-white" cols="12">
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
</script>
