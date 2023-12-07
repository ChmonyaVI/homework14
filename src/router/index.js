import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import ProviderPage from '../views/ProviderPage.vue'
import ShoppingPage from '../views/ShoppingPage.vue'
import FiltersComponent from '../components/FiltersComponent.vue'
import ProductEditor from '../components/ProductEditor.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: false },
    },
    {
        path: '/products-page',
        name: 'products',
        component: ProductsPage,
        children: [
            {
                path: 'selector',
                name: 'productsWithFilters',
                components: {
                    default: ProductsPage,
                    filters: FiltersComponent,
                },
            },
            {
                path: 'editor',
                name: 'product-editor',
                components: {
                    default: ProductsPage,
                    editor: ProductEditor,
                },
            },
        ],
        meta: { requiresAuth: false },
    },
    {
        path: '/contacts-page',
        name: 'shopping-contacts',
        component: ContactsPage,
        meta: { requiresAuth: false },
    },
    {
        path: '/provider-page',
        name: 'provider',
        component: ProviderPage,
        meta: { requiresAuth: false },
    },
    {
        path: '/shopping-rules',
        name: 'shopping-rules',
        component: ShoppingPage,
        meta: { requiresAuth: false },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
