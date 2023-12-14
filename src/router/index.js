import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManagerComponent from '@/components/proveedores/ManagerComponent'
import RegistrarProveedoresComponent from '@/components/proveedores/RegistrarProveedoresComponent'
import LoginView from '../views/LoginView.vue'
import BienvenidaComponent from '../components/auth/BienvenidaComponent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ManagerComponent',
    name: 'ManagerComponent',
    component: ManagerComponent
  },
  {
    path: '/RegistrarProveedoresComponent',
    name: 'RegistrarProveedoresComponent',
    component: RegistrarProveedoresComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
