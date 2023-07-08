<template>
  <div width="100vw" style="background: #1f1b16">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        {{ resultados }}
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
