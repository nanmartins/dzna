<template>
  <v-footer color="#17130E">

    <!-- <v-row justify="center" no-gutters> -->

      <!-- <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2 text-white"
      >
        {{ link }}
      </v-btn> -->

      <!-- <v-col>

      </v-col> -->

    <!-- ////////////////  FOOTER TOP  /////////////////////  -->
    <v-row>
      <v-col class="d-flex flex-fill justify-center">
        <div class="d-flex flex-row pa-0 ma-0">
          <div class="d-flex flex-row pa-0 ma-0">
            img1
          </div>
          <div class="d-flex flex-row pa-0 ma-0">
            img2
          </div>
        </div>

        <div class="d-flex flex-row pa-0 ma-0 ml-3">
          texte 02
        </div>
      </v-col>

      <div class="d-flex flex-column">

      </div>
      <v-col class="d-flex flex-fill text-center mt-4 text-white" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>

    </v-row>


    <!-- </v-row> -->
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
