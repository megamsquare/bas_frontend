<script setup lang="ts">
import WelcomeLanding from './welcome/WelcomeLanding.vue';
</script>

<template>
    <section class="welcome_align">
        <div class="left_side">
            <img src="@/assets/logo.svg" alt="Business Helper" class="business_logo" width="125" height="125" />
    
            <div class="wrap_txt">
                <div class="greetings">
                    <h1 class="green">You are welcome</h1>
                    <h3></h3>
                </div>
            </div>
        </div>
    
        <div>
            <WelcomeLanding />
        </div>
    </section>
    
    <section class="section-1">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab similique ex eaque est sapiente optio rerum incidunt placeat et adipisci, esse facere mollitia ipsum minus ea modi quasi sequi quidem architecto. Solut a quae perferendis maiores ad deserunt, deleniti ipsa.
        </p>
    </section>
    
    <section class="section-2">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab similique ex eaque est sapiente optio rerum incidunt placeat et adipisci, esse facere mollitia ipsum minus ea modi quasi sequi quidem architecto. Solut a quae perferendis maiores ad deserunt, deleniti ipsa.
        </p>
    </section>
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

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}
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

section p {
    line-height: 2;
    max-width: 900px;
    margin: 32px auto;
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

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }

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
}
</style>