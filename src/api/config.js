
const api = './api';
// 发现页面
export const bannerSwiper = api + '/banner?type=1' // 请求发现页面轮播图
export const recomendSongs = `${api}/recommend/songs`; // 每日推荐歌曲
export const highquality = api + '/top/playlist/highquality' // 精品歌单
export const catlist = api + '/playlist/catlist' // 获取歌单分类 !!!

// ===================我的页面相关
export const userRecord = api + '/user/record' // 用户播放记录
