import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const modulesFiles = require.context('./', true, /\.js$/);
const routers = modulesFiles.keys().reduce((routers, modulePath) => {
  if (modulePath !== './index.js') {
    const value = modulesFiles(modulePath);
    routers.push(...value.default);
  }
  return routers;
}, []);

export default new VueRouter({
  base: '/',
  routes: [
    ...routers,
    {
      path: '/',
      redirect: '/css3/road',
    },
  ],
});
