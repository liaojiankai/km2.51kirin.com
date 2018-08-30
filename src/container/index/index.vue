<template>
<section class="page-index">
  <m-header />
  <m-marquee />
  <bannar />
  <hot />
  <!-- <Tabbar /> -->
  <End />
</section>
</template>

<script>
import Header from './components/Header'
import Marquee from './components/Marquee'
import Bannar from './components/Bannar'
import Hot from './components/Hot'
export default {
  components: {
    'm-header': Header,
    'm-marquee': Marquee,
    Bannar,
    Hot,
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log('page-index')
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      console.log(scrollTop)
    },
  },
}
</script>

<style lang="stylus">
@import '~@themes/mixin.styl'

.page-index
  min-height: 100vh;
  background: #fff;
  padding-bottom: 101px;
</style>
