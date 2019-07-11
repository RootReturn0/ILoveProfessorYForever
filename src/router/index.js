import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Cats from '@/components/Cats'
import Form from '@/components/Form'
import Single from '@/components/Single'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPsw from '@/components/ForgetPsw'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/ForgetPsw',
      name:'ForgetPsw',
      component:ForgetPsw
    },
    {
     path:'/Register',
     name:'Register',
      component:Register
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Single',
      name: 'Single',
      component: Single
    },
  ],
})
