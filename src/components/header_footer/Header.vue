<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <div class="wrapper">
            <nav>
                <div>
                    <img src="@/assets/logo.svg" alt="">
                </div>
                <div>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/team">Team</RouterLink>
                    <RouterLink to="/login">Login</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}
</style>