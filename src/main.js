// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'
import UI from '../packages'

import './icons/index.js'

import Tabbar from '@/components/tabbar'
import End from '@/components/end'
import DataLoading from '@/components/loading/index.2.vue'


import waves from './directive/waves'
import focus from './directive/focus'

Vue.component('Tabbar', Tabbar)
Vue.component('End', End)
Vue.component('DataLoading', DataLoading)

Vue.use(waves)
Vue.use(focus)

Vue.config.productionTip = false

Vue.use(UI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
