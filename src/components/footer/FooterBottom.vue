<template>
  <v-row class="pa-0 ma-0 py-10">
    <!-- <v-col cols="" class="pa-0 ma-0"> -->

      <!-- //////////////////////////////////////// FOOTER LOGO ////////////////////////////////////////// -->
      <v-col
        :cols="6"
        :md="3"
        :lg="3"
        :xl="3"
        :xxl="3"
        class="py-0 px-0"
      >
      <v-card flat class="column-left bg-nav">
        <div>

          <v-card-title class="px-0 py-0 mb-10 text-h4">Footer</v-card-title>


          <div class="flex-column">
            <v-card-text flat class="px-0 py-2 text-caption text-md-body-2">
              Horário local: {{ liveTime }}
            </v-card-text>

            <v-row
              class="d-flex flex-row py-2 px-0 mx-0 mb-8 align-center"
              width="250px"
            >
              <v-img
                :width="40"
                inline
                class="px-0 mx-0 mr-2"
                src="https://res.cloudinary.com/dpskrziq1/image/upload/c_crop/v1687996011/Brazil_pf2dtv.png"
              ></v-img>
              <v-card-text class="text-subtitle-2 text-md-h6 px-0 py-0 ma-0"
                >Português</v-card-text
              >
            </v-row>
          </div>

          <v-card class="pa-0 ma-0 pl-1 bg-nav">
            <v-switch label="Switch"></v-switch>
            <!-- <v-icon
              icon="mdi:mdi-toggle-switch"
              color="yellow-darken-2"
              class="pa-0 ma-0"
              :size="45"
            ></v-icon> -->
          </v-card>
        </div>
      </v-card>
    </v-col>

    <!-- ////// FOOTER BOTTOM - MID ////// -->

      <!-- <v-col v-if="changeLayout" min-width="400px" class="pa-0 ma-0"> -->
      <v-col
        v-if="changeLayout"
        :cols="6"
        :md="6"
        :lg="6"
        :xl="6"
        :xxl="6"
        min-width="400px"
        class="pa-0 ma-0"
      >

        <v-card flat class="column-center bg-nav px-0 mx-0">

          <!-- <div v-show="changeLayout"> -->

          <v-card-text class="pt-0 text-md-body-1 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            delectus praesentium error numquam aut amet laudantium deleniti non
            dignissimos laboriosam, doloribus dolorem excepturi facilis nesciunt!
            Ad sunt dolore temporibus eaque?
          </v-card-text>

          <v-card-text class="text-md-body-1 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            perspiciatis aliquid veritatis tempora! Dolorum, officia! Ut quo fugit
            voluptatibus facere maxime ab eaque voluptates, natus dolores
            voluptas! Quis, aspernatur quasi!
          </v-card-text>

          <v-card-text class="text-md-body-1 text-justify">
            Mauris est egestas malesuada gidnissim nam.
          </v-card-text>

          <!-- </div> -->
        </v-card>

      </v-col>

    <!-- <v-col cols="3" class="pa-0 ma-0"> -->
    <v-col
      :cols="6"
      :md="3"
      :lg="3"
      :xl="3"
      :xxl="3"
      min-width="400px"
      class="pa-0 ma-0"
    >
      <v-card flat class="column-right bg-nav" outlined>
        <div width="250px">
          <v-card-text class="text-md-h6 text-end pt-0 px-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="text-md-h6 text-end pt-0 px-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="text-md-h6 text-end pt-0 px-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="text-md-h6 text-end pt-0 px-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="text-md-h6 text-end pt-0 px-0"
            >Lorem Ipsum</v-card-text
          >
        </div>
      </v-card>
    </v-col>


    <div v-if="!changeLayout" class="mt-4">

      <h3 class="text-center py-4">Sobre Nós</h3>

      <v-card flat class="column-center bg-nav">
        <v-card-text class="pt-0 text-md-body-1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          delectus praesentium error numquam aut amet laudantium deleniti non
          dignissimos laboriosam, doloribus dolorem excepturi facilis nesciunt!
          Ad sunt dolore temporibus eaque?
        </v-card-text>

        <v-card-text class="text-md-body-1 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          perspiciatis aliquid veritatis tempora! Dolorum, officia! Ut quo fugit
          voluptatibus facere maxime ab eaque voluptates, natus dolores
          voluptas! Quis, aspernatur quasi!
        </v-card-text>

        <v-card-text class="text-md-body-1 text-justify">
          Mauris est egestas malesuada gidnissim nam.
        </v-card-text>

      </v-card>
    </div>

  </v-row>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'

const liveTime = ref('')
const changeLayout = ref(false)

const updateTime = () => {
const date = new Date();
  liveTime.value = `
    ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")},
    GMT ${-date.getTimezoneOffset() / 60 >= 0 ? " +" : " "}
    ${-date.getTimezoneOffset() / 60} `
}

const mobileLayout = () => {
  changeLayout.value = window.innerWidth >= 960
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
  mobileLayout()
  window.addEventListener('resize', mobileLayout)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', mobileLayout)
})

</script>

<style scoped>
@media (max-width: 550px) {
  .change-layout {
    display: none;
  }
}
</style>
