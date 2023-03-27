<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import LandingSectionItem from './LandingSectionItem.vue';
import IconSection from '@/components/icons/IconSection.vue';

const heightWindow = ref('682.76');
const widthWindow = ref('865.76');

const heightMobile= ref('200');
const widthMobile = ref('380');

const isMobile = ref()

function changeScreen(e: any) {
    if (e.currentTarget.innerWidth <= 1000) {
        isMobile.value = true;
        console.log('This is windows width: ', window.innerWidth);
    } else {
        isMobile.value = false;
        console.log('This is else windows width: ', window.innerWidth);
    }
}

onMounted(() => {
    window.addEventListener("resize", changeScreen);
}),

onUnmounted(() => {
    window.removeEventListener("resize", changeScreen);
});

</script>

<template>
    <LandingSectionItem>
        <template #left-section>
            <IconSection :height="heightWindow" :width="widthWindow" v-show="!isMobile"></IconSection>
            <IconSection :height="heightMobile" :width="widthMobile" v-show="isMobile"></IconSection>
            <!-- <img src="@/assets/Browsing-online.svg" alt=""> -->
        </template>
        <template #right-section>
            <div class="text-item-right">
                <h3> Making Your Business Easy Everyday </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, enim magni aperiam eos dolore
                    cupiditate consectetur. Hic eveniet nulla iusto dolorum, corporis et esse, deserunt totam veniam illum
                    iure error eos. Ipsum eligendi quasi odit cum deleniti exercitationem, cupiditate rem ea, similique nam
                    iure in distinctio velit quaerat laborum veritatis.
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

@media (max-width: 900) {

    img {
        margin: 0 0.5rem 0 0;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .text-item-right {
        display: block;
        padding: 0.4rem 0 0.5rem calc(--section-gap) / 2;
    }
}
</style>