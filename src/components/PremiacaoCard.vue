<template>
<div width="100vw" style="background: #1F1B16">
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <div v-for="(concurso) in concursos" :key="concurso.id">
        <!-- {{ concurso }} -->
        <h2>{{ concurso.tipo_concurso.descricao }}</h2>
        <h4>{{ concurso.tipo_apuracao.descricao }}</h4>
        <h4>
          Concurso: {{ concurso.id }}
          <span v-if="concurso.dt_final <= dataHoje || concurso.desativado === 'true'" class="bg-red py-1 px-2 rounded ml-2">Finalizado</span>
          <span v-else class="bg-green py-1 px-2 rounded ml-2">Ativo</span>
        </h4>
        <h4>Início do Concurso:
          <span v-if="concurso.tipo_concurso.descricao.includes('Sabado')">Sábado, </span>
          {{ concurso.dt_final }} as {{ concurso.hr_inicio.substring(0, 5) }}h
        </h4>


        <h1>{{ formatarValor(totalPremios) }} em {{ Object.keys(concurso.bolao).length }} premiações</h1>

        <div class="d-flex flex-wrap justify-center">
          <div v-for="(bolao, index) in concurso.bolao" :key="bolao.id" class="d-flex flex-row align-center justify-center">
            <v-card
              class="d-flex flex-column ma-2 position-relative bg-indigo"
              :style="{ backgroundColor: cores[index] }"
              height="480px"
              width="360px"
              style="overflow: visible;"
            >
            <div
              class="position-absolute text-h4"
              style="top: 10px; right: 58px; transform: translate(100%, -100%) rotate(8deg);"
            >
              <v-badge
                v-if="bolao.finalizado === 'false'"
                class="w-25"
                color="green"
                content="Acumulado!"
              ></v-badge>
            </div>
              <v-card-title class="text-h4 py-8">{{ formatarValor(bolao.premio_bolao) }}</v-card-title>
              <div class="d-flex flex-column align-center bg-white mx-2 py-12">
                <v-card-subtitle class="text-h4 pa-6 font-weight-black">{{ bolao.tipo_bolao }}</v-card-subtitle>
                <v-card-text class="py-2">{{ bolao.descricao }}</v-card-text>
              </div>

              <div v-if="parseInt(bolao.status) > 0" class="d-flex flex-column fill-height py-6">
                <v-card-text class="text-h5">{{ bolao.status }} Ganhadores</v-card-text>
                <v-card-text class="text-h5">{{ formatarValor((bolao.premio_bolao / parseInt(bolao.status)).toFixed(2)) }}
                </v-card-text>
                  <div class="text-h6 font-weight-light">Premio para cada ganhador</div>
              </div>

              <v-card-text v-else class="d-flex align-center text-h5 font-weight-medium">
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
export default {
  data() {
    return {
      concursos: [],
      cores: ['purple', 'indigo', 'pink', 'teal', 'amber'],
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
          // console.log(data[0].bolao)
          this.concursos = data
        })
    },

    formatarValor(valor) {
      const valorNumerico = Number(valor)
      if (!isNaN(valorNumerico)) {
        return valorNumerico.toLocaleString("pt-BR", {
          style: 'currency',
          currency: 'BRL'
        })
      } else {
        return ""
      }
    }
  },

  computed: {
    totalPremios() {
      let total = 0
      for (const concurso of this.concursos) {
        const bolao = concurso.bolao
        if (bolao && typeof bolao === 'object') { // Verifica se bolao é um objeto válido
          for (const key in bolao) {
            const premio = bolao[key]
            const valor = Number(premio.premio_bolao)
            if (!isNaN(valor)) {
              total += valor
            }
          }
        }
      }
      return total
    }
  },

  created() {
    this.getConcursos()
    // console.log(String(new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()))
  },
}
</script>
