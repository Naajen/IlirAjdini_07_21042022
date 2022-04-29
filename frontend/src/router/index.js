import { createRouter, createWebHashHistory } from 'vue-router'
import Signup from '@/views/users/Signup-users'
import Login from '@/views/users/Login-users'
import  Main  from '@/views/main/main-vue'


const routes = [
  // User routes
  { path: '/', name: 'main', component: Main },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
