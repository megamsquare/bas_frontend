<script setup lang="ts">
import Landing from '@/components/landing/Landing.vue'
</script>

<template>
    <main>
        <div class="left_side">
            <img src="@/assets/logo.svg" alt="Business Helper" class="business_logo" width="125" height="125" />
    
            <div class="wrap_txt">
                <h1>You are welcome</h1>
            </div>
        </div>
    
        <div>
            <Landing />
        </div>
    </main>
</template>

<style scoped>
.left_side {
    line-height: 1.5;
    max-height: 100vh;
}

.business_logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    .left_side {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .business_logo {
        margin: 0 2rem 0 0;
    }

    .left_side .wrap_txt {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>