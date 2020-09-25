import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/todolist',
      component: () => import('../views/todo-list.vue')
    }
  ]
})