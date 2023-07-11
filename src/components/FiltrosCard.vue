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
              <v-tab value="num_pule" @click="mostrarForm = true" class="mx-4 bg-blue">Buscar por Nº Pule</v-tab>
              <v-tab value="apostador_id" @click="mostrarForm = true" class="mx-4 bg-blue">Buscar por Apostador</v-tab>
              <v-tab value="num_apostado" @click="mostrarForm = true" class="mx-4 bg-blue">Buscar por Dezenas</v-tab>
              <v-tab value="regiao_id" @click="mostrarForm = true" class="mx-4 bg-blue">Buscar por Cidade</v-tab>
            </v-tabs>
          </div>

          <v-card-text>
            <v-window v-model="filtros">
              <v-window-item value="num_pule" v-if="mostrarForm">
                <v-text-field v-model="busca" name="num_pule" label="Digite o numero da Pule" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="apostador_id" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Nome do apostador" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="num_apostado" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Digite as 10 dezenas" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="regiao_id" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Selecione a cidade" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

            </v-window>
          </v-card-text>

          <div class="d-flex justify-center">

            <v-table class="w-75 rounded-lg">
              <thead class="bg-blue">
                <tr>
                  <th class="text-center text-white">
                    <h3>Nº Pule</h3>
                  </th>
                  <th class="text-center text-white">
                    <h3>Nome</h3>
                  </th>
                  <th class="text-center text-white">
                    <h3>Cidade</h3>
                  </th>
                  <th class="text-center text-white">
                    <h3>Dezenas Apostadas</h3>
                    <div class="d-flex justify-center align center">
                      <v-badge inline color="yellow"></v-badge><span class="pr-4">acertos</span>
                      <v-badge inline color="white"></v-badge><span>falta acertar</span>
                    </div>
                  </th>
                  <th class="text-center text-white">
                    <h3>Acertos</h3>
                  </th>
                </tr>
              </thead>

              <tbody class="bg-contraste">
                <tr
                  v-for="(apostador, index) in vencedores"
                  :key="apostador.id"
                  :class="{'bg-grey-darken-4' : index % 2 === 0}"
                >
                  <td class="py-8">{{ apostador.num_pule }}</td>
                  <td>{{ apostador.nome }}</td>
                  <td>{{ apostador.cidade }}</td>
                  <td>
                    <div class="d-flex flex-wrap justify-center">
                      <h4 v-for="(numero) in apostador.num_apostado" :key="numero.id">
                        <span
                          :class="{
                            'd-inline-block rounded-circle bg-yellow pa-1 ma-1': apostador.num_sorteados.includes(numero),
                            'd-inline-block rounded-circle bg-white pa-1 ma-1': !apostador.num_sorteados.includes(numero)
                            }"
                        >
                          {{ numero }}
                        </span>
                      </h4>
                    </div>
                  </td>
                  <td>
                    <span class="bg-blue pa-2 rounded-lg font-weight-bold">
                      {{ qtdAcertos(apostador.num_apostado, apostador.num_sorteados)}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </v-table>

          </div>

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
      vencedores: [],
      mostrarForm: false
    }
  },

  computed: {
    url() {
      return 'http://localhost:3000/filtros'
    }
  },

  methods: {
    getVencedores() {
      fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.vencedores = data
        this.ordenarPorAcertos()
      })
    },

    qtdAcertos(array, array2) {
      let contador = 0
      for (let i = 0; i < array2?.length; i++) {
        if (array2[i] === array[i]) {
          contador++
        }
      }
      return contador
    },

    ordenarPorAcertos() {
      this.vencedores.sort((x, y) => {
        const acertosX = this.qtdAcertos(x.num_apostado, x.num_sorteados)
        const acertosY = this.qtdAcertos(y.num_apostado, y.num_sorteados)

        if (acertosX !== acertosY) {
          return acertosY - acertosX
        }
        else {
          const nomeX = x.nome.toLowerCase()
          const nomeY = y.nome.toLowerCase()

          if (nomeX < nomeY) {
            return -1
          }
          else if (nomeX > nomeY) {
            return 1
          }
          else {
            return 0
          }
        }
      })
    },

    buscarFiltro() {
      const urlFiltrada = `${this.url}?q=${this.busca}`
      fetch(urlFiltrada)
        .then(response => response.json())
        .then(data => {
          this.vencedores = data;
          this.ordenarPorAcertos()
        });
    },

    limparFiltro() {
      this.busca = ''
      this.filtros = ''
      this.getVencedores()
    }
  },

  created() {
    this.getVencedores()
    this.limparFiltro()
  }

}
</script>
