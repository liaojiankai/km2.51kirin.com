<template>
<section class="page-index">
  <m-header />
  <m-marquee />
  <m-bannar />
</section>
</template>

<script>
import Header from './components/Header'
import Marquee from './components/Marquee'
import Bannar from './components/Bannar'
export default {
  components: {
    'm-header': Header,
    'm-marquee': Marquee,
    'm-bannar': Bannar,
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log('page-index')
  }
}
</script>

<style lang="stylus">
.page-index
  min-height: 100vh;
  background: #fff;
</style>
