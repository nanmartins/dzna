<template>
  <v-footer class="py-0 px-0 bg-nav">
    <v-container
      class="d-flex justify-center align-center py-0"
    >
      <!-- //////////////////////   FOOTER TOP  //////////////////////////// -->
      <v-row class="pa-0 ma-0">
        <v-col class="d-flex flex-fill justify-center py-8">
          <div class="d-flex flex-row pa-0 ma-0">
            <v-img
              src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687985658/footer-pix-logo_mt4hpg.png"
            ></v-img>

            <v-img
              src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687985674/foooter-pix_juit9t.png"
              class="ml-2"
            ></v-img>
          </div>

          <div class="d-flex flex-row pa-0 ma-0 ml-8">
            <v-img
              color="grey-lighten-1"
              src="https://res.cloudinary.com/dpskrziq1/image/upload/v1687987430/footer-circle_hx4l7p.png"
              class="text-center align-center text-h5 font-weight-bold"
              >+18</v-img
            >
          </div>
        </v-col>

        <!-- //////////////////////   DIVIDER  ////////////////// -->
        <v-divider :thickness="2"></v-divider>

        <!-- /////////////////////   FOOTER BOTTOM  ////////////////////// -->
        <FooterBottom />

      </v-row>
    </v-container>

    <!-- </v-row> -->
  </v-footer>
</template>

<script setup>
import FooterBottom from "@/components/footer/FooterBottom.vue";

</script>
