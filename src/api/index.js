

import axios from 'axios';

import {
  recomendSongs, // 推荐的歌曲
  bannerSwiper,
} from './config'


export default {

  getBannerSwiper() {
    return axios.get(bannerSwiper);
  },
  /**
   * 获取每日推荐歌曲
   */
   getRecSongsFn () {
    return axios.get(recomendSongs);
  },

}
