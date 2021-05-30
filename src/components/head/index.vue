<template>
  <div class="yy-header">
    <div>
      <i class="iconfont icon-shangyige"></i>
    </div>
    <div class="tabs">
      <el-menu
        :default-active="'descover'"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleClick"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="item in headerOptions">
          <el-menu-item
            :index="item.href"
            :key="item.title">
            {{item.title}}
          </el-menu-item>
         </template>
      </el-menu>
    </div>
  </div>
</template>
// header组件
<script>
export default {
  name: 'yyHeader',
  data() {
    return {
      headerOptions: [
        { title: '发现音乐', id: '1', href: 'descover' },
        { title: '我的音乐', id: '2', href: 'myself' },
        { title: '朋友', id: '3', href: 'friends' },
        { title: '商城', id: '4', href: 'supermarket' },
        { title: '音乐人', id: '5', href: 'musicer' },
        // { title: '下载客户端', id: '6', href: 'download' },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      // 将点击的 tab 传给父组件, 在父组件（home.vue）中执行路由的跳转；
      this.$emit('tabs-click', tab);
    },
  },
  watch: {
    // 路由相关的方法；他的触发条件是，当前组件不会销毁，路由发生变化，即在当前组件下的 子路由变化；
    $route(to, from) {
      // 对路由变化作出响应...
      console.log('$route_to',to);
      console.log('$route_from',from);
    },
  }
};
</script>

<style>

</style>
