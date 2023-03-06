<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header_footer/Header.vue';
import Footer from './components/header_footer/Footer.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const content = ref();

const doScroll = (event: any) => {
  const scrollHeight = event.target.scrollHeight;
  const scrollTop = event.target.scrollTop;
  const clientHeight = event.target.clientHeight;
  console.log(event.target)
}

onMounted(() => {
  content.value.addEventListener('scroll', doScroll)
})

onUnmounted(() => {
  content.value.removeEventListener(doScroll)
})
</script>

<template>
  <Header />

  <RouterView />

  <!-- <Footer /> -->
</template>

<style scoped>
</style>