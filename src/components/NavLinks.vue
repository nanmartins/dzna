<template>
  <div>
    <v-list>
      <router-link to="/" class="text-decoration-none text-texto">
        <v-list-item
          prepend-icon="mdi:mdi-home"
          value="inicio"
        >{{ $t('nav.inicio') }}</v-list-item>
      </router-link>

      <router-link to="/concursos" class="text-decoration-none text-texto">
        <v-list-item
          prepend-icon="mdi:mdi-calendar"
          value="concursos"
        >{{ $t('nav.concursos') }}</v-list-item>
      </router-link>

      <router-link to="/concursos" class="text-decoration-none text-texto">
        <v-list-item
          prepend-icon="mdi:mdi-minus"
          value="ganhadores"
        >{{ $t('nav.ganhadores') }}</v-list-item>
      </router-link>

      <v-list-item
        prepend-icon="mdi:mdi-minus"
        value="regulamento"
      >{{ $t('nav.regulamento') }}</v-list-item>

      <v-list-item
        prepend-icon="mdi:mdi-minus"
        value="perguntas"
      >{{ $t('nav.perguntas') }}</v-list-item>

      <v-list-item
        prepend-icon="mdi:mdi-minus"
        value="contato"
      >{{ $t('nav.contato') }}</v-list-item>

      <v-list-item
        prepend-icon="mdi:mdi-minus"
        value="entrar"
      >{{ $t('nav.entrar') }}</v-list-item>
    </v-list>
  </div>
</template>

<script setup>
</script>
