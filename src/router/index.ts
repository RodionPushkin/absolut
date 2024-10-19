import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:page?',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: HomeView,
    },
  ],
})

export default router
