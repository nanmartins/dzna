<template>
  <v-app-bar flat color="nav" :height="56">

    <v-container
      :height="55"
      width="75vw"
      class="d-flex justify-space-between align-center px-10 py-0"
    >

      <router-link to="/" class="text-white text-decoration-none px-8">
        <v-app-bar-title class="text-grey-lighten-1">Navbar</v-app-bar-title>
      </router-link>

      <v-btn variant="text" class="mr-2">
        <v-icon
          icon="mdi:mdi-account-circle-outline"
          size="24"
          color="grey-lighten-1"
        ></v-icon>
      </v-btn>


    </v-container>

  </v-app-bar>

</template>

<script setup>

</script>
