<template>
  <div class="bg-fundo pb-10">
    <v-container>
      <v-responsive class="align-center text-center text-texto">

        <h1 class="text-h4 text-md-h3 font-weight-bold py-10 mt-md-8">{{ resultados.length }} Resultados</h1>

        <div class="d-flex flex-wrap justify-center">

          <div
            v-for="(resultado) in resultados"
            :key="resultado.id"
            class="d-flex flex-row align-center justify-center"
          >
            <v-card
              class="d-flex flex-column ma-2 px-1 bg-highlight rounded-lg elevation-4"
              style="background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1%, rgba(255, 255, 255, 0.5) 20% 85%, rgba(0, 0, 0, 0.02)"
            >

              <div class="pa-4">
                <v-card-subtitle class="text-h6">
                  {{ resultado.descricao }}, {{ resultado.regiao_id }}
                </v-card-subtitle>
                <v-card-title class="text-h5">{{ resultado.dia_apuracao }}, {{ resultado.dt_apuracao }}</v-card-title>
                <v-card-text class="text-h6 font-weight-bold pb-0">
                  {{ resultado.hr_apuracao.slice(0, 2) }}h {{ resultado.regiao_id }}
                </v-card-text>
              </div>

              <div class="bg-white py-4">
                <ul v-for="(value, key) in resultado.ranking" :key="key">
                  <h2 class="text-h5 font-weight-normal">{{ key }} - {{ value }}</h2>
                </ul>
              </div>

              <div class="d-flex flex-wrap justify-center bg-grey-lighten-3">
                <div v-for="(numero, index) in resultado.num_sorteados" :key="index">
                  <h6 class="text-subtitle-2 pt-2 px-1">{{ numero }}</h6>
                </div>
              </div>
              <div class="d-flex justify-center bg-grey-lighten-3 pb-1">
                <h6 class="text-subtitle-1">**{{ resultado.num_ordem}}</h6>
              </div>

              <h6 class="text-center text-subtitle-1 font-weight-bold py-2">Lançado às: {{ resultado.hr_apuracao.slice(0, 5) }}h</h6>
            </v-card>

          </div>

        </div>


      </v-responsive>
    </v-container>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const resultados = ref([])

const getResultados = () => {
  fetch("http://localhost:3000/resultados")
    .then((response) => response.json())
    .then((data) => {
      resultados.value = data;
    })
}

onMounted(() => {
  getResultados()
})

</script>
