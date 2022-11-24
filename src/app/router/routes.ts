import { RouteRecordRaw } from 'vue-router'
// import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: ProductPage, name: 'home' },
  // { path: '/product', component: ProductPage, name: 'product' },
]
