import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChiSiamo from '../views/ChiSiamoView.vue'
import Servizi from '../views/ServiziView.vue'
import Contatti from '../views/ContattiView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Chi_Siamo',
    name: 'Chi_Siamo',
    component: ChiSiamo
  },
  {
    path: '/Servizi',
    name: 'Servizi',
    component: Servizi
  },
  {
    path: '/Contatti',
    name: 'Contatti',
    component: Contatti
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
