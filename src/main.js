// 引入 Element-ui 样式；
import 'element-ui/lib/theme-chalk/index.css'; // absolute 要放在 relative 前面
import './assets/css/style.css';

import Vue from 'vue';
// import { Button, Tabs } from 'element-ui';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';

// 引入element-ui 库的样式；

Vue.config.productionTip = false;


// 使用 Element-ui 组件
// Vue.use(Button);
// Vue.use(Tabs);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 将路由挂载到根实例上；
  components: { App },
  template: '<App/>',
});
