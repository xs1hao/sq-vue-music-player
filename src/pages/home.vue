<template>
  <div class="wangyi-yun-music">
    <yy-head @tabs-click="changeTabs"></yy-head>
    <!-- 基于路由的动态效果，还需要配套的 css -->
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <div class="music-player">
      <player></player>
    </div>
  </div>

</template>
// 首页组件
<script>
import yyHead from '../components/head';
import homeConten from './home-content/index';
import player from '../components/player';

export default {
  name: 'Homes',
  data() {
    return {
      userInfo: {
        id: 109,
        name: 'leimei',
      },
      transitionName: 'slide-right',
    };
  },
  components: {
    yyHead,
    homeConten,
    player,
  },
  methods: {
    changeTabs(tag) {
      if (this.$route.path !== `/${tag}`) {
        if (tag === 'myself') {
          // mySelfPage 与 路由实例里面的 路由 ‘name’ 相通；
          this.$router.push({
            name: 'mySelfPage',
            params: {
              userId: '123',
            },
            query: {
              songs: `${this.userInfo.name}`,
              time: 2,
            },
          });
        } else {
          // router.replace(location, onComplete?, onAbort?);
          // 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录;
          this.$router.push({ path: `../${tag}` }); // 编程式的导航；等价于： <router-link :to="...">
        }
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  },
};
</script>

<style lang="less" scoped>
  .wangyi-yun-music{
    width: 100%;
    height: 100%;
    .music-player{
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #676a6c;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .75s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .child-view {
    position: absolute;
    transition: all .75s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
