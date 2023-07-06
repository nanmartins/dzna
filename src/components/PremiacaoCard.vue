<template>
  <v-container class="fill-height" color="#212121">
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


        <div v-for="(bolao) in concurso.bolao" :key="bolao.id" class="d-flex justify-center">
          <v-card class="d-flex flex-column w-25">
            <v-card-title>{{ bolao.premio_bolao }}</v-card-title>
            <v-card-subtitle>{{ bolao.tipo_bolao }}</v-card-subtitle>
            <v-card-text>{{ bolao.descricao }}</v-card-text>
          </v-card>
        </div>

      </div>
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
          // console.log(data[0].bolao)
          this.concursos = data
        })
    },
  },

  created() {
    this.getConcursos();
    // console.log(String(new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()))
  },
}
</script>
