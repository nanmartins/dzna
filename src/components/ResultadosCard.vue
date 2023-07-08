<template>
  <div style="background: #1f1b16">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">

        <h2 class="text-h4 font-weight-bold py-10">{{ resultados.length }} Resultados</h2>

        <div class="d-flex flex-wrap justify-center">

          <div
            v-for="(resultado) in resultados"
            :key="resultado.id"
            class="col col-12 col-sm-6 col-md-4 col-lg-4 d-flex flex-row align-center justify-center"
          >
            <v-card class="d-flex flex-column ma-2 px-1 bg-grey-darken-1">

              <div class="pa-4">
                <v-card-subtitle>
                  {{ resultado.descricao}}, {{ resultado.regiao_id}}
                </v-card-subtitle>
                <v-card-title>{{ resultado.dia_apuracao }}, {{ resultado.dt_apuracao }}</v-card-title>
                <v-card-text class="pb-0">
                  <h3>{{ resultado.hr_apuracao.slice(0, 2) }}h {{ resultado.regiao_id }}</h3>

                </v-card-text>
              </div>

              <div class="bg-white py-4">
                <ul v-for="(key, value) in resultado.ranking" :key="key">
                  <h2>{{ value }} - {{ key }}</h2>
                </ul>
              </div>

              <div class="d-flex flex-wrap justify-center bg-grey-lighten-2">
                <div v-for="(numero, index) in resultado.num_sorteados" :key="index">
                  <h6 class="py-2 px-1">{{ numero }}</h6>
                </div>
              </div>
              <div class="d-flex justify-center bg-grey-lighten-2 pb-1">
                <h6 class="text-weight-light">**{{ resultado.num_ordem}}</h6>
              </div>

              <h6 class="text-center py-2">Lançado às: {{ resultado.hr_apuracao.slice(0, 5) }}h</h6>
            </v-card>
            <!-- {{ resultado }} -->
          </div>

        </div>


      </v-responsive>
    </v-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      resultados: []
    }
  },

  methods: {
    getResultados() {
      fetch("http://localhost:3000/resultados")
        .then((response) => response.json())
        .then((data) => {
          this.resultados = data;
        });
    }
  },

  created() {
    this.getResultados()
  }

}
</script>
