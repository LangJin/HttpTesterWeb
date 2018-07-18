// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import ElementUI from 'element-ui';
import echarts from 'echarts';
// import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import "babel-polyfill";
import 'element-ui/lib/theme-default/index.css';


Vue.config.productionTip = true;

/* eslint-disable no-new */

Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
