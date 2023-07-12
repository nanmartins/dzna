<template>
  <MainBanner />
  <PremiacaoCard />
  <ResultadosCard />
  <FiltrosCard />
</template>

<script setup>
import MainBanner from "@/components/MainBanner.vue"
import PremiacaoCard from "@/components/PremiacaoCard.vue"
import ResultadosCard from "@/components/ResultadosCard.vue"
import FiltrosCard from "@/components/FiltrosCard.vue"
</script>

<style>
html,
body {
  background: #1f1b16;
}

@media (min-width: 1920px) {
  .v-container {
    max-width: 1200px;
  }
}
</style>
