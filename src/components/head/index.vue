<template>
  <div class="yy-header">
    <div class="tabs">
      <el-menu
        :default-active="'descover'"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleClick"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- <template v-for="item in headerOptions">
          <el-menu-item index="item.id" :key="item.title">{{item.title}}</el-menu-item>
         </template> -->
        <el-menu-item index="descover">发现音乐</el-menu-item>
        <el-menu-item index="myself">我的音乐</el-menu-item>
        <el-menu-item index="friends">朋友</el-menu-item>
        <el-menu-item index="shop">商城</el-menu-item>
        <el-menu-item index="musicer">音乐人</el-menu-item>
        <el-menu-item index="download">下载客户端</el-menu-item>
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
        { title: '商城', id: '4', href: 'shop' },
        { title: '音乐人', id: '5', href: 'musicer' },
        { title: '下载客户端', id: '6', href: 'download' },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      // 将点击的tab传给父组件
      this.$emit('tabs-click', tab);
    },
  },
};
</script>

<style>

</style>
