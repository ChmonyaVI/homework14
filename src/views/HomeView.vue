<template>
    <master-page>
        <template #catalog>
            <h1 class="home__title">Welcome!</h1>
            <div class="home__text">Сподiваюсь ви не будете чемними, i обов'язково щось купите!</div>
        </template>

        <template #footer-right>
            <div>
                <div class="home__info">
                    <div class="home__name">Owner: Баба Галя</div>
                    <div class="home__img">
                        <img src="@/assets//picture-102488-1459772695.png" alt="Image" />
                    </div>
                </div>
            </div>
        </template>
    </master-page>
</template>

<script>
import MasterPage from '../masterpages/MasterPage.vue'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: { MasterPage },
}
</script>
<style lang="scss">
.home {
    // .home__container

    &__container {
        font-size: 24px;
        font-weight: 500;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;
        width: 500px;
        gap: 20px;
    }
    // .home__title

    &__title {
    }

    // .home__text

    &__text {
    }

    // .home__block

    &__block {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    // .home__rating-store

    &__rating-store {
    }

    // .home__info

    &__info {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
    }

    // .home__name

    &__name {
    }

    // .home__img

    &__img {
        img {
            width: 100px;
            height: 100px;
        }
    }
}
</style>
