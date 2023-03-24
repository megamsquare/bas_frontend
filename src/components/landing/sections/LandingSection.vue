<script setup lang="ts">
import { ref } from 'vue';
import LandingSectionItem from './LandingSectionItem.vue';
import IconSection from '@/components/icons/IconSection.vue';

const height = ref('682.76');
const width = ref('865.76');

</script>

<template>
    <LandingSectionItem>
        <template #left-section>
            <!-- <IconSection></IconSection> -->
            <!-- <img :src=background_image alt=""> -->
        </template>
        <template #right-section>
            <div class="text-item-right">
                <h3> Making Your Business Easy Everyday </h3>
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

.text-item-right p {
    line-height: 2;
    max-width: 900px;
    margin: 32px auto;
}

.text-item-right h3 {
    font-weight: 500;
    color: var(--color-heading);
    font-size: 46px;
}

@media (min-width: 1024px) {

    img {
        margin: 0 1rem 0 0;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .text-item-right {
        display: block;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }
    
}

</style>