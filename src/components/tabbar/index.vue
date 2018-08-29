<template>
  <div class="foot-tabbar">
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
    >
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: require('./img/tab-unhome.png'),
        activeIcon: require('./img/tab-home.png'),
        to: '/index'
      }, {
        label: '蜜宝',
        icon: require('./img/tab-unmibao.png'),
        activeIcon: require('./img/tab-mibao.png'),
        to: '/planet'
      }, {
        label: '优惠',
        icon: require('./img/tab-unscene.png'),
        activeIcon: require('./img/tab-scene.png'),
        to: '/news'
      }, {
        label: '我的',
        icon: require('./img/tab-unme.png'),
        activeIcon: require('./img/tab-me.png'),
        to: '/member'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      const path = this.tabs.find(i => i.label === label).to

      this.$router.push(path)
    },
  }
}
</script>

<style lang="stylus" scoped>
.foot-tabbar
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 100px
  background: #fff
  -webkit-mask-image: radial-gradient(circle,#fff 100%,#000 0)
  z-index: 100
</style>

