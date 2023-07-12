<template>
  <div>
    <v-list>
      <router-link to="/" class="text-decoration-none text-grey-lighten-1">
        <v-list-item
          prepend-icon="mdi:mdi-home"
          title="Inicio"
          value="home"
        ></v-list-item>
      </router-link>

      <router-link to="/concursos" class="text-decoration-none text-grey-lighten-1">
        <v-list-item
          prepend-icon="mdi:mdi-calendar"
          title="Concursos"
          value="concursos"
        ></v-list-item>
      </router-link>

      <router-link to="/concursos" class="text-decoration-none text-grey-lighten-1">
        <v-list-item
          prepend-icon="mdi:mdi-minus"
          title="Ganhadores"
          value="ganhadores"
        ></v-list-item>
      </router-link>

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
  </div>
</template>

<script>
export default {
  name: 'NavLinks'
}
</script>
