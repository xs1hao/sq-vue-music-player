
// request 是在工程中自己对 axios 的一层封装；
import request from "./interceptors";

import {
  recomendSongs, // 推荐的歌曲
  bannerSwiper,
  userRecord, // user 用户播放记录
} from "./config";

export default {
  // 获取首页的轮播图数据；
  getBannerSwiper() {
    return request.get(bannerSwiper);
  },
  /**
   * 获取每日推荐歌曲
   */
  getRecSongsFn() {
    return request.get(recomendSongs);
  },

  /**
   * 获取用户播放记录
   * 登陆后调用此接口 , 传入用户 id, 可获取用户播放记录
   * @param {*} uid 用户id
   * @param {*} type type=1 时只返回 weekData, type=0 时返回 allData
   */
  userRecordFn(uid, type = 1) {
    return request.get(userRecord, {
      params: {
        uid,
        type
      }
    });
  }
};
