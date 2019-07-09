// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './api'
Vue.prototype.api=api

import '../static/css/bootstrap.css'
import '../static/css/font-awesome.css'
import '../static/css/lightbox.css'
import '../static/css/style.css'
import '../static/css/zerogrid.css'
import 'animate.css'


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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
