<template>
  <div class="carousel">
    <el-carousel :interval="4000"
                 height="320px"
                 :autoplay="false"
                 trigger="'click'">
      <el-carousel-item v-for="item in swiperList"
                        :key="item.bannerId">
        <img class="banner-img"
             :src="item.pic"
             alt />
        <span class="title">{{item.typeTitle}}</span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import service from '../../api'

export default {
  name: 'carousel',
  data() {
    return {
      swiperList: [],
    }
  },
  created() {
    this._getBannerSwiper()
  },
  methods: {
    // 获取轮播图数据；
    _getBannerSwiper() {
      service.getBannerSwiper().then(res => {
        if (res && res.code === 200) {
          this.swiperList = res.banners
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.carousel {
  width: 50%;
  margin: 0 auto;
  .banner-img {
    width: 100%;
    height: 100%;
  }
  /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #0aa2a4;
  }
}
</style>
