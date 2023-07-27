// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import { useLayout } from 'vuetify/lib/framework.mjs'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },

  {
    path: '/concursos',
    component: () => import('@/layouts/default/Default.vue'),
    props: true,
    children: [
      {
        path: '',
        name: 'Concursos',
        props: true,
        component: () => import('@/views/Concursos.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
