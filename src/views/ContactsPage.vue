<template>
    <div>
        <single-page>
            <div class="rules">
                <h2 class="title">Нашi контакти:</h2>
                <div class="contact__text">Адреса магазину: бiля будинку Баби Галi</div>
                <div class="contact__text">Менеджер: Дiд Петро</div>
                <div class="contact__text">Заступник: онук Софiйка</div>
            </div>
        </single-page>
    </div>
</template>

<script>
import SinglePage from '@/masterpages/SinglePage.vue'
export default {
    name: 'ContactsPage',
    components: { SinglePage },
}
</script>

<style lang="scss" scoped>
.rules {
    width: 350px;
    margin: 0 auto;
    text-align: left;
}
.contact {
    // .contact__text

    &__text {
    }
}
.title {
    text-align: center;
}
</style>
