// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './api/api'
import check from './api/check'

import vuex from 'vuex'
import store from './vuex/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2' 
// 使用插件
Vue.use(VueSweetalert2)
Vue.use(ElementUI);
Vue.use(vuex);
Vue.config.productionTip = false


Vue.prototype.api=api
Vue.prototype.check=check

import '../static/css/bootstrap.css'
import '../static/css/font-awesome.css'
import '../static/css/lightbox.css'
import '../static/css/style.css'
import '../static/css/zerogrid.css'
import 'animate.css'
import swal from 'sweetalert2'


import $ from 'jquery'

import '../static/js/bootstrap.js'
import '../static/js/easing.js'
import '../static/js/move-top.js'
// import '../static/js/jquery-1.11.1.min.js'
import '../static/js/responsiveslides.min.js'
import '../static/js/SmoothScroll.min.js'
import '../static/js/lightbox-plus-jquery.min.js'

// import '../static/js/demo.js'
import '../static/js/classie.js'

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
// 路由全局守卫
const store1 = {
  state: {
    token: sessionStorage.getItem('token') || '',
  },
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (sessionStorage.getItem('account')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/Login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});//添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 判断是否存在token,如果存在将每个页面header添加token
  if (true) {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`,
    console.log(sessionStorage.getItem("token"));
  }
  return config
}, function (error) {
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})