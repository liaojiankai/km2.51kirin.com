import Vue from 'vue'
import Vuex from 'vuex'

import global from './g'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  ...global,
  modules: {
  },
  strict: debug
})

export default store
