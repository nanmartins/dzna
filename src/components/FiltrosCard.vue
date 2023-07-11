<template>
  <div class="bg-fundo">
    <v-container class="fill-height">
      <v-responsive class="text-center fill-height">

        <h1 class="mt-10">Filtros</h1>
        <!-- {{ filtros }} -->
        <!-- {{ busca }} -->
        <!-- {{ vencedores }} -->

        <v-card class="bg-fundo py-10">

          <div class="d-flex flex-wrap justify-center flex-colum">
            <v-tabs v-model="filtros">
              <v-tab value="num_pule" class="mx-4 bg-blue">Buscar por Nº Pule</v-tab>
              <v-tab value="apostador_id" class="mx-4 bg-blue">Buscar por Apostador</v-tab>
              <v-tab value="num_apostado" class="mx-4 bg-blue">Buscar por Dezenas</v-tab>
              <v-tab value="regiao_id" class="mx-4 bg-blue">Buscar por Cidade</v-tab>
            </v-tabs>
          </div>

          <v-card-text>
            <v-window v-model="filtros">
              <v-window-item value="num_pule">
                <v-text-field v-model="busca" label="Digite o numero da Pule" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="apostador_id">
                <v-text-field v-model="busca" label="Nome do apostador" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="num_apostado">
                <v-text-field v-model="busca" label="Digite as 10 dezenas" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="regiao_id">
                <v-text-field v-model="busca" label="Selecione a cidade" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

            </v-window>
          </v-card-text>

        <div class="d-flex justify-center">
          <v-table class="w-75 rounded-lg">
            <thead class="bg-blue">
              <tr>
                <th class="text-center text-white">
                  Nº Pule
                </th>
                <th class="text-center text-white">
                  Nome
                </th>
                <th class="text-center text-white">
                  Cidade
                </th>
                <th class="text-center text-white">
                  Dezenas Apostadas
                </th>
                <th class="text-center text-white">
                  Acertos
                </th>
              </tr>
            </thead>

            <tbody class="bg-contraste">
              <tr
                v-for="(apostador, index) in vencedores.apostadores"
                :key="apostador.id"
                :class="{
                  'bg-grey-darken-4' : index % 2 === 0
                }"
              >
                <td>{{ apostador.num_pule }}</td>
                <td>{{ apostador.nome }}</td>
                <td>{{ apostador.cidade }}</td>
                <td>
                  <div class="d-flex flex-wrap justify-center">
                    <h4 v-for="(numero) in apostador.num_apostado" :key="numero.id">
                      <span
                        :class="{
                          'd-inline-block rounded-circle bg-yellow pa-1 ma-1': this.vencedores.num_sorteados.includes(numero),
                          'd-inline-block rounded-circle bg-white pa-1 ma-1': !this.vencedores.num_sorteados.includes(numero)
                          }"
                      >
                        {{ numero }}
                      </span>
                    </h4>
                  </div>
                </td>
                <td>
                  <span class="bg-blue pa-2 rounded-lg">
                  {{ qtdAcertos(apostador.num_apostado)}}
                  </span>
                </td>
              </tr>
            </tbody>
          </v-table>

        </div>



          <!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->

          <!-- <div class="d-flex flex-row align-center justify-space-around w-75 mx-auto py-2 bg-blue">

            <h2>Nº Pule</h2>

            <h2>Apostador</h2>

            <h2>Cidade</h2>

            <div>
              <h3 class="w-100">Numeros apostados</h3>

              <span>acertos</span>

              <span>falta acertar</span>
            </div>

            <h2>Acertos</h2>

          </div> -->


          <!-- <div v-for="(sorteados) in vencedores.num_sorteados" :key="sorteados.id">
            {{ sorteados }}
          </div>
          <div v-for="(filtro) in vencedores.apostadores" :key="filtro.id">
            {{ filtro.num_pule }}

            <div v-if="vencedores.num_sorteados === filtro.num_apostado">IGUAL</div>
            <h2>{{ filtro.num_pule }}</h2>
            <h2>{{ filtro.nome }}</h2>
            <h2>{{ filtro.cidade }}</h2>
            <div class="d-flex flex-wrap justify-center">
              <h4 v-for="(numero) in filtro.num_apostado" :key="numero.id">
                <span
                  :class="{
                    'd-inline-block rounded-circle bg-yellow pa-1 ma-1': this.vencedores.num_sorteados.includes(numero),
                    'd-inline-block rounded-circle bg-white pa-1 ma-1': !this.vencedores.num_sorteados.includes(numero)
                    }"
                >
                  {{ numero }}
                </span>
              </h4>
            </div>

            <h2>{{ qtdAcertos(filtro.num_apostado)}}</h2>


          </div> -->


        </v-card>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtros: '',
      busca: '',
      vencedores: []
    }
  },

  methods: {
    getVencedores() {
      fetch('http://localhost:3000/filtros')
      .then(response => response.json())
      .then(data => {
        console.log(data[0].apostadores)
        this.vencedores = data[0]
      })
    },



    qtdAcertos(array) {
      let contador = 0;
      const sorteados = this.vencedores.num_sorteados
      for (let i = 0; i < sorteados.length; i++) {
        if (sorteados[i] === array[i]) {
          contador++;
        }
      }

      return contador;
    },

    // numerosAcertados() {

    // },

    buscarFiltro() {
      console.log(this.busca)
    }
  },

  created() {
    this.getVencedores()
  }

}
</script>
