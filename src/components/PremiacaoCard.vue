<template>
  <div width="100vw" class="bg-fundo">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <div v-for="concurso in concursos" :key="concurso.id">
          <!-- {{ concurso }} -->
          <h1 class="text-h3 font-weight-bold mt-10">
            {{ concurso.tipo_concurso.descricao }}
          </h1>
          <h3 class="text-h5 font-weight-light mb-6">{{ concurso.tipo_apuracao.descricao }}</h3>
          <h4 class="text-h5 font-weight-bold">
            Concurso: {{ concurso.id }}
            <span
              v-if="concurso.dt_final <= dataHoje || concurso.desativado === 'true'"
              class="bg-red py-1 px-3 rounded ml-2"
            >Finalizado</span>
            <span v-else class="bg-green py-1 px-2 rounded ml-2">Ativo</span>
          </h4>

          <h4 class="text-h6 py-4">
            Início do Concurso:
            <span v-if="concurso.tipo_concurso.descricao.includes('Sabado')"
              >Sábado,
            </span>
            {{ concurso.dt_final }} as {{ concurso.hr_inicio.substring(0, 5) }}h
          </h4>

          <h1 class="text-h3 font-weight-bold py-4">
            {{ formatarValor(totalPremios) }} em
            {{ Object.keys(concurso.bolao).length }} premiações
          </h1>

          <div class="d-flex flex-wrap justify-center">
            <div
              v-for="(bolao, index) in concurso.bolao"
              :key="bolao.id"
              class="d-flex flex-row align-center justify-center"
            >
              <v-card
                :class="[
                  'd-flex',
                  'flex-column',
                  'ma-2',
                  'position-relative',
                  `bg-${this.cores[index]}`,
                ]"
                height="480px"
                width="360px"
                style="overflow: visible"
              >
                <div
                  class="position-absolute text-h4"
                  style="
                    top: 20px;
                    right: 106px;
                    transform: translate(100%, -100%) rotate(5deg);"
                >
                  <span
                    v-if="bolao.finalizado === 'false'"
                    class="bg-green rounded-lg px-3 py-1 text-body-1 font-weight-bold"
                  >Acumulado!</span>
                </div>

                <v-card-title class="text-h4 py-8 font-weight-black">
                  {{ formatarValor(bolao.premio_bolao) }}
                </v-card-title>

                <div
                  class="d-flex flex-column align-center rounded bg-grey-lighten-2 mx-2 py-12"
                >
                  <v-card-subtitle class="text-h4 pa-6 font-weight-black">{{
                    bolao.tipo_bolao
                  }}</v-card-subtitle>
                  <v-card-text class="text-subtitle-1 py-2">{{
                    bolao.descricao
                  }}</v-card-text>
                </div>

                <div
                  v-if="parseInt(bolao.status) > 0"
                  class="d-flex flex-column fill-height py-6"
                >
                  <v-card-text class="text-h5 font-weight-bold">
                    {{ bolao.status }} Ganhadores
                  </v-card-text>
                  <v-card-text class="text-h5 pb-0 font-weight-bold">
                    {{
                      formatarValor(
                        (bolao.premio_bolao / parseInt(bolao.status)).toFixed(2)
                      )
                    }}
                  </v-card-text>
                  <div class="text-subtitle-1">Premio para cada ganhador</div>
                </div>

                <v-card-text
                  v-else
                  class="d-flex align-center text-h5 font-weight-medium"
                >
                  {{ bolao.status }}
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>

import { formatarValor } from '@/helpers.js'

export default {
  data() {
    return {
      concursos: [],
      cores: ["purple", "indigo", "teal", "pink", "light-blue", "deep-purple-accent-3"],
      dataHoje:
        String(new Date().getDate()).padStart(2, 0) +
        "/" +
        String(new Date().getMonth()).padStart(2, 0) +
        "/" +
        String(new Date().getFullYear()),
    };
  },

  methods: {
    getConcursos() {
      fetch("http://localhost:3000/concursos")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data[0].bolao)
          this.concursos = data;
        });
    },

    // formatarValor(valor) {
    //   const valorNumerico = Number(valor);
    //   if (!isNaN(valorNumerico)) {
    //     return valorNumerico.toLocaleString("pt-BR", {
    //       style: "currency",
    //       currency: "BRL",
    //     });
    //   } else {
    //     return "";
    //   }
    // },

  },

  computed: {
    totalPremios() {
      let total = 0;
      for (const concurso of this.concursos) {
        const bolao = concurso.bolao;
        if (bolao && typeof bolao === "object") {
          for (const key in bolao) {
            const premio = bolao[key];
            const valor = Number(premio.premio_bolao);
            if (!isNaN(valor)) {
              total += valor;
            }
          }
        }
      }
      return total;
    },

    formatarValor() {
      return formatarValor
    }

  },

  created() {
    this.getConcursos();
    this.formatarValor()
  },
};
</script>
