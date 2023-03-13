<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Logo from '../icons/logo/Logo.vue';

let route = useRoute();
const handleRef = ref();
const menuBurger = ref();
const navBar = ref();
let logoHeight = ref("50");
let logoWidth = ref("50");

function doLandingScroll(event: any) {
    const scrollY = event.currentTarget.scrollY;
    if (scrollY > 360) {
        logoHeight.value = "24";
        logoWidth.value = "24";
        handleRef.value.classList.remove("landingScroll");
        handleRef.value.classList.add("scrolling")
    } else {
        handleRef.value.classList.add("landingScroll");
        handleRef.value.classList.remove("scrolling");
    }
}

function doOtherPageScroll(event: any) {
    const scrollY = event.currentTarget.scrollY;
    if (scrollY > 36) {
        logoHeight.value = "24";
        logoWidth.value = "24";
        handleRef.value.classList.add("scrolling");
    } else {
        logoHeight.value = "50";
        logoWidth.value = "50";
        handleRef.value.classList.remove("scrolling");
    }
}

function doToggle(event: any) {
    if (navBar.value.classList.contains("is-open")) {
        navBar.value.classList.remove("is-open");
    } else {
        navBar.value.classList.add("is-open");
    }
}

onMounted(() => {
    menuBurger.value.addEventListener("click", doToggle);
}),

onUnmounted(() => {
    menuBurger.value.removeEventListener("click", doToggle);
}),

watch(route, (to) => {
    if (to.name == 'landing') {
        handleRef.value.classList.add("landingScroll");
        window.addEventListener('scroll', doLandingScroll);
    } else {
        handleRef.value.classList.remove("landingScroll");
        window.addEventListener("scroll", doOtherPageScroll);
    }
    console.log();
    
});
</script>
<template>
    <header ref="handleRef">
        <div class="wrapper">
            <nav>
                <div class="logo">
                    <!-- Business Helper -->
                    <RouterLink to="/">
                        <Logo :height=logoHeight :width=logoWidth />
                    </RouterLink>
                    
                </div>

                <div class="get_started">

                    <div class="landing_nav" ref="navBar">
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

                    <div class="hamburger" ref="menuBurger"></div>

                    <!-- <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div> -->
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
    z-index: 100;
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
    background-color: var(--color-background);
    min-width: 160;
    box-shadow: 0 8px 16px 6px rgba(0,0,0,2);
    z-index: 1;
}

.dropnav:hover .dropnav-content {
    display: block;
}

.hamburger,
.hamburger:after,
.hamburger:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    margin: 8px auto;
    border-radius: 3px;
    background-color: white;
    z-index: 100;
    right: 10px;
    display: none;
}

.hamburger:before {
    top: -1px;
    left: 0;
}

.hamburger:after {
    bottom: -23px;
    left: 0;
}

/* .hamburger {
    display: none;
    cursor: pointer;
}
.bar {
    display: block;
    width: 26px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
} */

@media (min-width: 1024px) {
    header.scrolling {
        background-color: var(--color-background);
        padding: 0;
        display: block;
    }
    
    header.landingScroll {
        display: none;
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
}

@media (max-width: 900px) {
   /* .hamburger {
        display: block;
    }

    .hamburger.active .bar:nth-child(2){
        opacity: 0;
    }Kof

    .hamburger.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    } */

    header {
        padding: .2rem 1rem;
        transition: 0.3s;
        justify-content: space-between;
    }

    .landing_nav a {
        display: block;
        margin: 14px 0;
        padding: 0 30px;
        transition: all 0.3s ease;
    }

    .hamburger,
    .hamburger:after,
    .hamburger:before {
        display: block;
        transition: .3s;
    }

    .landing_nav {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 100px;
        height: 230px;
        background: var(--color-background);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 10px;
        transition: all 0.3s ease;
        z-index: 12;
    }
    .landing_nav.is-open {
        right: 2%;
        z-index: 12;
    }
    
    nav .start_auth a {
        display: inline-block;
        padding: 0 .5rem;
        font-size: medium;
    }

    header nav {
        padding: 0;
    }

    nav .get_started .start_auth {
        padding: 0 40px;
    }
    
}

</style>