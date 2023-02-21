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
            Platform
        </template>

        We deal with day-to-day business activities, we simplify every process to make life easy for you <p>some of our day-to-day dealings are: </p>
        <div class="home-platform">
            <RouterLink to="/">HRMS</RouterLink>
            <RouterLink to="/about">CRMS</RouterLink>
            <RouterLink to="/">DMS</RouterLink>
            <RouterLink to="/">KPI</RouterLink>
        </div>
    </WelcomeLandingItem>


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


    <WelcomeLandingItem>
        <template #icon>
            <IconHome />
        </template>

        <template #heading>
            How it works
        </template>

        Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
    </WelcomeLandingItem>
</template>

<style scoped>
.home-platform a {
    display: inline-block;
    padding: 0 0.5rem;
    margin-top: 4px;
}
</style>