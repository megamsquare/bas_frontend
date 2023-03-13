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
            <RouterLink :to="{name: 'hrms'}">HRMS</RouterLink>
            <RouterLink :to="{name: 'crms'}">CRMS</RouterLink>
            <RouterLink :to="{name: 'dms'}">DMS</RouterLink>
            <RouterLink :to="{name: 'kpi'}">KPI</RouterLink>
            <RouterLink :to="{name: 'kpi'}">WMS</RouterLink>
        </div>
    </WelcomeLandingItem>


    <WelcomeLandingItem>
        <template #icon>
            <IconHome />
        </template>

        <template #heading>
            About
        </template>

        Our main focus is to main daily business activities easier for every business owner, <p> You can fine more about us by clicking the: </p>
        <div class="home-platform">
            <RouterLink :to="{name: 'company'}">Company</RouterLink>
            <RouterLink :to="{name: 'team'}">Team</RouterLink>
        </div>
    </WelcomeLandingItem>


    <WelcomeLandingItem>
        <template #icon>
            <IconHome />
        </template>

        <template #heading>
            Blog
        </template>

        You can get more new from us and tips on day to day activities in business life. 
        <p>Visit our blog for more: </p>
        <div class="home-platform">
            <RouterLink to="/blog">Blog</RouterLink>
        </div>
    </WelcomeLandingItem>
</template>

<style scoped>
.home-platform a {
    display: inline-block;
    padding: 0 0.5rem;
    margin-top: 4px;
}
</style>