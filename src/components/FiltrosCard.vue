<template>
  <div class="bg-fundo pb-10">
    <v-container class="text-center px-1 px-md-6">

        <h1 class="text-h4 text-md-h3 font-weight-bold py-md-4 mt-10">Filtros</h1>

        <v-card class="bg-fundo pt-4" flat>

          <div class="d-flex justify-center align-center flex-colum py-4">
            <v-tabs v-model="filtros">

              <v-tab value="num_pule" @click="mostrarForm = true" class="text-caption text-md-h6 mr-1 mx-md-4 bg-primary">
                Buscar <br> Nº Pule
              </v-tab>

              <v-tab value="apostador_id" @click="mostrarForm = true" class="text-caption text-md-h6 mr-1 mx-md-4 bg-primary">
                Buscar <br> Apostador
              </v-tab>

              <v-tab value="num_apostado" @click="mostrarForm = true" class="text-caption text-md-h6 mr-1 mx-md-4 bg-primary">
                Buscar <br> Dezenas
              </v-tab>

              <v-tab value="regiao_id" @click="mostrarForm = true" class="text-caption text-md-h6 mx-md-4 bg-primary">
                Buscar <br> Cidade
              </v-tab>

            </v-tabs>
          </div>

          <v-card-text>
            <v-window v-model="filtros">
              <v-window-item value="num_pule" v-if="mostrarForm">
                <v-text-field v-model="busca" name="num_pule" label="Digite o numero da Pule" class="w-100 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-primary mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-warning mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="apostador_id" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Nome do apostador" class="w-100 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-primary mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-warning mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="num_apostado" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Digite as 10 dezenas" class="w-100 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-primary mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-warning mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="regiao_id" v-if="mostrarForm">
                <v-text-field v-model="busca" label="Selecione a cidade" class="w-100 mx-auto" dense></v-text-field>
                <v-btn type="submit" @click="buscarFiltro" class="bg-primary mx-2">Buscar</v-btn>
                <v-btn type="submit" @click="limparFiltro" class="bg-warning mx-2">Cancelar</v-btn>
              </v-window-item>

            </v-window>
          </v-card-text>

          <div class="d-flex justify-center my-2 mx-2">

            <v-table class="w-100 rounded bg-fundo elevation-1">
              <thead class="bg-primary">
                <tr>
                  <th class="text-caption text-md-h6 text-center text-white py-6 px-1 px-md-3">
                    <h3>Nº Pule</h3>
                  </th>
                  <th class="text-caption text-md-h6 text-center text-white px-1 px-md-3">
                    <h3>Nome</h3>
                  </th>
                  <th class="text-caption text-md-h6 text-center text-white px-1 px-md-3">
                    <h3>Cidade</h3>
                  </th>
                  <th class="text-caption text-md-h6 text-center text-white px-1 px-md-3">
                    <h3>Dezenas Apostadas</h3>
                    <div class="d-flex justify-center align-center" >
                      <v-badge inline color="verde"></v-badge><span class="pr-2 pr-md-4">acertos</span>
                      <v-badge inline color="white"></v-badge><span>falta acertar</span>
                    </div>
                  </th>
                  <th class="text-caption text-md-h6 text-center text-white" v-show="hideAcertos">
                    <h3>Acertos</h3>
                  </th>
                </tr>
              </thead>

              <tbody class="bg-contraste">
                <tr
                  v-for="(apostador, index) in vencedores"
                  :key="apostador.id"
                  :class="{'bg-highlight' : index % 2 === 0}"
                  style="overflowx: hidden;"
                >
                  <td class="py-6 text-caption text-md-subtitle-1 px-2 px-md-auto">{{ apostador.num_pule }}</td>
                  <td class="text-caption text-md-subtitle-1 px-2 px-md-auto">{{ apostador.nome }}</td>
                  <td class="text-caption text-md-subtitle-1 px-2 px-md-auto">{{ apostador.cidade }}</td>
                  <td>
                    <div class="d-flex flex-wrap justify-center">
                      <h4
                        v-for="(numero) in apostador.num_apostado"
                        :key="numero.id"
                        class="py-1"
                      >
                        <span
                          :class="{
                            'd-inline-block text-caption font-weight-bold text-md-subtitle-1 rounded-circle bg-verde elevation-8 pa-1 ma-1': apostador.num_sorteados.includes(numero),
                            'd-inline-block text-caption font-weight-bold text-md-subtitle-1 rounded-circle bg-white elevation-8 pa-1 ma-1': !apostador.num_sorteados.includes(numero)
                          }"
                        >
                          {{ numero }}
                        </span>
                      </h4>
                    </div>
                  </td>
                  <td v-show="hideAcertos">
                    <span class="bg-primary rounded-lg font-weight-bold text-caption text-md-subtitle-1 elevation-8 py-2 px-2 px-md-3">
                      {{ qtdAcertos(apostador.num_apostado, apostador.num_sorteados)}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </v-table>

          </div>

        </v-card>
      <!-- </v-responsive> -->
    </v-container>
  </div>
</template>

<script setup>

import { onBeforeUnmount, onMounted, ref, computed } from 'vue'

const filtros = ref('')
const busca = ref('')
const vencedores = ref([])
const mostrarForm = ref(false)
const hideAcertos = ref(false)

const url = computed(() => {
  return 'http://localhost:3000/filtros'
})

const getVencedores = () => {
  fetch(url.value)
  .then(response => response.json())
  .then(data => {
    vencedores.value = data
    ordenarPorAcertos()
  })
}

const qtdAcertos = (array, array2) => {
  let contador = 0
  for (let i = 0; i < array2?.length; i++) {
    if (array2[i] === array[i]) {
      contador++
    }
  }
  return contador
}

const ordenarPorAcertos = () => {
  vencedores.value.sort((x, y) => {
    const acertosX = qtdAcertos(x.num_apostado, x.num_sorteados)
    const acertosY = qtdAcertos(y.num_apostado, y.num_sorteados)

    if (acertosX !== acertosY) {
      return acertosY - acertosX
    } else {
      const nomeX = x.nome.toLowerCase()
      const nomeY = y.nome.toLowerCase()

      const puleX = Number(x.num_pule)
      const puleY = Number(y.num_pule)

      if (nomeX && puleX < nomeY && puleY) {
        return -1
      } else if (nomeX && puleX > nomeY && puleY) {
        return 1
      } else {
        return 0
      }
    }
  })
}

const buscarFiltro = () => {
  const urlFiltrada = `${url.value}?q=${busca.value}`
  fetch(urlFiltrada)
    .then(response => response.json())
    .then(data => {
      vencedores.value = data
      ordenarPorAcertos()
    })
}

const limparFiltro = () => {
  busca.value = ''
  filtros.value = ''
  getVencedores()
}

const checkScreenWidth = () => {
  hideAcertos.value = window.innerWidth >= 500
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
  getVencedores()
  limparFiltro()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth)
})

</script>

<style scoped>
@media (min-width: 651px) {
  br {
    display: none;
  }
}
</style>
