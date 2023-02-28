<script setup lang="ts">
import LandingSectionItem from './LandingSectionItem.vue';
</script>

<template>
    <LandingSectionItem>
        <template #left-section>
            <img src="@/assets/Browsing-online.svg" alt="">
        </template>
        <template #right-section>
            <div>
                <h1> Topic </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, enim magni aperiam eos dolore cupiditate consectetur. Hic eveniet nulla iusto dolorum, corporis et esse, deserunt totam veniam illum iure error eos. Ipsum eligendi quasi odit cum deleniti exercitationem, cupiditate rem ea, similique nam iure in distinctio velit quaerat laborum veritatis.
                </p>
            </div>
        </template>
    </LandingSectionItem>
    
</template>

<style scoped>

img {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

    img {
        margin: 0 1rem 0 0;
    }
    
}

</style>