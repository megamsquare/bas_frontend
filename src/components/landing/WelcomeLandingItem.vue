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
.item {
    display: flex;
    margin-top: 2rem;
}

.details {
    flex: 1;
    margin-left: 1rem;
}

i {
    display: flex;
    place-content: center;
    place-items: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
}

h3 {
    color: var(--color-heading);
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
    .item {
        margin: 0;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }
}
</style>