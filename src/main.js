import Vue from 'vue';
import ElementUi from 'element-ui';
import App from './App.vue';
import router from './router';
import '@/assets/css/index.less';

// 处理 vue-router 3.1 之后，路由重复抛出的异常
const originalPush = router.__proto__.push;
router.__proto__.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.config.productionTip = false;
Vue.use(ElementUi);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
