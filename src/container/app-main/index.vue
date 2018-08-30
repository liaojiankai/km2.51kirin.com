<template>
  <div>
    <transition :name="`screen-${routerAnimate}`" class="app-main">
      <router-view></router-view>
    </transition>
    <Tabbar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['routerAnimate', 'pageLoading']),
  },
  mounted () {
    console.log('in app main')
  }
}
</script>

<style lang="stylus">
.app-main
  box-sizing: border-box
  padding-bottom: 100px
</style>


