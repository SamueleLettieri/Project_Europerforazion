import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChiSiamo from '../views/ChiSiamoView.vue'
import Servizi from '../views/ServiziView.vue'
import Foto from '../views/FotoView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/Foto',
    name: 'Foto',
    component: Foto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
