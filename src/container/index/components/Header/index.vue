<template>
  <div class="index__header">
    <div class="title">{{title}}</div>
    <div class="header-navs">
      <template v-for="tab in tabs">
        <div class="nav" :key="tab.label">
          <div class="img-icon">
            <img :src="tab.icon" alt="">
          </div>
          <div class="text">{{tab.label}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '51卡蜜',
      tabs: [
        {
          label: '收款',
          icon: require('./img/card-1@2x.png'),
          to: '/'
        }, {
          label: '卡片管理',
          icon: require('./img/card-2@2x.png'),
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~@themes/mixin.styl'

.index__header
  height: 344px
  color: #fff
  display: flex
  flex-direction: column
  bg-image('./img/background')
  background-size: 100% 100%

  .title
    padding: 24px 0
    text-align: center
    font-size: 34px
    font-weight: bold

  .header-navs
    flex: 1
    display: flex
    justify-content: space-between
    text-align: center
    align-items: center
    justify-content: center
    .nav
      flex: 1
      .img-icon
        flex: 1
        width: 100%
        img
          width: 66px
          height: 50px
      .text
        margin-top: 36px
</style>


