<script setup lang="ts">
import Landing from '@/components/landing/Landing.vue'
</script>

<template>
    <div class="wrapper">
        <section class="welcome_align">
            <Landing />
        </section>
    
        <section class="section-1">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab similique ex eaque est sapiente optio rerum incidunt placeat et adipisci, esse facere mollitia ipsum minus ea modi quasi sequi quidem architecto. Solut a quae perferendis maiores ad deserunt, deleniti ipsa.
            </p>
        </section>
    </div>
</template>

<style scoped>
.welcome_align {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
}

section {
    display: absolute;
    padding: 100px 32px;
}

.section-1 p {
    line-height: 2;
    max-width: 900px;
    margin: 32px auto;
}

@media (min-width: 1024px) {

    .welcome_align {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }

    section.welcome_align {
        height: 100vh;
        align-items: center;
        padding: 0 0px;
    }

    .wrapper {
        display: absolute;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>