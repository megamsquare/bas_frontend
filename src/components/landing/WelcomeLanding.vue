<script setup lang="ts">
import WelcomeLandingItem from './WelcomeLandingItem.vue';
</script>

<template>
    <WelcomeLandingItem>
        <template #icon>
            <img src="@/assets/home_logo.svg" alt="Home Logo">
        </template>

        <template #heading>
            Home
        </template>

        Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
    </WelcomeLandingItem>
</template>