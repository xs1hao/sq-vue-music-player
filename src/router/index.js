import Vue from 'vue';
import Router from 'vue-router';

// import Home from '../pages/home.vue';
// import HomeContent from '../pages/home-content';
// import MySelf from '../pages/myself'; // 我的音乐；
// import Friends from '../pages/friends';
// import Musicer from '../pages/musicer';
// import SuperMarket from '../pages/supermarket';

// 使用懒加载的方式，这样只是在组件加载的时候才会加载对应的js，避免的首屏加载的 js 文件过大；
const HomePage = () => import(/* webpackChunkName: "group-home" */ '../pages/home');
const HomeContentPage = () => import(/* webpackChunkName: "group-home" */ '../pages/home-content');
const MySelfPage = () => import(/* webpackChunkName: "group-myself" */ '../pages/myself');
const FriendsPage = () => import(/* webpackChunkName: "group-friends" */ '../pages/friends');
const SuperMarketPage = () => import(/* webpackChunkName: "group-supermarket" */ '../pages/supermarket');
const MusicerPage = () => import(/* webpackChunkName: "group-musicer" */ '../pages/musicer');

Vue.use(Router);

const routeArr = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    redirect: '/descover',
    children: [
      {
        path: '/descover',
        component: HomeContentPage,
      },
      {
        path: '/myself/:userId',
        // name 属性，可以帮助我们在不适用 path 的情况下，而使用name 属性，实现路由的跳转；
        name: 'mySelfPage',
        component: MySelfPage,
      },
      {
        path: '/friends',
        component: FriendsPage,
        // “别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构，(好像不生效)；
        alias: '/b',
      },
      {
        path: '/musicer',
        component: MusicerPage,
        // 路由独享的守卫
        beforeEnter: (to, from, next) => {
          // console.log('In musicer path');
          next();
        },
      },
      {
        path: '/supermarket',
        component: SuperMarketPage,
      },
    ],
  },
  {
    path: '*', // 匹配全路径；
    redirect: '/descover',
  },
];

// 使用 router.beforeEach 注册一个全局前置守卫：
const musicRoutes = new Router({
  routes: routeArr,
  mode: 'history', // 使用 history 路由
});

/**
 * 如下三个守卫：
 * 从上到下依次执行；
 * * */

// beforeEach 全局前置守卫;
musicRoutes.beforeEach((to, from, next) => {
  // console.log('router beforeEach');
  // 没有 next() 就不会跳转了~； next 可用参数:
  // 1) false:中断跳转，
  // 2) '/': 重写路由路径；
  // 3) error:如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
  next();
});

/**
 * 全局解析守卫
 * 这和 router.beforeEach 类似;
 * 区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
 * * */
musicRoutes.beforeResolve((to, from, next) => {
  // console.log('router beforeResolve');
  next();
});

/**
 * 全局后置钩子
 * * */
musicRoutes.afterEach((to, from) => {
  // console.log('router afterEach');
});


export default musicRoutes;
