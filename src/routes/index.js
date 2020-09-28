import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/todo-list.vue'),
    },
    {
      path: '/transform',
      name: 'transform',
      component: () => import('../views/Transform.vue'),
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('../views/animate/Animate.vue'),
    },
  ],
})
