<template>
    <div class="product-card__container">
        <div class="product-card__block">
            <div class="product-card__header"></div>
            <div class="product-card__body">
                <slot name="image">
                    <img src="../assets/default-image.jpg" alt="default-image" class="product-card__image" />
                </slot>
                <div class="product-card__title">
                    <slot name="title"></slot>
                </div>
                <div class="product-card__info">
                    <slot name="info"></slot>
                </div>
                <button class="product-card__button">Купити</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
}
</script>

<style lang="scss" scoped>
.product-card {
    // .product-card__container

    &__container {
    }

    // .product-card__block

    &__block {
        display: flex;
        flex-direction: column;
        padding: 15px;
        border: 2px solid #42b983;
        border-radius: 15px;
    }

    // .product-card__header

    &__header {
    }

    // .product-card__body

    &__body {
    }

    // .product-card__image

    &__image {
    }

    // .product-card__title

    &__title {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
    }

    // .product-card__info

    &__info {
        font-weight: 600;
        margin-bottom: 10px;
    }

    // .product-card__button

    &__button {
    }
}
</style>
