import focus from './focus'

const install = Vue => {
  Vue.directive('focus', focus)
}

if(typeof window !== 'undefined' && window.Vue) {
  window.focus = focus
  window.Vue.use(install)
}

export default focus
