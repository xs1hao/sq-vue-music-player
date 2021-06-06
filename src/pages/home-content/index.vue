<template>
  <div class="home-content">
    <!-- 轮播图 -->
    <div class="home-carousel">
      <carousel></carousel>
    </div>
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
    this.getRecomentSongs(); // 需要登录
    // this.getUserRecord('19047'); // 请求 502；
  },
  methods: {
    getRecomentSongs() {
      service.getRecSongsFn().then((res) => {
        console.log('In home conten', res);
      });
    },
    getUserRecord(id) {
      service.userRecordFn(id).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .home-content{
    width: 100%;
    height: calc(100% - 60px);
    overflow: auto;
    .home-carousel{
      background: #7a6fdb80;
    }
  }
</style>
