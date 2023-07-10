<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div v-for="(concurso) in concursos" :key="concurso.id">
        <!-- {{ concurso }} -->
        <h4>{{ concurso.tipo_concurso.descricao }}</h4>
        <h5>{{ concurso.tipo_apuracao.descricao }}</h5>
        <h4>
          Concurso: {{ concurso.id }}
          <span v-if="concurso.dt_final <= dataHoje" class="bg-red py-1 px-2 rounded ml-2">Inativo</span>
          <span v-else class="bg-green py-1 px-2 rounded ml-2">Ativo</span>
        </h4>
        <h4>Início do Concurso:
          <span v-if="concurso.tipo_concurso.descricao.includes('Sabado')">Sábado, </span>
          {{ concurso.dt_final }} as {{ concurso.hr_inicio.substring(0, 5) }}h
        </h4>


        <!-- <div v-if="concurso.dt_final === (String(new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()))"> -->

        <!-- {{ concurso.regiao_id }} -->

        <!-- </div> -->

        <!-- <div v-else> -->
          <!-- {{ concurso.desativado }} -->
        <!-- </div> -->
        <!-- {{ concurso.num_serie }}
        {{ concurso.faixa_inicial }}
        {{ concurso.faixa_final }} -->

        <v-card v-for="(bolao) in concurso.bolao" :key="bolao.id">
          <v-card-title>{{ bolao.premio_bolao }}</v-card-title>
          <v-card-subtitle>{{ bolao.tipo_bolao }}</v-card-subtitle>
          <v-card-text>{{ bolao.descricao }}</v-card-text>
        </v-card>

      </div>

      <!-- <v-card v-for="(concurso) in concursos" :key="concurso.id">
        <v-card-title>{{ concurso.bolao.premio_bolao }}</v-card-title>
        <v-card-subtitle>{{ concurso.bolao.tipo_bolao }}</v-card-subtitle>
        <v-card-text>{{ concurso.bolao.descricao }}</v-card-text>
      </v-card> -->

      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-view-dashboard" size="large" start />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon icon="mdi-speedometer" size="large" start />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-account-group" size="large" start />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      concursos: [],
      dataHoje: String(new Date().getDate()).padStart(2, 0)
        + '/' + String(new Date().getMonth()).padStart(2, 0)
        + '/' + String(new Date().getFullYear()),
    };
  },

  methods: {
    getConcursos() {
      fetch("http://localhost:3000/concursos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.concursos = data;
        });
    },
  },

  created() {
    this.getConcursos();
    // console.log(String(new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()))
  },
};
</script>
