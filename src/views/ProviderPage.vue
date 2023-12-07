<template>
    <master-page>
        <template #title>
            <h2 class="provider__title">Оберіть постачальника</h2>
        </template>
        <template #catalog>
            <div class="provider__container">
                <card-component v-for="distr in distrList" :key="distr.id">
                    <template #image>
                        <img class="product__card-img img" :src="distr.img" alt="img" />
                    </template>
                    <template #title>
                        {{ distr.title }}
                    </template>
                    <template #info>
                        <div class="icons">
                            <font-awesome-icon v-if="distr.logo1" :icon="['fas', 'plane-circle-check']" />
                            <font-awesome-icon v-if="distr.logo2" :icon="['fas', 'car-side']" />
                            <font-awesome-icon v-if="distr.logo3" :icon="['fas', 'cart-shopping']" />
                        </div>
                    </template>
                </card-component>
            </div>
        </template>
        <template #footer-left>
            <div>Найбільш популярний: <span style="color: green">Економ</span></div>
        </template>
    </master-page>
</template>

<script>
import MasterPage from '@/masterpages/MasterPage.vue'
import CardComponent from '@/components/CardComponent.vue'
import { distr } from '../data/data'
export default {
    name: 'ProviderPage',
    components: {
        MasterPage,
        CardComponent,
    },
    data() {
        return {
            distrList: distr,
        }
    },
}
</script>

<style lang="scss" scoped>
.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.provider {
    // .provider__container

    &__container {
        display: flex;
        justify-content: center;
        gap: 40px;
    }

    // .provider__title

    &__title {
    }
}
.product {
    display: flex;
    // .product__card-img

    &__card-img {
    }
}
.img {
}
</style>
