// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

axios.defaults.baseURL='https://free-api.heweather.com/s6/weather/forecast';
//所有请求自带的头信息
//axios.headers = {};//覆盖原本默认头
//走默认头，修改个别
//axios.defaults.headers.accept= 'abc';



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
