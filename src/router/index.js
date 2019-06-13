import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowCats from '@/components/ShowCats'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowCats',
      component: ShowCats
    },
  ]
})
