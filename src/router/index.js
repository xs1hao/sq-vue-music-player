import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home.vue';
import HomeContent from '../pages/home-content';
import MySelf from '../pages/myself'; // 我的音乐；

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: HomeContent
        },
        {
          path: 'myself',
          component: MySelf
        }
      ]
    },
    {
      path: '/**',
      redirect: '/'
    },
  ],
  mode: 'history', // 使用 history 路由
});
