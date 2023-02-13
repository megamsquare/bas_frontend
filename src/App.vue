<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header_footer/Header.vue';
import Footer from './components/header_footer/Footer.vue';
</script>

<template>
  <Header />

  <RouterView />

  <!-- <Footer /> -->
</template>

<style scoped>
</style>