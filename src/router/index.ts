import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../public/login.vue'
import Admin from '../Secured/secure.vue'
import Dashboard from '../Secured/dashboard/dashboard.vue'
import university from '../Secured/universities/university.vue'
import createUniversity from '../Secured/universities/createUniversity.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '',
    component: Admin,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/universities',
        component: university
      },
      {
        path: '/universities/new',
        component: createUniversity
      },
      {
        path: '/universities/:id/edit',
        component: createUniversity
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
