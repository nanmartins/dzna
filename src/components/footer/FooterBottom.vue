<template>
  <v-row class="pa-0 ma-0 py-10">
    <v-col cols="3" class="pa-0 ma-0">
      <v-card flat class="column-left bg-nav">
        <div>

          <v-card-title class="px-0 py-0 mb-10 text-h4">Footer</v-card-title>


          <div class="d-flex flex-column">
            <v-card-text flat class="px-0 py-2 text-body-2">
              Horário local: {{ liveTime }}
            </v-card-text>

            <v-row
              class="d-flex flex-row py-2 px-0 mx-0 mb-8 align-center"
              width="250px"
            >
              <v-img
                :width="40"
                inline
                class="px-0 mx-0"
                src="https://res.cloudinary.com/dpskrziq1/image/upload/c_crop/v1687996011/Brazil_pf2dtv.png"
              ></v-img>
              <v-card-text class="text-h6 px-0 py-0 ma-0 pl-2"
                >Português</v-card-text
              >
            </v-row>
          </div>

          <v-card class="pa-0 ma-0 bg-nav">
            <v-icon
              icon="mdi:mdi-toggle-switch"
              color="yellow-darken-2"
              class="pa-0 ma-0"
              :size="45"
            ></v-icon>
          </v-card>
        </div>
      </v-card>
    </v-col>

    <!-- ////// FOOTER BOTTOM - MID ////// -->
    <v-col min-width="400px" class="pa-0 ma-0">
      <v-card flat class="column-center bg-nav">

        <v-card-text class="pt-0 text-body-1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          delectus praesentium error numquam aut amet laudantium deleniti non
          dignissimos laboriosam, doloribus dolorem excepturi facilis nesciunt!
          Ad sunt dolore temporibus eaque?
        </v-card-text>

        <v-card-text class="text-body-1 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          perspiciatis aliquid veritatis tempora! Dolorum, officia! Ut quo fugit
          voluptatibus facere maxime ab eaque voluptates, natus dolores
          voluptas! Quis, aspernatur quasi!
        </v-card-text>

        <v-card-text class="text-body-1 text-justify">
          Mauris est egestas malesuada gidnissim nam.
        </v-card-text>

      </v-card>
    </v-col>

    <v-col cols="3" class="pa-0 ma-0">
      <v-card flat class="column-right bg-nav" outlined>
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
      this.liveTime = `
        ${String(date.getHours()).padStart(2, "0")}:
        ${String(date.getMinutes()).padStart(2, "0")}:
        ${String(date.getSeconds()).padStart(2, "0")}
        GMT ${-date.getTimezoneOffset() / 60 >= 0 ? " +" : " "}
        ${-date.getTimezoneOffset() / 60} `
    },
  },
};
</script>
