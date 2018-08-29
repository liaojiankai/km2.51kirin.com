<template>
<div class="marquee">
  <div class="left">
    <img class="icon-img" src="./img/toast@2x.png" alt="">
  </div>
  <div class="marquee_box">
    <ul class="marquee_list" :class="{'marquee_top': animate}">
      <li v-for="(toast, index) in toasts" :key="index">
        <span>{{toast}}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      toasts: [
        "用户177****1080到账2800元",
        "用户189****7896获得奖励2400蜜分",
        "用户155****7538获得奖励9200蜜分",
        "用户138****5689获得奖励6800蜜分",
      ],
       animate: false
    }
  },
  methods: {
    marquee() {
      this.animate = true
      setTimeout(() => {
        this.toasts.push(this.toasts[0])
        this.toasts.shift()
        this.animate = false
      }, 500);
    },
    destroyedMarquee() {
      this.animateTask && clearInterval(this.animateTask)
    }
  },
  mounted () {
    this.animateTask = setInterval(this.marquee, 2000)
  },
  beforeRouteLeave(to, forom, next) {
    this.destroyedMarquee()
    next()
  },
  destroyed() {
    this.destroyedMarquee()
  }
}
</script>

<style lang="stylus" scoped>
.marquee
  padding: 0 32px
  height: 74px
  line-height: 74px
  display: flex
  overflow: hidden
  background: #fdf5f6
  color: #484848

  .left
    display: flex
    justify-content: center
    align-items: center
    .icon-img
      width: 36px
      height: 32px

  .marquee_box
    margin-left: 18px


.marquee_top
  transition: all 0.5s
  margin-top: -74px

</style>
