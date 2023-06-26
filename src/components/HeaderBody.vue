<template>
  <v-app-bar flat color="#17130E" style="position: relative;">

    <v-container width="80vw" class="d-flex justify-space-between px-10">

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
  ////////////////////////////////////////// ~~~
  // @/default/file.vue will be the main layout, rendering @/views inside, which will formed by @/components
// doing so i can use the v-app component as "top-level/parent" of files at @/components

</script>
