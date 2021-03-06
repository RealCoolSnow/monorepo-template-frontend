import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routesDefault: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routesDefault],
})

export default router
