<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <div>
            <nav>
                <div>
                    <img src="@/assets/logo.svg" alt="">
                </div>
                <div>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/team">Team</RouterLink>
                    <RouterLink to="/">Login</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>