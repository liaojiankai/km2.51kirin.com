<template>
<section class="error-content">
  <div class="not-find-img">
    <img src="./img/icon-page-error.png" alt="">
  </div>
  <div class="text">
    <p class="title">Oops!</p>
    <p class="desc">您访问的页面不存在～</p>
    <div class="btns">
      <span class="btn btn-home" @click="goIndex">首页</span>
      <span class="btn btn-back" @click="$router.go(-1)" >返回上一页</span>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'notFind',
  methods: {
    goIndex() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.error-content
  width: 100vw
  height: 100vh
  margin: 0 auto
  text-align: center
  background-color: #EEF0F5
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  .not-find-img
    width: 400px

  .text
    p
      padding 20px 0
    .title
      font-size: 42px
      font-weight: bold
    .desc
      color: #9fa3b0
  .btns
    margin: 60px 0 180px
    width: 450px
    display: flex
    justify-content: space-between
    .btn
      display: inline-block
      width: 200px
      height: 64px
      line-height: 64px
      border: 1px #ff6181 solid
      border-radius: 10px
      color: #ff6181
      text-align: center
</style>
