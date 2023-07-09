<template>
  <div class="bg-fundo">
    <!-- <v-container class="fill-height"> -->
      <v-responsive class="text-center fill-height">

        <h1 class="mt-10">Filtros</h1>
        {{ filtros }}

        <v-card class="bg-fundo py-10">

          <div class="d-flex flex-wrap justify-center flex-colum">
            <v-tabs v-model="filtros" centered >
              <v-tab value="num_pule" class="mx-4 bg-blue">Buscar por Nº Pule</v-tab>
              <v-tab value="apostador_id" class="mx-4 bg-blue">Buscar por Apostador</v-tab>
              <v-tab value="num_apostado" class="mx-4 bg-blue">Buscar por Dezenas</v-tab>
              <v-tab value="regiao_id" class="mx-4 bg-blue">Buscar por Cidade</v-tab>
            </v-tabs>
          </div>

          <v-card-text>
            <v-window v-model="filtros">
              <v-window-item value="num_pule">
                <v-text-field label="Digite o numero da Pule" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="apostador_id">
                <v-text-field label="Nome do apostador" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="num_apostado">
                <v-text-field label="Digite as 10 dezenas" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

              <v-window-item value="regiao_id">
                <v-text-field label="Selecione a cidade" class="w-50 mx-auto" dense></v-text-field>
                <v-btn type="submit" class="bg-blue mx-2">Buscar</v-btn>
                <v-btn type="submit" class="bg-red mx-2">Cancelar</v-btn>
              </v-window-item>

            </v-window>
          </v-card-text>

        </v-card>
      </v-responsive>
    <!-- </v-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtros: ''
    }
  }
}
</script>
