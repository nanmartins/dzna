<template>
  <v-footer color="#17130E">

    <v-container
      width="75vw"
      class="d-flex justify-center align-center px-10 py-0"
    >

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
        <v-col class="d-flex flex-fill justify-center py-8">

          <div class="d-flex flex-row pa-0 ma-0">
            <div class="d-flex flex-row pa-0 ma-0">
              <v-img src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687985658/footer-pix-logo_mt4hpg.png"></v-img>
            </div>
            <div class="d-flex flex-row pa-0 ma-0 ml-2">
              <v-img src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687985674/foooter-pix_juit9t.png"></v-img>
            </div>
          </div>

          <div class="d-flex flex-row pa-0 ma-0 ml-8">
            <v-img
              color="grey-lighten-1"
              src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687987430/footer-circle_hx4l7p.png"
              class="text-center align-center text-h5 font-weight-bold"
            >+18</v-img>
          </div>

        </v-col>

        <!-- //////////////////////   DIVIDER  ////////////////// -->
        <v-divider :thickness="2" color="#ffffff"></v-divider>


        <div class="d-flex flex-column">

        </div>
        <v-col class="d-flex flex-fill text-center mt-4 text-white" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>

      </v-row>

    </v-container>

    <!-- </v-row> -->
  </v-footer>

</template>

<script>

  import footerPixLogo from '@/src/assets/footer-pix-logo.png'
  import footerPix from '@/src/assets/footer-pix.png'

  export default {
    data() {
      return {
        links: ['Sobre', 'Contato', 'Endereco'],
        pix01: footerPixLogo,
        pix02: footerPix
      }
    }
  }
</script>
