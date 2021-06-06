<template>
  <div class="container">

    In musicer component~
    <input type="text" v-model="num">
    <p>{{numDouble}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 12,
    };
  },
  computed: {

    /**
     * 当data中对应的数值发生变化时，计算属性的值会发生相应的变化，
     * 计算属性compute是基于他们的依赖（如果是实例范畴之外的依赖，比如非响应式的notreactive是不会触发属性更新的）进行存储（计算属性的结果会被存储）。
     * 只有相关依赖发生改变时才会重新求值，未改变只会返回之前的结果，不在执行函数。
     *
     * vue computed 属性不能使用箭头函数；
     * 箭头函数中的this指向了window;
     * 而我们希望的是 this 要指向当前组件；
     * computed 属性中的方法有两种写法：
     *  1） 直接以函数的形式；
     *  2） 以 key: function() {} 的形式
     * * */

    // numDouble 只在使用的时候才会调用，并不会在组件初始化的时候调用；
    numDouble() {
      // 这里的 this 指向的是 当前 component;
      // console.log('numDouble-this:',this);
      return this.num * 2;
    },

    testTrangle() {
      return this.num - 3;
    },

    // ☆注意：☆ 使用箭头函数，会有异常，在computed 属性中，是不支持使用箭头函数的。
    // testTrangle: () => {
    //   console.log(this);
    //   return 15;
    // },
  },
  components: {

  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log('In musicer beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log('In musicer beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log('In musicer beforeRouteLeave');
    // console.log(this.testTrangle);
    // console.log(this.numDouble);
    next();
  },
};
</script>

<style scoped>
</style>
