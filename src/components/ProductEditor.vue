<template>
    <div class="editor__container">
        <h3 class="editor__title">Add product</h3>
        <label class="editor__label">
            Назва товару: <input v-model="product.title" type="text" class="editor__input" />
        </label>
        <label class="editor__label">
            Цiна товару: <input v-model="product.price" type="number" class="editor__input" />
        </label>
        <button class="editor__button" @click="onAddProduct(product)">Add</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ProductEditor',
    data() {
        return {
            product: {},
        }
    },
    methods: {
        ...mapActions(['onAddProduct']),
    },
}
</script>

<style lang="scss" scoped>
.editor {
    // .editor__container

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

    // .editor__title

    &__title {
    }

    // .editor__label

    &__label {
    }

    // .editor__input

    &__input {
    }

    // .editor__button

    &__button {
        margin-top: 10px;
        padding: 2px 30px 2px 30px;
    }
}
</style>
