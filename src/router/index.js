// src\router\index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import LearnPage from '@/views/LearnPage.vue'
import SolvePage from '@/views/SolvePage.vue'
import NotePage from '@/views/NotePage.vue'
import DashboardPage from '@/views/DashboardPage.vue'

const routes = [
  { path: '/dashboard', component: DashboardPage },
  { path: '/learn', component: LearnPage },
  { path: '/solve', component: SolvePage },
  { path: '/note', component: NotePage },
  { path: '/', redirect: '/dashboard' } // 기본 경로 설정
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  

export default router
