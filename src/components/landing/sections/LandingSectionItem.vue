<template>
    <div class="section-1">
       <slot name="left-section"></slot>
       
       <div class="section-1-right">
        <slot name="right-section"></slot>
       </div>
    </div>
</template>

<style scoped>

@media (min-width: 1024px) {
    .section-1 {
        display: flex;
        place-items: center;
    }
}
</style>