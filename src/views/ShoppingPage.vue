<template>
    <div>
        <single-page
            ><h2>Правила купiвлi:</h2>
            <ul class="contact__list">
                <li><div class="contact__text">Купуэмо багато</div></li>
                <li><div class="contact__text">Платимо швидко</div></li>
                <li><div class="contact__text">Насолоджуэмось товаром</div></li>
            </ul>
        </single-page>
    </div>
</template>

<script>
import SinglePage from '@/masterpages/SinglePage.vue'
export default {
    name: 'ShoppingPage',
    components: { SinglePage },
}
</script>

<style lang="scss" scoped>
.contact {
    // .contact__list

    &__list {
        width: 250px;
        margin: 0 auto;
        text-align: left;
    }

    // .contact__text

    &__text {
    }
}
</style>
