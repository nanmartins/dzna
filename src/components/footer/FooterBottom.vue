<template>
  <v-row class="pa-0 ma-0 py-10 px-12" width="70vw">
    <v-col cols="3" class="pa-0 ma-0">
      <v-card class="column-left" outlined color="#17130E">
        <div>
          <!-- FOOTER LOGO -->
          <!-- <v-card class="px-0 py-0" color="#17130E"> -->
          <v-card-title class="px-0 py-0 mb-10 text-h4">Footer</v-card-title>
          <!-- </v-card> -->

          <!-- FOOTER TIME / LANGUAGE -->
          <div class="d-flex flex-column">
            <!-- <v-card color="#17130E" class="d-flex px-0 mx-0"> -->
            <v-card-text flat class="px-0 text-caption">
              Horário local: {{ liveTime }}
              <!-- {{ `Horário local: ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}  GMT ${-date.getTimezoneOffset() / 60 >= 0 ? ' +' : ' '}${-date.getTimezoneOffset() / 60} `}} -->
            </v-card-text>
            <!-- </v-card> -->

            <!-- <v-card flat color="#17130E"> -->
            <v-row
              class="d-flex flex-row py-2 px-0 mx-0 mb-10 align-center"
              width="250px"
            >
              <v-img
                :height="40"
                :width="45"
                inline
                class="px-0 mx-0"
                src="https://res.cloudinary.com/dpskrziq1/image/upload/c_crop/v1687996011/Brazil_pf2dtv.png"
              ></v-img>
              <v-card-text class="text-h6 px-0 ma-0 pl-2"
                >Português</v-card-text
              >
            </v-row>
            <!-- </v-card> -->

            <v-card elevation="none" color="#17130E" class="pb-0">
              <v-icon
                icon="mdi:mdi-toggle-switch"
                color="yellow-darken-2"
                :size="45"
              ></v-icon>
            </v-card>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col min-width="400px" class="pa-0 ma-0">
      <!-- Coluna central -->
      <v-card
        flat
        class="column-center"
        color="#17130E"
        outlined
        style="word-break: break-all"
      >
        <!-- Conteúdo da coluna central -->

        <!-- ////// FOOTER BOTTOM - MID ////// -->
        <!-- <v-col class="px-4 py-0 my-0"> -->
        <!-- <v-card flat color="#17130E"> -->
        <v-card-text class="py-0 text-body-1 font-weight-light text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          delectus praesentium error numquam aut amet laudantium deleniti non
          dignissimos laboriosam, doloribus dolorem excepturi facilis nesciunt!
          Ad sunt dolore temporibus eaque?
        </v-card-text>

        <v-card-text
          color="#616161"
          class="text-body-1 font-weight-light text-start"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          perspiciatis aliquid veritatis tempora! Dolorum, officia! Ut quo fugit
          voluptatibus facere maxime ab eaque voluptates, natus dolores
          voluptas! Quis, aspernatur quasi!
        </v-card-text>

        <v-card-text class="text-body-1 font-weight-light text-start pb-0 mb-0">
          Mauris est egestas malesuada gidnissim nam.
        </v-card-text>

        <!-- </v-card> -->

        <!-- </v-col> -->
      </v-card>
    </v-col>

    <v-col cols="3" class="pa-0 ma-0">
      <!-- Coluna da direita -->
      <v-card flat class="column-right" color="#17130E" outlined>
        <!-- Conteúdo da coluna da direita -->

        <div width="250px">
          <v-card-text class="d-flex text-h6 justify-end pt-0 pr-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="d-flex text-h6 justify-end pt-0 pr-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="d-flex text-h6 justify-end pt-0 pr-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="d-flex text-h6 justify-end pt-0 pr-0"
            >Lorem Ipsum</v-card-text
          >
          <v-card-text class="d-flex text-h6 justify-end pt-0 pr-0"
            >Lorem Ipsum</v-card-text
          >
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FooterBottom",
  data() {
    return {
      date: new Date(),
      liveTime: "",
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const timeZoneSet = -date.getTimezoneOffset() / 60;
      const timeZoneOp = timeZoneSet >= 0 ? " +" : " ";
      this.liveTime = `${hours}:${minutes}:${seconds}  GMT${
        timeZoneOp + timeZoneSet
      }`;
    },
  },
};
</script>
