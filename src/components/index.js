import Vue from 'Vue'

import UI from 'packages'

import Tabbar from '@/components/tabbar'
import End from '@/components/end'
import DataLoading from '@/components/loading/index.2.vue'

Vue.use(UI)

Vue.component('Tabbar', Tabbar)
Vue.component('End', End)
Vue.component('DataLoading', DataLoading)