<template>
    <div class="item">
        <i>
            <slot name="icon"></slot>
        </i>
        <div>
            <h3>
                <slot name="details"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
</style>