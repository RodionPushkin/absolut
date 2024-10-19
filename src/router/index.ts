import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import ItemView from '../views/ItemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:page?',
      component: HomeView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
})

export default router
