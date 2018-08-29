<template>
  <div class="homepage page">
    <template v-for="route in routes">
      <router-link :key="route.path" :to="route.path">{{route.path}}</router-link>
    </template>
  </div>
</template>

<script>
import routes from '../router/routes'
export default {
  name: 'HelloWorld',
  data () {
    return {
      routes: routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  display: block
}

</style>
