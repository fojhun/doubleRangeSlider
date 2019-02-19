import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
  MaxPrice:100,
  MinPrice:0
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
