<template>
  <v-container class="fill-height" color="#212121">
    <v-responsive class="align-center text-center fill-height">
      <div v-for="(concurso) in concursos" :key="concurso.id">
        <!-- {{ concurso }} -->
        {{ concurso.regiao_id }}
        {{ concurso.num_serie }}
        {{ concurso.faixa_inicial }}
        {{ concurso.faixa_final }}
        {{ concurso.tipo_concurso.descricao }}
        {{ concurso.tipo_apuracao.descricao }}

      </div>
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
  // e1db06e8ac14c72f3622082e83772c0b832d5117432f44fd1662c3a40c4d02ed7b8732697dbe1cc4734e2c50c0267574a6203a75a2b91ca734a45b901fb21aa7cdbdb4cbacf2abea946f615f37a058ff73f9f89b93ae5d38a4373f95670dcce85b1a247e238dc287d96872852412e419ebf68b01c77e4eea0b8f143ffbdbc582

  created() {
    this.getConcursos();
  },
};
</script>
