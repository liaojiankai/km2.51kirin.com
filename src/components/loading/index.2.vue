<template>
  <div class="loading-mask">
    <div class="cssload-loader"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Loading'
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.loading-mask
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  display: flex
  justify-content: center
  align-items: center
  background: rgba(0,0,0,.1);
  .cssload-loader
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: translate(1.25em, -2.5em);
    display: block;
    margin: auto;
    &:before, &:after
      content: "";
      position: absolute;
      display: block;
      width: 0.5em;
      height: 0.5em;
      border-radius: 0.25em;
      transform: translate(-50%, -50%);
    &:before
      animation: before 2.3s infinite;
    &:after
      animation: after 2.3s infinite;

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225,20,98,0.75), -1em 0.5em rgba(111,202,220,0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225,20,98,0.75), 0 0.5em rgba(111,202,220,0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225,20,98,0.75), 1em 0.5em rgba(111,202,220,0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225,20,98,0.75), -1em 0.5em rgba(111,202,220,0.75);
  }
}

@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61,184,143,0.75), -0.5em -1em rgba(233,169,32,0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61,184,143,0.75), -0.5em 0 rgba(233,169,32,0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61,184,143,0.75), -0.5em 1em rgba(233,169,32,0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61,184,143,0.75), -0.5em -1em rgba(233,169,32,0.75);
  }
}

</style>
