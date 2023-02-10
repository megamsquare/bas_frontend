<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

let route = useRoute();

onMounted(() => {
    
}),

function getRoute() {
    console.log(route.name)
}
</script>
<template>
    <header>
        <div class="wrapper">
            <nav>
                <div class="logo">
                    <!-- Business Helper -->
                    <img src="@/assets/logo.svg" alt="Business Helper" width=100 height=100>
                </div>

                <div class="get_started">

                    <div class="landing_nav">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/about">About</RouterLink>
                        <RouterLink to="/team">Team</RouterLink>
                    </div>
    
                    <div class="start_auth">
                        <RouterLink to="/login">Login</RouterLink>
                        <RouterLink to="/register">Sign Up</RouterLink>
                    </div>

                </div>

            </nav>
        </div>
    </header>
</template>

<style scoped>

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 0;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    margin: 0 auto;
}

header.scrolling {
    background-color: var(--color-text);
    padding: 0;
}

nav .get_started {
    display: flex;
}

nav .get_started .start_auth {
    padding: 0 50px;
}

header .logo {
    padding: 0 32px;
}

nav {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}

nav.start_auth {
    font-size: large;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}
nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav .landing_nav a {
    display: inline-block;
    padding: 0 0.5rem;
    margin-top: 4px;
}

nav .start_auth a {
    display: inline-block;
    padding: 0 1rem;
    font-size: large;
}

</style>