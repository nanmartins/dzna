<template>
<div width="100vw" style="background: #1F1B16">
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h1>Concurso</h1>
      <div v-for="(concurso) in concursos" :key="concurso.id">
        <!-- {{ concurso }} -->
        <h4>{{ concurso.tipo_concurso.descricao }}</h4>
        <h5>{{ concurso.tipo_apuracao.descricao }}</h5>
        <h4>
          Concurso: {{ concurso.id }}
          <span v-if="concurso.dt_final <= dataHoje || concurso.desativado === 'true'" class="bg-red py-1 px-2 rounded ml-2">Inativo</span>
          <span v-else class="bg-green py-1 px-2 rounded ml-2">Ativo</span>
        </h4>
        <h4>Início do Concurso:
          <span v-if="concurso.tipo_concurso.descricao.includes('Sabado')">Sábado, </span>
          {{ concurso.dt_final }} as {{ concurso.hr_inicio.substring(0, 5) }}h
        </h4>


        <h1>{{ formatarValor(totalPremios) }} em {{ Object.keys(concurso.bolao).length }} premiações</h1>

        <div class="d-flex flex-wrap justify-center">
          <div v-for="(bolao) in concurso.bolao" :key="bolao.id" class="d-flex flex-row align-center justify-center">
            <v-card class="d-flex flex-column ma-2" height="480px" width="360px">
              <span v-if="bolao.finalizado === 'false'" class="bg-green w-25 rounded">Acumulado!</span>
              <v-card-title>{{ formatarValor(bolao.premio_bolao) }}</v-card-title>
              <v-card-subtitle>{{ bolao.tipo_bolao }}</v-card-subtitle>
              <v-card-text>{{ bolao.descricao }}</v-card-text>

              <div v-if="parseInt(bolao.status) > 0">
                <v-card-text>{{ bolao.status }} Ganhadores</v-card-text>
                <v-card-text>{{ formatarValor((bolao.premio_bolao / parseInt(bolao.status)).toFixed(2)) }}
                  <div>Premio para cada ganhador</div>
                </v-card-text>
              </div>

              <v-card-text v-else>
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
