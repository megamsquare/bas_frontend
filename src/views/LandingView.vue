<script setup lang="ts">
import Landing from '@/components/landing/Landing.vue';



function doScroll(event: any) {
    console.log(event)
}
</script>

<template>
     <div @scroll="doScroll">
          <Landing />
     </div>
</template>

<style scoped>

@media (min-width: 1024px) {
}
</style>