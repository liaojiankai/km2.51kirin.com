import waves from './waves'

const install = Vue => {
  Vue.directive('waves', waves)
}

if(typeof window !== 'undefined' && window.Vue) {
  window.waves = waves
  window.Vue.use(install);
}

export default waves
