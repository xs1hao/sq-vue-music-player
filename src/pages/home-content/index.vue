<template>
  <div class="home-content">
    <!-- 轮播图 -->
    <carousel></carousel>
  </div>
</template>

<script>
import service from '../../api';
import carousel from '../../components/carousel';
// 首页除去 header 部分；
export default {
  name: 'HomeContent',
  data() {
    return {

    };
  },
  components: {
    carousel,
  },
  created() {
    // this._getBannerSwiper();
    // this.getRecomentSongs(); // 需要登录

  },
  methods: {
    // 获取轮播图数据；
    _getBannerSwiper() {
      service.getBannerSwiper().then(res => {
        console.log('in home conten',res);
      })
    },
    getRecomentSongs() {
      service.getRecSongsFn().then(res => {
        console.log('in home conten',res);
      })
    }
  }
};
</script>

<style>

</style>
