<template>
  <p>
    in my-self music
  </p>
</template>

<script>
export default {
  name: 'myMusic',
  data() {
    return {
      userInf: {},
    }
  },
  watch: {
    // 路由相关的方法；
    $route(to, from) {
      // 对路由变化作出响应...
      console.log('$route:_to',to);
      console.log('$route:_from',from);
    },
    beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
      next();
    }
  }
}
</script>

<style>

</style>
