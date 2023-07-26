<template>
  <v-switch @click="themeStore.toggleTheme" class="d-flex align-center text-texto"></v-switch>
</template>

<script setup>
  import { useThemeStore } from '@/store/theme'
  const themeStore = useThemeStore()
</script>
