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

                <div>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/team">Team</RouterLink>
                    <div class="get_started">
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

header .scrolling {

}

header .logo {
    font-weight: 800;
    color: var(--color-text);
    text-transform: uppercase;
    font-size: 24px;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
} 

nav a.router-link-exact-active {
    color: var(--color-text);
}
nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 0.5rem; 
    /* border-left: 1px solid var(--color-border); */
}
</style>