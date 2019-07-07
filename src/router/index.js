import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/About',
      name: 'About',
      component: About
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
  ]
})
