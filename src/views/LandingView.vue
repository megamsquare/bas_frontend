<script setup lang="ts">
import Landing from '@/components/landing/Landing.vue'
</script>

<template>
    <section class="welcome_align">
        <Landing />
    </section>
    <!-- <sectionS class="section-1">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab similique ex eaque est sapiente optio rerum incidunt placeat et adipisci, esse facere mollitia ipsum minus ea modi quasi sequi quidem architecto. Solut a quae perferendis maiores ad deserunt, deleniti ipsa.
        </p>
    </sectionS> -->
</template>

<style scoped>
.welcome_align {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}

section.welcome_align {
    height: 100vh;
    align-items: center;

}

@media (min-width: 1024px) {

    .welcome_align {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }
}
</style>