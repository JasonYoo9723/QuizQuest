import { createRouter, createWebHistory } from 'vue-router'
import ReadmeView from '../views/ReadmeView.vue'

const routes = [
  {
    path: '/README',
    name: 'Readme',
    component: ReadmeView
  },
  // ...다른 경로들
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
