<template>
  <div id="app" flexContainer @touch.prevent.stop class="ignore">
    <!-- <keep-alive> -->
      <transition :name="`screen-${routerAnimate}`">
        <router-view/>
      </transition>
    <!-- </keep-alive> -->
    <!-- page loading -->
    <!-- <transition name="fade">
      <loading v-show="pageLoading"></loading>
    </transition> -->
     <transition name="fade">
      <loading v-show="pageLoading"></loading>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/loading'
import Loading2 from '@/components/loading/index.2'

import Tabbar from '@/components/tabbar'
export default {
  name: 'App',
  components: {
    Loading,
    Tabbar,
    Loading2,
  },
  computed: {
    ...mapGetters(['routerAnimate', 'pageLoading']),
  },
}
</script>

<style lang="stylus">
@import './themes/index.styl';
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh
  .screen-out-enter-active,
  .screen-out-leave-active,
  .screen-in-enter-active,
  .screen-in-leave-active
    will-change: transform
    transition: all 300ms
    height: 100%
    top: 0
    position: absolute
    backface-visibility: hidden
    perspective: 1000
  .screen-out-enter
    opacity: 0
    transform: translate3d(-100%, 0, 0)
  .screen-out-leave-active
    opacity: 0
    transform: translate3d(100%, 0, 0)
  .screen-in-enter
    opacity: 0
    transform: translate3d(100%, 0, 0)
  .screen-in-leave-active
    opacity: 0
    transform: translate3d(-100%, 0, 0)

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s;
  .fade-enter, .fade-leave-to
    opacity: 0;

</style>
