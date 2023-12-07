<template>
    <div class="filters__container">
        <h3 class="filters__title">Filter</h3>
        <label class="filters__label"> Назва товару <input v-model="filterTitle" type="text" /></label>
        <button class="filters__button" @click="onClear">Clear</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FiltersComponent',
    data() {
        return {
            productTitleFilter: null,
        }
    },
    computed: {
        filterTitle: {
            get() {
                return this.productTitleFilter
            },
            set(newVal) {
                this.updateFilterTitle(newVal)
            },
        },
    },
    methods: {
        ...mapActions(['updateFilterTitle']),

        onClear() {
            this.filterTitle = null
        },
    },
}
</script>

<style lang="scss" scoped>
.filters {
    // .filters__container

    &__container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        width: 200px;
        align-items: center;
        margin: 0 auto;
        border: 2px solid #42b983;
        border-radius: 15px;
    }

    // .filters__title

    &__title {
    }

    // .filters__label

    &__label {
    }

    // .filters__button

    &__button {
    }
}
</style>
