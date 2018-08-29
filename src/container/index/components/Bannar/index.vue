<template>
  <div class="bannar">
    <div class="brannar-img"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .bannar
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
    .brannar-img
      width: 686px
      height: 184px
      background: url('./img/bannar@2x.png')
      background-size: 100% 100%
      @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
        background: url('./img/bannar@3x.png')
        background-size: 100% 100%
</style>
