<template>
  <div class="end">
    end
  </div>
</template>

<style lang="stylus">
@import '~@themes/mixin.styl'
.end
  position: relative
  margin: 0 auto
  padding: 20px 0
  width: 100vw
  text-align: center
  color: #999
  background: rgba(0,0,0,.02)
  &:after
    content: ''
    display: block
    position: absolute
    top: 50%
    left: 32px
    width: 280px
    height: 1px
    background: #aaa
    @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
      transform: scaleY(0.7)
    @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
          transform: scaleY(0.5)
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
          transform: scaleY(0.3)
  &:before
    content: ''
    display: block
    position: absolute
    top: 50%
    right: 32px
    width: 280px
    height: 1px
    background: #aaa
    @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
      transform: scaleY(0.7)
    @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
          transform: scaleY(0.5)
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
          transform: scaleY(0.3)
</style>
