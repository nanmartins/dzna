<template>

  <v-row class="pa-0 ma-0 py-8">

        <!-- ////// FOOTER BOTTOM - LEFT ////// -->
        <div width="250px" class="d-flex flex-column px-0">

          <!-- FOOTER LOGO -->
          <v-card class="px-0 py-0" color="#17130E">
            <v-card-title class="px-0 py-0">Footer</v-card-title>
          </v-card>

          <!-- FOOTER TIME / LANGUAGE -->
          <div class="d-flex flex-column">

            <v-card color="#17130E" class="d-flex px-0 mx-0">
              <v-card-text flat class="px-0">
                {{ `Horário local: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  GMT ${-date.getTimezoneOffset() / 60 >= 0 ? ' +' : ' '}${-date.getTimezoneOffset() / 60} `}}
                <!-- {{ date.toUTCString() }} -->
              </v-card-text>
            </v-card>

            <v-card flat color="#17130E" class="d-flex justify-start">
              <v-row class="d-flex flex-row py-2 px-0 mx-0 align-center" width="250px">

                <v-img
                  :height="40"
                  :width="54"
                  inline
                  class="px-0 mx-0"
                  src="https://res.cloudinary.com/dpskrziq1/image/upload/c_crop/v1687996011/Brazil_pf2dtv.png"
                ></v-img>
                <v-card-text class="text-h6 px-0 ma-0 pl-2">Português</v-card-text>

              </v-row>
            </v-card>

          </div>

          <!-- FOOTER SWTICH -->
          <v-card flat color="#17130E">
            <v-icon color="yellow-darken-2" icon="mdi:mdi-toggle-switch"></v-icon>
          </v-card>

        </div>

        <!-- ////// FOOTER BOTTOM - MID ////// -->
        <v-col class="px-4">
          <v-card flat color="#17130E">
            <v-card-text class="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus praesentium error numquam aut amet laudantium deleniti non dignissimos laboriosam, doloribus dolorem excepturi facilis nesciunt! Ad sunt dolore temporibus eaque?
            </v-card-text>

            <v-card-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perspiciatis aliquid veritatis tempora! Dolorum, officia! Ut quo fugit voluptatibus facere maxime ab eaque voluptates, natus dolores voluptas! Quis, aspernatur quasi!
            </v-card-text>

            <v-card-text>
              Mauris est egestas malesuada gidnissim nam.
            </v-card-text>

          </v-card>

        </v-col>

        <!-- ////// FOOTER BOTTOM RIGHT ////// -->
        <div width="250px">
          Lorem ipsum
        </div>
      </v-row>

</template>

<script>

export default {
  name: 'FooterBottom',
  data() {
    return {
      date: new Date(),
    }
  }
}
</script>
