import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

// 应用初始状态
const store = new Vuex.Store({
    state:{
        account:null,
        isLogin:false,
        token:false,
        UserUrl:null
    },
    getters,
    mutations,
    actions
})

export default store