<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Logo from '../icons/logo/Logo.vue';
import { useRoutingStore } from "@/stores/routing";

let route = useRoute();
const handleRef = ref();
let isLanding = ref(false);
let logoHeight = ref();
let logoWidth = ref();

onMounted(() => {
    if (isLanding.value = true) {
        var prev = window.pageYOffset;
        window.addEventListener("scroll", () => {
            console.log(window.pageYOffset)
        })
    }

}),

watch(route, (to) => {
    if (to.name == 'landing') {
        isLanding.value = true;
        console.log("this is curent value: ", to.name)
    } else {
        isLanding.value = false;
        console.log("go back home")
    }
});
</script>
<template>
    <header ref="handleRef">
        <div class="wrapper">
            <nav>
                <div class="logo">
                    <!-- Business Helper -->
                    <RouterLink to="/">
                        <!-- <img src="@/assets/logo.svg" alt="Business Helper" width=50 height=50> -->
                        <Logo  height=50 width=50 />
                    </RouterLink>
                    
                </div>

                <!-- <div>
                    <button @click="getRoute"></button>
                </div> -->

                <div class="get_started">

                    <div class="landing_nav">
                        <div class="dropnav">
                            <a href="#">Platform</a>
                            <div class="dropnav-content">
                                <RouterLink :to="{name: 'hrms'}">HRMS</RouterLink>
                                <RouterLink :to="{name: 'crms'}">CRMS</RouterLink>
                                <RouterLink :to="{name: 'dms'}">DMS</RouterLink>
                                <RouterLink :to="{name: 'kpi'}">KPI</RouterLink>
                                <RouterLink :to="{name: 'kpi'}">WMS</RouterLink>
                            </div>
                        </div>

                        <div class="dropnav">
                            <a href="#"> About </a>
                            <div class="dropnav-content">
                                <RouterLink :to="{name: 'company'}">Company</RouterLink>
                                <RouterLink :to="{name: 'team'}">Team</RouterLink>
                            </div>
                        </div>
                        
                        <RouterLink to="/blog">Blog</RouterLink>
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
    transition: all 500ms ease;
    z-index: 10000;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    margin: 0 auto;
}

nav .get_started {
    display: flex;
}

nav .landing_nav{
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

nav .dropnav {
    position: relative;
    display: inline-block;
}

nav .dropnav span {
    font-weight: normal;
    font-size: medium;
    color: hsla(160, 100%, 37%, 1);
    padding: 0 0.5rem;
    margin-top: 4px;
}

.dropnav .dropnav-content {
    display: none;
    position: absolute;
    background-color: transparent;
    min-width: 160;
    box-shadow: 0 8px 16px 6px rgba(0,0,0,2);
    z-index: 1;
}

.dropnav:hover .dropnav-content {
    display: block;
}

@media (min-width: 1024px) {
    header.scrolling {
        background-color: var(--color-background);
        padding: 0;
    }

    header.scrolling .logo {
        height: 24;
        width: 24;
    }
}

</style>