<template>
  <div class="header">
    <yy-head @tabs-click="changeTabs"></yy-head>
    <router-view/>
  </div>

</template>
// 首页组件
<script>
import yyHead from '../components/head';
import homeConten from './home-content/index';

export default {
  name: 'Homes',
  data() {
    return {

    };
  },
  components: {
    yyHead,
    homeConten,
  },
  methods: {
    changeTabs(data) {
      if (this.$route.path !== `/${data}`) {
        // this.$router.replace(data);
        this.$router.push({ path: data })
      }
    }
  }
};
</script>

<style>

</style>
