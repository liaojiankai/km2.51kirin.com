<template>
  <div class="index__hot-article">
    <div class="title">
      <div class="left">{{title}}</div>
      <div class="more">
        <span class="text">查看全部</span>
        <div class="icon-right-img"></div>
      </div>
    </div>

    <ul class="article-list">
      <li class="article-item"
        v-for="(article,index) in list"
        :key="index"
      >
        <div class="left-img">
          <img :src="article.img" alt="">
        </div>
        <div class="content">
          <p class="article-title">
            {{article.title}}
          </p>
          <p class="article-desc">
            {{article.desc}}
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '优惠推荐',
      list: [
        {
          img: 'http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/qQ313Xoia3J0ZtrUGM1b6PCxlj5xPIQRocxibpHwoq2De8qceiaQyUYK80TmbMiaSBu3tFIl9rgCic297vgibz7OdrnA/0?wx_fmt=jpeg',
          title: '【浦发】梦卡之腾讯野狐围棋信用卡，送你50元话费',
          desc: '活动期间成功申请并获批浦发梦卡之腾讯围棋信用卡主卡的新客户于核卡后60天内使用该卡发生任一单笔消费满188元，次月即可获赠50元话费，每人限获赠一次',
          url: 'https://mp.weixin.qq.com/s/JEOPD_C0vL0PGm7w8LWYNA',
        },
        {
          img: 'http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/qQ313Xoia3J0ZtrUGM1b6PCxlj5xPIQRocxibpHwoq2De8qceiaQyUYK80TmbMiaSBu3tFIl9rgCic297vgibz7OdrnA/0?wx_fmt=jpeg',
          title: '【浦发】梦卡之腾讯野狐围棋信用卡，送你50元话费',
          desc: '活动期间成功申请并获批浦发梦卡之腾讯围棋信用卡主卡的新客户于核卡后60天内使用该卡发生任一单笔消费满188元，次月即可获赠50元话费，每人限获赠一次',
          url: 'https://mp.weixin.qq.com/s/JEOPD_C0vL0PGm7w8LWYNA',
        },
        {
          img: 'http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/qQ313Xoia3J0ZtrUGM1b6PCxlj5xPIQRocxibpHwoq2De8qceiaQyUYK80TmbMiaSBu3tFIl9rgCic297vgibz7OdrnA/0?wx_fmt=jpeg',
          title: '【浦发】梦卡之腾讯野狐围棋信用卡，送你50元话费',
          desc: '活动期间成功申请并获批浦发梦卡之腾讯围棋信用卡主卡的新客户于核卡后60天内使用该卡发生任一单笔消费满188元，次月即可获赠50元话费，每人限获赠一次',
          url: 'https://mp.weixin.qq.com/s/JEOPD_C0vL0PGm7w8LWYNA',
        },
        {
          img: 'http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/qQ313Xoia3J0ZtrUGM1b6PCxlj5xPIQRocxibpHwoq2De8qceiaQyUYK80TmbMiaSBu3tFIl9rgCic297vgibz7OdrnA/0?wx_fmt=jpeg',
          title: '【浦发】梦卡之腾讯野狐围棋信用卡，送你50元话费',
          desc: '活动期间成功申请并获批浦发梦卡之腾讯围棋信用卡主卡的新客户于核卡后60天内使用该卡发生任一单笔消费满188元，次月即可获赠50元话费，每人限获赠一次',
          url: 'https://mp.weixin.qq.com/s/JEOPD_C0vL0PGm7w8LWYNA',
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~@themes/mixin.styl'

.index__hot-article
  padding: 11px 32px 0

  .title
    display: flex
    justify-content: space-between
    .left
      font-size: 34px
      font-weight: 500
    .more
      display: flex
      align-items: center
      justify-content: center
      color: #BEBCBD
      font-size: 28px
      .text
        margin-right: 14px
      .icon-right-img
        width: 14px
        height: 20px
        bg-image('./img/right')

  .article-list
    .article-item
      padding: 48px 0
      border-1px(#ccc)
      display: flex
      justify-content: space-between
      &:last-child
        &:after
          display: none

      .left-img
        width: 188px
        height: 144px
        border-radius: 8px
        overflow: hidden
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        img
          width: 100%
          height: 100%
      .content
        flex: 1
        margin-left: 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        .article-title
          font-size: 35px
          font-weight: 500
          white-space: nowrap
          overflow : hidden
          text-overflow: ellipsis
          width: 474px
        .article-desc
          width: 440px
          position: relative
          height: 84px
          line-height: 42px
          color: #ADA8AA
          font-size: 29px
          overflow: hidden
          padding-right: 7px
          &::after
            content: '...'
            font-weight: bold
            position: absolute
            bottom: 0
            right: 0
</style>
