<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    color="#1F1B16"
    permanent
    @click="rail = !rail"
    style="height: fit-content"
    class="py-4 rounded-be-xl"
  >
    <v-list-item
      prepend-icon="mdi:mdi-menu"
      :width="24"
      style="cursor: pointer"
      class="pl-4 py-6"
    >
    </v-list-item>

    <v-list density="compact" nav>
      <!-- <router-link to="/"> -->
        <v-list-item
          prepend-icon="mdi:mdi-home"
          title="Inicio"
          value="home"
        ></v-list-item>
      <!-- </router-link> -->

      <!-- <router-link to="/concursos"> -->
        <v-list-item
          prepend-icon="mdi:mdi-calendar"
          title="Concursos"
          value="concursos"
        ></v-list-item>
      <!-- </router-link> -->

      <v-list-item
        prepend-icon="mdi:mdi-minus"
        title="Ganhadores"
        value="ganhadores"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi:mdi-minus"
        title="Regulamento"
        value="regulamento"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi:mdi-minus"
        title="Perguntas Frequentes"
        value="perguntas"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi:mdi-minus"
        title="Contatos"
        value="contato"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi:mdi-minus"
        title="Entrar"
        value="entrar"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      rail: true,
      drawer: "",
    };
  },
};
</script>
