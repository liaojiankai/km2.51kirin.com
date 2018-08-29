<template>
  <div
    class="cube-tab"
    :class="{'cube-tab_active': isActive}"
    @click="handleClick">
    <slot name="icon">
      <img v-if="isActive" :src="activeIcon" alt="" class="tab-img">
      <img v-else :src="icon" alt="" class="tab-img">
      <!-- <i v-if="icon" :class="icon"></i> -->
    </slot>
    <slot>
      <div class="tab-title" v-if="label" v-html="label"></div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
      },
      icon: {
        type: String,
        default: ''
      },
      activeIcon: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.$parent.addTab(this)
    },
    destroyed () {
      this.$parent.removeTab(this)
    },
    computed: {
      isActive () {
        return this.$parent.value === this.label
      }
    },
    methods: {
      handleClick (item) {
        this.$parent.trigger(this.label)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab
    flex: 1
    padding: 7px 0
    color: $tab-color
    text-align: center
    .tab-img
      height 36px;
      width: auto;
      margin-bottom: 10px;
    .tab-title
      font-size: 20px;

  .cube-tab_active
    color: #FF6181
</style>
