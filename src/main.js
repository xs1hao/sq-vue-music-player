// 引入 Element-ui 样式；
import 'element-ui/lib/theme-chalk/index.css'; // absolute 要放在 relative 前面

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
  router,
  components: { App },
  template: '<App/>',
});
