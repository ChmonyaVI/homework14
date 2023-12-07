<template>
    <master-page>
        <template #title>
            <h2>Оберіть продукти</h2>
            <router-link :to="{ name: 'productsWithFilters' }">Фільтр товарів</router-link>
        </template>

        <template #catalog>
            <router-view name="filters"></router-view>

            <div class="product__card-container">
                <card-component v-for="product in getFilteredProductsList" :key="product.id">
                    <template #image>
                        <img class="product__card-img img" :src="product.img ? product.img : defaultImg" alt="" />
                    </template>
                    <template #title>
                        {{ product.title }}
                    </template>
                    <template #info> {{ product.price }} грн. </template>
                </card-component>
            </div>

            <router-link :to="{ name: 'product-editor' }">Додати новий товар</router-link>
            <router-view name="editor"></router-view>
        </template>
    </master-page>
</template>

<script>
import MasterPage from '../masterpages/MasterPage.vue'
import CardComponent from '../components/CardComponent.vue'
import { products } from '../data/data'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsView',

    components: {
        MasterPage,
        CardComponent,
    },

    data() {
        return {
            defaultImg: 'https://www.eclosio.ong/wp-content/uploads/2018/08/default.png',
        }
    },
    computed: {
        ...mapGetters(['getProductsList', 'getFilteredProductsList']),
    },
    created() {
        this.setProductsList(products)
    },
    methods: {
        ...mapActions(['setProductsList']),
    },
}
</script>

<style lang="scss" scoped>
.product {
    // .product__card-container

    &__card-container {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        gap: 40px;
    }

    // .product__card-img

    &__card-img {
    }
}
.img {
}

.img {
    width: 200px;
    height: 200px;
}
</style>
