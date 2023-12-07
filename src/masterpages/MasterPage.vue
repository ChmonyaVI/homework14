<template>
    <div>
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'products' }">Products</router-link> |
            <router-link :to="{ name: 'provider' }">Provider</router-link> |
            <router-link :to="{ name: 'shopping-contacts' }">Contacts</router-link> |
            <router-link :to="{ name: 'shopping-rules' }">Rules</router-link> |
        </nav>
        <slot name="title"> </slot>
        <slot name="catalog"></slot>
        <footer class="footer">
            <slot name="footer-left">
                <div>Рейтинг магазину: 54449</div>
            </slot>
            <slot name="footer-right">
                <div>Статус: <span style="color: green">відкрито</span></div>
            </slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MasterPage',
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
}
</style>
