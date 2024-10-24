import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '@/views/AddTask.vue'
import EditTask from '@/views/EditTask.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/add',
    name:'addTask',
    component: AddTask
  },
  {
    path:'/edit/:id',
    name:'editTask',
    component: EditTask,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
