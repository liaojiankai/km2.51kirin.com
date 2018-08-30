<template>
  <div class="index__bannar">
    <div class="brannar-img"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '~@themes/mixin.styl'

.index__bannar
  display: flex
  justify-content: center
  align-items: center
  .brannar-img
    width: 686px
    height: 184px
    bg-image('./img/bannar')
    background-size: 100% 100%
</style>
