import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animes from '../views/Animes.vue'
import TopAnimes from '../views/TopAnimes.vue'
import Emision from '../views/Emision.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Animes',
      name: 'animes',
      component: Animes

    },
    {
      path: '/TopAnimes',
      name: 'Top Animes',
      component: TopAnimes

    },
    {
      path: '/Emision',
      name: 'Animes en Emision',
      component: Emision
    }
   
  ]
})

export default router