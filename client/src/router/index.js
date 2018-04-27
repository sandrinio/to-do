import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/landing/Dashboard'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import NewProject from '@/components/landing/New'
import ShowProject from '@/components/landing/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new-project',
      name: 'newProject',
      component: NewProject
    },
    {
      path: '/project/show/:id',
      name: 'showProject',
      component: ShowProject
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
