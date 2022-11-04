import Vue from 'vue'
import VueRouter from 'tao-router'
import HomeView from '../views/HomeView.vue'

// VueRouter 是一个插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// 创建实例
const router = new VueRouter({
  routes
})

export default router
