<template>
  <v-app-bar flat color="#17130E" :height="56">

    <v-container class="d-flex justify-space-between align-center px-10" :height="56">

      <router-link to="/" class="text-white text-decoration-none px-8">
        <v-app-bar-title>Navbar</v-app-bar-title>
      </router-link>

      <v-btn variant="text" class="mx-2">
        <v-icon icon="mdi:mdi-account-circle-outline" size="24" color="grey"></v-icon>
      </v-btn>


    </v-container>

  </v-app-bar>

</template>

<script setup>

</script>
