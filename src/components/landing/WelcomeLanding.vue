<script setup lang="ts">
import WelcomeLandingItem from './WelcomeLandingItem.vue';
import IconHome from '@/components/icons/IconHome.vue'
</script>

<template>
    <WelcomeLandingItem>
        <template #icon>
            <IconHome />
        </template>

        <template #heading>
            Home
        </template>

        Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
    </WelcomeLandingItem>
</template>