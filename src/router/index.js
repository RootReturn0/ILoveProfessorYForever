import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Adoptation from '@/components/Adoptation'
import Form from '@/components/Form'
import Single from '@/components/Single'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Adoptation',
      name: 'Adoptation',
      component: Adoptation
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
