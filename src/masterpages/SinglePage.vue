<template>
    <div>
        <nav><router-link :to="{ name: 'home' }">Home</router-link></nav>
        <slot></slot>
        <footer>
            <h3 class="home__title-footer">Галерея</h3>
            <div class="home__gallery">
                <img src="@/assets/gallery/1.png" alt="" class="product-card__img" />
                <img src="@/assets/gallery/2.png" alt="" class="product-card__img" />
                <img src="@/assets/gallery/3.png" alt="" class="product-card__img" />
                <img src="@/assets/gallery/4.png" alt="" class="product-card__img" />
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'SinglePage',
}
</script>

<style lang="scss" scoped>
.home {
    // .home__title-footer

    &__title-footer {
    }

    // .home__gallery

    &__gallery {
    }
}
.product-card {
    // .product-card__img

    &__img {
    }
}
</style>
